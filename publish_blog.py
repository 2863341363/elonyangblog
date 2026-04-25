import subprocess
import sys
import locale
from pathlib import Path


BLOG_DIR = Path(__file__).resolve().parent


def decode_output(data):
    for encoding in ("utf-8", "utf-8-sig", locale.getpreferredencoding(False), "gbk"):
        try:
            return data.decode(encoding)
        except UnicodeDecodeError:
            continue
    return data.decode("utf-8", errors="replace")


def run(args, check=True, capture=False):
    result = subprocess.run(
        args,
        cwd=BLOG_DIR,
        stdout=subprocess.PIPE if capture else None,
        stderr=subprocess.STDOUT if capture else None,
    )
    output = decode_output(result.stdout) if capture and result.stdout is not None else ""
    if check and result.returncode != 0:
        if output:
            print(output)
        raise SystemExit(result.returncode)
    return output if capture else ""


def get_changed_files():
    output = run(["git", "-c", "core.quotepath=false", "status", "--porcelain"], capture=True)
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


def print_changed_files(files):
    print("\n检测到以下改动文件：")
    for status, path in files:
        print(f"  [{status}] {path}")


def match_files(files, text):
    query = text.strip().replace("\\", "/").strip('"').strip("'")
    if not query:
        return []

    paths = [path for _, path in files]
    exact = [path for path in paths if path == query]
    if exact:
        return exact

    exact_name = [path for path in paths if Path(path).name == query]
    if exact_name:
        return exact_name

    query_lower = query.lower()
    return [path for path in paths if query_lower in path.lower()]


def choose_files(files):
    print("\n请选择操作：")
    print("  1  提交全部改动文件")
    print("  2  输入文件名选择要提交的文件")
    print("  3  退出")

    while True:
        choice = input("\n请输入选项 1/2/3：").strip()
        if choice == "1":
            return [path for _, path in files]
        if choice == "3":
            raise SystemExit("已取消。")
        if choice != "2":
            print("请输入 1、2 或 3。")
            continue

        selected = []
        print("\n请输入要提交的文件名或路径。")
        print("可以输入多个，用英文逗号分隔，例如：学习路线.md,_config.yml")
        text = input("文件名：").strip()

        for part in [item.strip() for item in text.split(",") if item.strip()]:
            matches = match_files(files, part)
            if not matches:
                print(f"没有找到匹配的文件：{part}")
                selected = []
                break
            if len(matches) == 1:
                selected.append(matches[0])
                continue

            print(f"\n“{part}”匹配到多个文件：")
            for index, path in enumerate(matches, start=1):
                print(f"  {index}. {path}")
            index_text = input("请输入要选择的编号：").strip()
            try:
                index = int(index_text)
            except ValueError:
                print("编号无效。")
                selected = []
                break
            if index < 1 or index > len(matches):
                print("编号超出范围。")
                selected = []
                break
            selected.append(matches[index - 1])

        if selected:
            return list(dict.fromkeys(selected))


def ask_commit_message():
    while True:
        message = input("\n请输入提交说明：").strip()
        if message:
            return message
        print("提交说明不能为空。")


def main():
    print(f"博客目录：{BLOG_DIR}")
    safe_dir = str(BLOG_DIR).replace("\\", "/")
    run(["git", "config", "--global", "--add", "safe.directory", safe_dir], check=False)

    files = get_changed_files()
    if not files:
        print("没有需要发布的改动。")
        return

    print_changed_files(files)
    selected = choose_files(files)
    message = ask_commit_message()

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
