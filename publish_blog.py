import locale
import os
import re
import subprocess
import sys
from datetime import datetime
from pathlib import Path


BLOG_DIR = Path(__file__).resolve().parent
POSTS_DIR = BLOG_DIR / "source" / "_posts"
NPM_CANDIDATES = [
    "npm.cmd",
    r"D:\Environment\NodeJS\npm.cmd",
]


def configure_console():
    for stream in (sys.stdout, sys.stderr):
        try:
            stream.reconfigure(encoding="utf-8")
        except Exception:
            pass


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


def input_default(prompt, default=""):
    suffix = f"（默认：{default}）" if default else ""
    value = input(f"{prompt}{suffix}：").strip()
    return value or default


def input_required(prompt):
    while True:
        value = input(f"{prompt}：").strip()
        if value:
            return value
        print("这里不能为空。")


def input_required_default(prompt, default=""):
    while True:
        value = input_default(prompt, default)
        if value:
            return value
        print("这里不能为空。")


def split_items(text):
    text = text.replace("，", ",")
    return [item.strip() for item in text.split(",") if item.strip()]


def slugify_filename(text):
    value = text.strip().replace("\\", "-").replace("/", "-")
    value = re.sub(r'[<>:"|?*\r\n\t]+', "-", value)
    value = re.sub(r"\s+", "-", value).strip(".- ")
    return value or datetime.now().strftime("%Y%m%d%H%M%S")


def yaml_scalar(value):
    value = str(value or "").replace("\r", " ").replace("\n", " ").strip()
    if not value:
        return '""'
    escaped = value.replace("\\", "\\\\").replace('"', '\\"')
    return f'"{escaped}"'


def yaml_list(key, values):
    lines = [f"{key}:"]
    if not values:
        lines.append("  - 未分类")
        return lines
    lines.extend(f"  - {item}" for item in values)
    return lines


def build_front_matter(meta):
    lines = [
        "---",
        f"title: {yaml_scalar(meta['title'])}",
        f"date: {meta['date']}",
        *yaml_list("categories", meta["categories"]),
    ]
    if meta["tags"]:
        lines.extend(yaml_list("tags", meta["tags"]))
    lines.append(f"description: {yaml_scalar(meta['description'])}")
    lines.append("---")
    return "\n".join(lines)


def ask_post_meta(existing=None):
    existing = existing or {}
    print("\n请填写文章配置。多个分类或标签可以用英文逗号分隔。")
    title = input_required_default("title 标题", existing.get("title", "")) if existing else input_required("title 标题")
    default_date = existing.get("date") or datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    date_text = input_default("date 发布时间", default_date)
    category_default = ",".join(existing.get("categories", [])) or "技术笔记"
    categories = split_items(input_default("categories 分类", category_default))
    tag_default = ",".join(existing.get("tags", []))
    tags = split_items(input_default("tags 标签，可留空", tag_default))
    description = input_required_default("description 摘要", existing.get("description", ""))
    return {
        "title": title,
        "date": date_text,
        "categories": categories,
        "tags": tags,
        "description": description,
    }


def parse_simple_front_matter(text):
    normalized = text.replace("\r\n", "\n").replace("\r", "\n")
    if not normalized.startswith("---\n"):
        return {}, normalized
    end = normalized.find("\n---", 4)
    if end == -1:
        return {}, normalized

    raw = normalized[4:end].strip("\n")
    body = normalized[end + len("\n---"):].lstrip("\n")
    meta = {}
    current_key = None
    for line in raw.splitlines():
        if not line.strip():
            continue
        if line.startswith("  - ") and current_key:
            meta.setdefault(current_key, []).append(line[4:].strip())
            continue
        if ":" not in line:
            continue
        key, value = line.split(":", 1)
        key = key.strip()
        value = value.strip().strip('"').strip("'")
        current_key = key
        if value:
            meta[key] = value
        elif key in ("categories", "tags"):
            meta[key] = []
    return meta, body


def normalize_existing_meta(meta):
    def as_list(value):
        if isinstance(value, list):
            return value
        if not value:
            return []
        return [str(value)]

    return {
        "title": meta.get("title", ""),
        "date": meta.get("date", ""),
        "categories": as_list(meta.get("categories")),
        "tags": as_list(meta.get("tags")),
        "description": meta.get("description", ""),
    }


def create_post_interactive():
    POSTS_DIR.mkdir(parents=True, exist_ok=True)
    meta = ask_post_meta()
    default_name = f"{slugify_filename(meta['title'])}.md"
    filename = input_default("文件名", default_name)
    if not filename.lower().endswith(".md"):
        filename += ".md"

    path = POSTS_DIR / filename
    if path.exists():
        raise SystemExit(f"文章已存在：{path}")

    body = input_default("正文开头，可留空", "这里开始写正文。")
    content = f"{build_front_matter(meta)}\n\n{body}\n"
    path.write_text(content, encoding="utf-8", newline="\n")
    print(f"\n已创建文章：{path}")
    return path


def list_posts():
    POSTS_DIR.mkdir(parents=True, exist_ok=True)
    return sorted(POSTS_DIR.glob("*.md"), key=lambda item: item.stat().st_mtime, reverse=True)


def choose_post_file():
    posts = list_posts()
    if not posts:
        raise SystemExit("还没有文章文件。")

    print("\n请选择要修改配置的文章：")
    for index, path in enumerate(posts, start=1):
        print(f"  {index}. {path.name}")

    while True:
        value = input("请输入编号，或直接输入文件名：").strip()
        if value.isdigit():
            index = int(value)
            if 1 <= index <= len(posts):
                return posts[index - 1]
        matches = [path for path in posts if value in path.name]
        if len(matches) == 1:
            return matches[0]
        if len(matches) > 1:
            print("匹配到多个文件，请输入更完整的文件名。")
            continue
        print("没有找到这篇文章。")


def update_post_meta_interactive():
    path = choose_post_file()
    text = path.read_text(encoding="utf-8-sig")
    raw_meta, body = parse_simple_front_matter(text)
    existing = normalize_existing_meta(raw_meta)
    meta = ask_post_meta(existing)
    path.write_text(f"{build_front_matter(meta)}\n\n{body}", encoding="utf-8", newline="\n")
    print(f"\n已更新文章配置：{path}")
    return path


def missing_required_meta(meta):
    normalized = normalize_existing_meta(meta)
    missing = []
    if not normalized["title"].strip():
        missing.append("title")
    categories = [item.strip() for item in normalized["categories"] if item.strip()]
    if not categories or categories == ["未分类"]:
        missing.append("categories")
    if not normalized["description"].strip():
        missing.append("description")
    return missing


def ensure_publishable_posts():
    posts = list_posts()
    if not posts:
        print("\n没有检测到文章文件，跳过文章配置检查。")
        return

    fixed = []
    print("\n正在检查文章配置 title/categories/description...")
    for path in posts:
        text = path.read_text(encoding="utf-8-sig")
        raw_meta, body = parse_simple_front_matter(text)
        missing = missing_required_meta(raw_meta)
        if not missing:
            continue

        print(f"\n文章缺少配置，发布前必须补齐：{path.name}")
        print(f"缺少字段：{', '.join(missing)}")
        existing = normalize_existing_meta(raw_meta)
        meta = ask_post_meta(existing)
        path.write_text(f"{build_front_matter(meta)}\n\n{body}", encoding="utf-8", newline="\n")
        fixed.append(path)

    if fixed:
        print("\n已补齐以下文章配置：")
        for path in fixed:
            print(f"  - {path.name}")
    else:
        print("文章配置检查通过。")


def choose_workflow():
    print("\n请选择操作：")
    print("  1  新建文章，只创建 Markdown 文件，不发布")
    print("  2  发布已有改动到仓库")
    print("  3  修改已有文章配置，只修改文件，不发布")
    print("  4  修改已有文章配置，并发布到仓库")
    print("  5  退出")

    while True:
        choice = input("\n请输入选项 1/2/3/4/5：").strip()
        if choice in {"1", "2", "3", "4", "5"}:
            return choice
        print("请输入 1、2、3、4 或 5。")


def find_npm():
    for candidate in NPM_CANDIDATES:
        if candidate == "npm.cmd":
            return candidate
        if Path(candidate).exists():
            return candidate
    raise FileNotFoundError(
        "没有找到 npm.cmd。请确认 Node.js 已安装，或把 npm.cmd 路径加入脚本的 NPM_CANDIDATES。"
    )


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
    configure_console()
    print(f"博客目录：{BLOG_DIR}")
    safe_dir = str(BLOG_DIR).replace("\\", "/")
    run(["git", "config", "--global", "--add", "safe.directory", safe_dir], check=False)

    workflow = choose_workflow()
    if workflow == "1":
        create_post_interactive()
        print("\n文章文件已创建。脚本已结束，没有提交，也没有推送。")
        return
    if workflow == "3":
        update_post_meta_interactive()
        print("\n文章配置已更新。脚本已结束，没有提交，也没有推送。")
        return
    if workflow == "4":
        update_post_meta_interactive()
    if workflow == "5":
        raise SystemExit("已取消。")

    ensure_publishable_posts()

    files = get_changed_files()
    if not files:
        print("没有需要发布的改动。")
        return

    print_changed_files(files)
    selected = choose_files(files)
    message = ask_commit_message()

    print("\n正在生成 Hexo 博客...")
    run([find_npm(), "run", "build"])

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


def wait_before_exit():
    if os.name != "nt":
        return
    try:
        input("\n按回车键退出...")
    except EOFError:
        pass


if __name__ == "__main__":
    exit_code = 0
    try:
        main()
    except KeyboardInterrupt:
        print("\n已取消。")
        exit_code = 130
    except SystemExit as error:
        if error.code not in (None, 0):
            print(f"\n{error}")
        exit_code = error.code if isinstance(error.code, int) else 1
    except Exception as error:
        print(f"\n发生错误：{error}")
        exit_code = 1
    finally:
        wait_before_exit()
    sys.exit(exit_code)
