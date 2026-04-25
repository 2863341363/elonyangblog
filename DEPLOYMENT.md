# Deployment

This Hexo blog is intended to deploy with Cloudflare Pages from GitHub.

Cloudflare Pages build settings:

```text
Framework preset: Hexo
Build command: npm run build
Build output directory: public
Production branch: main
Root directory: /
```

Custom domain:

```text
elonyangblog.ccwu.cc
```

To publish updates:

```powershell
cd D:\blog
git add .
git commit -m "Update blog"
git push
```
