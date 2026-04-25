# ElonYang 的博客

这是一个 Hexo 博客项目，源码托管在 GitHub，并通过 Cloudflare Pages 自动部署。

当前主题：

```text
hexo-theme-fluid
```

## 本地目录

博客项目目录：

```text
D:\blog
```

文章目录：

```text
D:\blog\source\_posts
```

图片等静态资源可以放在：

```text
D:\blog\source\images
```

在文章中引用图片：

```markdown
![图片说明](/images/example.png)
```

## 常用命令

进入博客目录：

```powershell
cd D:\blog
```

生成静态网页：

```powershell
npm run build
```

`npm run build` 实际执行的是：

```text
hexo generate
```

它会把 `source/_posts` 里的 Markdown 文章生成到 `public` 目录。

本地预览：

```powershell
npm run server
```

## 发布脚本

推荐双击运行：

```text
D:\blog\publish_blog.bat
```

也可以在 PowerShell 中运行：

```powershell
cd D:\blog
python publish_blog.py
```

脚本会自动完成：

```text
检查改动文件
选择要提交的文件
输入提交说明
执行 npm run build
git add
git commit
git push
```

脚本菜单：

```text
1  提交全部改动文件
2  输入文件名选择要提交的文件
3  退出
```

选择 `2` 时，可以输入文件名或路径，例如：

```text
学习路线.md
```

也可以一次输入多个文件，使用英文逗号分隔：

```text
学习路线.md,_config.yml
```

确认提交时：

```text
输入 1 确认
输入 2 取消
```

## 手动发布

如果不使用脚本，也可以手动执行：

```powershell
cd D:\blog
npm run build
git add .
git commit -m "Update blog"
git push
```

`git push` 成功后，Cloudflare Pages 会自动部署。

## GitHub 配置

远程仓库：

```text
https://github.com/2863341363/elonyangblog
```

主分支：

```text
main
```

查看当前状态：

```powershell
git status
```

## Cloudflare Pages 配置

Cloudflare Pages 连接 GitHub 仓库后，构建配置如下：

```text
Framework preset: Hexo
Build command: npm run build
Build output directory: public
Production branch: main
Root directory: /
```

推荐环境变量：

```text
NODE_VERSION = 22
```

自定义域名：

```text
elonyangblog.ccwu.cc
```

DNS 记录通常为：

```text
Type: CNAME
Name: elonyangblog.ccwu.cc 或 @
Target: Cloudflare Pages 分配的 pages.dev 域名
Proxy status: Proxied
TTL: Auto
```

## 写新文章

在 `D:\blog\source\_posts` 新建 Markdown 文件，例如：

```text
D:\blog\source\_posts\my-post.md
```

文章开头建议写：

```markdown
---
title: 我的新文章
date: 2026-04-25 15:30:00
tags:
  - 笔记
categories:
  - 知识库
---

这里写正文。
```

写完后运行发布脚本即可。
