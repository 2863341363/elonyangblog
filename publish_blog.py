import subprocess
import sys
from pathlib import Path


BLOG_DIR = Path(__file__).resolve().parent


def run(args, check=True, capture=False):
    result = subprocess.run(
        args,
        cwd=BLOG_DIR,
        text=True,
        encoding="utf-8",
        errors="replace",
        stdout=subprocess.PIPE if capture else None,
        stderr=subprocess.STDOUT if capture else None,
    )
    if check and result.returncode != 0:
        if capture and result.stdout:
            print(result.stdout)
        raise SystemExit(result.returncode)
    return result.stdout if capture else ""


def git_status():
    output = run(["git", "status", "--porcelain"], capture=True)
    files = []
    for line in output.splitlines():
        if not line.strip():
            continue
        status = line[:2]
        path = line[3:]
        if " -> " in path:
            path = path.split(" -> ", 1)[1]
        files.append((status, path))
    return files


def print_files(files):
    print("\n检测到以下改动文件：")
    for index, (status, path) in enumerate(files, start=1):
        print(f"{index:>2}. [{status}] {path}")


def choose_files(files):
    print("\n请选择操作：")
    print("  1  提交全部改动文件")
    print("  2  选择要提交的文件")
    print("  3  退出")

    while True:
        choice = input("\n请输入选项 1/2/3：").strip()
        if choice == "3":
            raise SystemExit("已取消。")
        if choice == "1":
            return [path for _, path in files]
        if choice != "2":
            print("请输入 1、2 或 3。")
            continue

        selected_text = input("请输入要提交的文件编号，多个编号用英文逗号分隔，例如 1,3,5：").strip()

        try:
            indexes = [int(part.strip()) for part in selected_text.split(",") if part.strip()]
        except ValueError:
            print("请输入正确的文件编号，例如 1,3,5。")
            continue

        if not indexes or any(index < 1 or index > len(files) for index in indexes):
            print("文件编号超出范围。")
            continue

        return [files[index - 1][1] for index in indexes]


def ask_message():
    while True:
        message = input("\n请输入提交说明：").strip()
        if message:
            return message
        print("提交说明不能为空。")


def main():
    print(f"博客目录：{BLOG_DIR}")
    run(["git", "config", "--global", "--add", "safe.directory", str(BLOG_DIR).replace("\\", "/")], check=False)

    files = git_status()
    if not files:
        print("没有需要发布的改动。")
        return

    print_files(files)
    selected = choose_files(files)
    message = ask_message()

    print("\n正在生成 Hexo 博客...")
    run(["npm", "run", "build"])

    print("\n正在暂存文件...")
    run(["git", "add", "--", *selected])

    staged = run(["git", "diff", "--cached", "--name-only"], capture=True).strip()
    if not staged:
        print("没有暂存的改动，无需提交。")
        return

    print("\n将要提交的文件：")
    print(staged)

    confirm = input("\n确认提交并推送这些文件吗？输入 1 确认，输入 2 取消：").strip()
    if confirm != "1":
        run(["git", "restore", "--staged", "--", *selected], check=False)
        raise SystemExit("已取消，暂存文件已取消暂存。")

    print("\n正在提交...")
    run(["git", "commit", "-m", message])
    commit = run(["git", "rev-parse", "--short", "HEAD"], capture=True).strip()

    print("\n正在推送到 GitHub...")
    run(["git", "push"])

    print(f"\n发布完成，提交编号：{commit}。Cloudflare Pages 会自动部署。")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n已取消。")
        sys.exit(130)
