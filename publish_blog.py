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
    print("\nChanged files:")
    for index, (status, path) in enumerate(files, start=1):
        print(f"{index:>2}. [{status}] {path}")


def choose_files(files):
    print("\nChoose files to commit:")
    print("  a        commit all changed files")
    print("  1,3,5    commit selected files")
    print("  q        quit")

    while True:
        choice = input("\nYour choice: ").strip()
        if choice.lower() in {"q", "quit", "exit"}:
            raise SystemExit("Cancelled.")
        if choice.lower() in {"a", "all", "*"}:
            return [path for _, path in files]

        try:
            indexes = [int(part.strip()) for part in choice.split(",") if part.strip()]
        except ValueError:
            print("Please enter a, q, or numbers like 1,3,5.")
            continue

        if not indexes or any(index < 1 or index > len(files) for index in indexes):
            print("Selection out of range.")
            continue

        return [files[index - 1][1] for index in indexes]


def ask_message():
    while True:
        message = input("\nCommit message: ").strip()
        if message:
            return message
        print("Commit message cannot be empty.")


def main():
    print(f"Blog path: {BLOG_DIR}")
    run(["git", "config", "--global", "--add", "safe.directory", str(BLOG_DIR).replace("\\", "/")], check=False)

    files = git_status()
    if not files:
        print("No changes to publish.")
        return

    print_files(files)
    selected = choose_files(files)
    message = ask_message()

    print("\nBuilding Hexo site...")
    run(["npm", "run", "build"])

    print("\nStaging files...")
    run(["git", "add", "--", *selected])

    staged = run(["git", "diff", "--cached", "--name-only"], capture=True).strip()
    if not staged:
        print("No staged changes. Nothing to commit.")
        return

    print("\nFiles staged for commit:")
    print(staged)

    confirm = input("\nCommit and push these files? [y/N]: ").strip().lower()
    if confirm not in {"y", "yes"}:
        run(["git", "restore", "--staged", "--", *selected], check=False)
        raise SystemExit("Cancelled. Staged files were unstaged.")

    print("\nCommitting...")
    run(["git", "commit", "-m", message])
    commit = run(["git", "rev-parse", "--short", "HEAD"], capture=True).strip()

    print("\nPushing to GitHub...")
    run(["git", "push"])

    print(f"\nPublished commit {commit}. Cloudflare Pages will deploy automatically.")


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\nCancelled.")
        sys.exit(130)
