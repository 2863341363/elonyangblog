'use strict';

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatDate(date) {
  if (!date) return '';
  if (typeof date.format === 'function') return date.format('YYYY-MM-DD');
  return new Date(date).toISOString().slice(0, 10);
}

function plainExcerpt(post) {
  const raw = post.excerpt || post.content || '';
  return String(raw)
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 110);
}

function collectionNames(collection) {
  if (!collection) return [];

  const items = typeof collection.toArray === 'function'
    ? collection.toArray()
    : Array.isArray(collection)
      ? collection
      : [];

  return items
    .map(item => {
      if (typeof item === 'string') return item;
      return item.name || item.slug || item.title || '';
    })
    .filter(Boolean);
}

function primaryCategory(post) {
  return collectionNames(post.categories)[0] || collectionNames(post.tags)[0] || '随笔';
}

function tagsFor(post) {
  const tags = collectionNames(post.tags);
  return tags.length ? tags.slice(0, 3) : [primaryCategory(post)];
}

function readingTime(post) {
  const raw = String(post.raw || post.content || '');
  const words = raw.replace(/<[^>]*>/g, '').replace(/\s+/g, '').length;
  return Math.max(1, Math.ceil(words / 450));
}

function articleCard(post, index, variant) {
  const tags = post.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('');
  return `
    <article class="article-card ${variant || ''}">
      <a class="article-visual sticker-${(index % 6) + 1}" href="${escapeHtml(post.path)}" aria-label="阅读 ${escapeHtml(post.title)}">
        <span class="visual-sun"></span>
        <span class="visual-book"></span>
        <span class="visual-plane"></span>
      </a>
      <div class="article-body">
        <div class="article-meta">
          <span>${escapeHtml(post.category)}</span>
          <span>${escapeHtml(post.date)}</span>
          <span>${post.minutes} 分钟</span>
        </div>
        <h3><a href="${escapeHtml(post.path)}">${escapeHtml(post.title)}</a></h3>
        <p>${escapeHtml(post.excerpt)}</p>
        <div class="tag-row">${tags}</div>
      </div>
    </article>`;
}

hexo.extend.generator.register('custom-home', function(locals) {
  const config = this.config;
  const posts = locals.posts
    .sort('-date')
    .filter(post => post.published !== false)
    .toArray()
    .map(post => ({
      title: post.title || post.slug || '未命名文章',
      date: formatDate(post.date),
      path: `/${post.path}`,
      excerpt: plainExcerpt(post) || '这篇文章暂时还没有摘要，点进去看看完整内容。',
      category: primaryCategory(post),
      tags: tagsFor(post),
      minutes: readingTime(post)
    }));

  const fallbackPosts = [
    {
      title: '在柔软的小岛上，记录灵感、代码与生活',
      date: '2026-04-25',
      path: '/posts/',
      excerpt: '这里会沉淀设计观察、开发笔记、产品思考，以及一些慢慢变亮的日常。',
      category: '生活片段',
      tags: ['灵感', '日常', '博客'],
      minutes: 3
    },
    {
      title: '给个人博客设计一套稳定的内容结构',
      date: '2026-04-25',
      path: '/posts/',
      excerpt: '从分类、标签、摘要和阅读动线开始，让每篇笔记都能被重新发现。',
      category: '产品思考',
      tags: ['信息架构', '博客', '效率'],
      minutes: 5
    },
    {
      title: '让界面保持可爱，但不影响阅读',
      date: '2026-04-25',
      path: '/posts/',
      excerpt: '用轻卡通插画、低饱和配色和清晰排版，把亲和力放在正确的位置。',
      category: '设计观察',
      tags: ['UI/UX', '视觉', '卡通'],
      minutes: 4
    }
  ];

  const articles = posts.length ? posts : fallbackPosts;
  const featured = articles.slice(0, 3);
  const latest = articles.slice(0, 6);
  const categories = ['设计观察', '开发笔记', '产品思考', '生活片段', '读书摘记', '灵感收藏'];
  const categoryCards = categories.map((name, index) => {
    const count = articles.filter(post => post.category === name || post.tags.includes(name)).length;
    const descriptions = {
      '设计观察': '记录界面、体验和视觉判断。',
      '开发笔记': '整理工程实践与问题解决。',
      '产品思考': '把想法变成可执行的结构。',
      '生活片段': '收藏日常里轻轻发亮的部分。',
      '读书摘记': '留下阅读时真正击中的句子。',
      '灵感收藏': '把零散灵感放进一个小抽屉。'
    };

    return `
      <a class="category-card" href="/categories/">
        <span class="category-icon icon-${index + 1}"></span>
        <strong>${escapeHtml(name)}</strong>
        <small>${count || Math.max(1, index + 1)} 篇</small>
        <p>${escapeHtml(descriptions[name])}</p>
      </a>`;
  }).join('');

  const html = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(config.title || 'ElonYang 的博客')}</title>
  <meta name="description" content="${escapeHtml(config.description || config.subtitle || '')}">
  <link rel="stylesheet" href="/css/home.css">
</head>
<body>
  <div class="cursor-dot" aria-hidden="true"></div>
  <div class="click-layer" aria-hidden="true"></div>

  <header class="site-header">
    <a class="brand" href="/" aria-label="ElonYang 的博客首页">
      <span class="brand-mark" aria-hidden="true"></span>
      <span>ElonYang 的博客</span>
    </a>
    <nav class="nav" aria-label="主导航">
      <a href="/">首页</a>
      <a href="/posts/">文章</a>
      <a href="/categories/">分类</a>
      <a href="/about/">关于</a>
    </nav>
    <div class="header-actions">
      <a class="icon-button" href="/posts/" aria-label="搜索文章">⌕</a>
      <button class="icon-button theme-toggle" type="button" aria-label="切换暖夜模式">◐</button>
    </div>
  </header>

  <main>
    <section class="hero-section">
      <div class="hero-copy">
        <p class="eyebrow">Personal notes by ElonYang</p>
        <h1>在柔软的小岛上，记录灵感、代码与生活。</h1>
        <p class="hero-text">这里收集设计观察、开发笔记、产品思考和一些慢慢变亮的日常。所有内容都来自 ElonYang 的个人沉淀。</p>
        <div class="hero-actions">
          <a class="button primary" href="/posts/">开始阅读</a>
          <a class="button secondary" href="/categories/">看看分类</a>
        </div>
      </div>

      <div class="island-scene" aria-label="卡通小岛插画">
        <span class="cloud cloud-a"></span>
        <span class="cloud cloud-b"></span>
        <span class="star star-a">✦</span>
        <span class="star star-b">✧</span>
        <span class="plane"></span>
        <div class="island">
          <span class="island-face"></span>
          <span class="tree"></span>
          <span class="book"></span>
          <span class="coffee"></span>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">Featured</p>
        <h2>精选文章</h2>
        <a href="/posts/">查看全部</a>
      </div>
      <div class="featured-grid">
        ${featured.map((post, index) => articleCard(post, index, 'featured')).join('')}
      </div>
    </section>

    <section class="content-grid">
      <div class="latest-column">
        <div class="section-heading compact">
          <p class="eyebrow">Latest</p>
          <h2>最新文章</h2>
        </div>
        <div class="latest-list">
          ${latest.map((post, index) => articleCard(post, index + 3, 'list')).join('')}
        </div>
      </div>

      <aside class="profile-column">
        <section class="profile-card">
          <div class="avatar" aria-hidden="true">E</div>
          <h2>你好，我是 ElonYang</h2>
          <p>我在这里记录学习路线、技术笔记、产品思考和日常观察。希望这些笔记以后还能照亮自己，也偶尔帮到路过的人。</p>
          <div class="profile-links">
            <a href="/about/">关于我</a>
            <a href="/archives/">归档</a>
          </div>
        </section>

        <section class="subscribe-card">
          <p class="eyebrow">Subscribe</p>
          <h2>把新文章放进你的收件箱</h2>
          <form>
            <input type="email" placeholder="your@email.com" aria-label="邮箱地址">
            <button type="submit">订阅</button>
          </form>
        </section>
      </aside>
    </section>

    <section class="section-block">
      <div class="section-heading">
        <p class="eyebrow">Explore</p>
        <h2>分类入口</h2>
        <a href="/categories/">全部分类</a>
      </div>
      <div class="category-grid">
        ${categoryCards}
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <span>© ${new Date().getFullYear()} ElonYang 的博客</span>
    <span>优雅阅读，轻卡通表达。</span>
  </footer>

  <script>
    const root = document.documentElement;
    const cursor = document.querySelector('.cursor-dot');
    const clickLayer = document.querySelector('.click-layer');
    const themeToggle = document.querySelector('.theme-toggle');

    function setTheme(isDark) {
      root.classList.toggle('warm-night', isDark);
      localStorage.setItem('ey-blog-theme', isDark ? 'warm-night' : 'light');
    }

    setTheme(localStorage.getItem('ey-blog-theme') === 'warm-night');

    themeToggle.addEventListener('click', () => {
      setTheme(!root.classList.contains('warm-night'));
    });

    window.addEventListener('pointermove', event => {
      cursor.style.transform = 'translate(' + event.clientX + 'px, ' + event.clientY + 'px)';
    }, { passive: true });

    window.addEventListener('pointerdown', event => {
      const burst = document.createElement('span');
      burst.className = 'click-burst';
      burst.style.left = event.clientX + 'px';
      burst.style.top = event.clientY + 'px';
      clickLayer.appendChild(burst);
      setTimeout(() => burst.remove(), 700);
    });

    document.querySelectorAll('a, button, input').forEach(item => {
      item.addEventListener('pointerenter', () => cursor.classList.add('is-hovering'));
      item.addEventListener('pointerleave', () => cursor.classList.remove('is-hovering'));
    });
  </script>
</body>
</html>`;

  return {
    path: 'index.html',
    data: html
  };
});
