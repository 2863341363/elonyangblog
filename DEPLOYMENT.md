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

Reading count and like count use Cloudflare Pages Functions + KV.

Cloudflare Pages settings:

```text
Functions: enabled
KV namespace binding:
  Variable name: BLOG_STATS
  KV namespace: create or select a namespace for blog stats
```

API endpoint after deployment:

```text
/api/post-stats
```

If `BLOG_STATS` is not configured, the frontend falls back to browser localStorage, so local preview still works but counts are not shared between visitors.

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
