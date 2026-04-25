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
    .slice(0, 140);
}

hexo.extend.generator.register('custom-home', function(locals) {
  const config = this.config;
  const posts = locals.posts
    .sort('-date')
    .filter(post => post.published !== false)
    .toArray();

  const postData = posts.map(post => ({
    title: post.title || post.slug || '未命名文章',
    date: formatDate(post.date),
    path: `/${post.path}`,
    excerpt: plainExcerpt(post) || '这篇文章暂时还没有摘要，点进去看看完整内容。'
  }));

  const postItems = postData.map((post, index) => `
    <li>
      <button class="post-link" type="button" data-index="${index}">
        <span>${escapeHtml(post.title)}</span>
        <small>${escapeHtml(post.date)}</small>
      </button>
    </li>`).join('');

  const html = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(config.title)}</title>
  <meta name="description" content="${escapeHtml(config.description || config.subtitle || '')}">
  <link rel="stylesheet" href="/css/home.css">
</head>
<body>
  <main class="desktop">
    <aside class="sidebar">
      <a class="brand" href="/">ElonYang</a>
      <p class="tagline">记录学习、技术和生活</p>

      <div class="article-count">
        <strong>${postData.length}</strong>
        <span>篇文章</span>
      </div>

      <section class="article-list">
        <h2>所有文章</h2>
        <ul>
          ${postItems || '<li class="empty">暂无文章</li>'}
        </ul>
      </section>
    </aside>

    <section class="workspace">
      <button class="sidebar-handle" type="button" aria-label="收起侧边栏" aria-expanded="true">
        <span aria-hidden="true">‹</span>
      </button>
      <header class="topbar">
        <div class="window-dots" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <div class="hero-title">记录学习、技术和生活</div>
        <nav class="nav">
          <a href="/posts/">文章</a>
          <a href="/archives/">归档</a>
          <a href="/about/">关于</a>
        </nav>
      </header>

      <section class="intro-panel">
        <p class="eyebrow">ElonYang's Blog</p>
        <h1>把零散的学习，整理成清晰的路线。</h1>
        <p>
          这个博客用来存放学习路线、技术笔记、工具配置和项目部署记录。左侧会动态列出所有文章，点击文章名可以在这里预览，再进入完整内容。
        </p>
      </section>

      <section class="feature-card">
        <div class="feature-meta">
          <span id="feature-date">${escapeHtml(postData[0]?.date || '')}</span>
          <span id="feature-position">${postData.length ? `1 / ${postData.length}` : '0 / 0'}</span>
        </div>
        <h2 id="feature-title">${escapeHtml(postData[0]?.title || '暂无文章')}</h2>
        <p id="feature-excerpt">${escapeHtml(postData[0]?.excerpt || '写下第一篇文章后，它会出现在这里。')}</p>
        <a id="feature-link" class="button" href="${escapeHtml(postData[0]?.path || '/posts/')}">阅读这篇</a>
      </section>
    </section>
  </main>

  <script>
    const posts = ${JSON.stringify(postData)};
    let active = 0;
    let timer = null;

    const title = document.getElementById('feature-title');
    const date = document.getElementById('feature-date');
    const position = document.getElementById('feature-position');
    const excerpt = document.getElementById('feature-excerpt');
    const link = document.getElementById('feature-link');
    const buttons = Array.from(document.querySelectorAll('.post-link'));
    const shell = document.querySelector('.desktop');
    const toggle = document.querySelector('.sidebar-handle');

    function setSidebarCollapsed(collapsed) {
      shell.classList.toggle('sidebar-collapsed', collapsed);
      toggle.setAttribute('aria-expanded', String(!collapsed));
      toggle.setAttribute('aria-label', collapsed ? '打开侧边栏' : '收起侧边栏');
      toggle.querySelector('span').textContent = collapsed ? '›' : '‹';
      localStorage.setItem('home-sidebar-collapsed', collapsed ? '1' : '0');
    }

    function render(index) {
      if (!posts.length) return;
      active = (index + posts.length) % posts.length;
      const post = posts[active];
      title.textContent = post.title;
      date.textContent = post.date;
      position.textContent = (active + 1) + ' / ' + posts.length;
      excerpt.textContent = post.excerpt;
      link.href = post.path;
      buttons.forEach((button, i) => button.classList.toggle('active', i === active));
    }

    function startTimer() {
      clearInterval(timer);
      timer = setInterval(() => render(active + 1), 5200);
    }

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        render(index);
        startTimer();
      });
    });

    toggle.addEventListener('click', () => {
      setSidebarCollapsed(!shell.classList.contains('sidebar-collapsed'));
    });

    setSidebarCollapsed(localStorage.getItem('home-sidebar-collapsed') === '1');
    render(0);
    startTimer();
  </script>
</body>
</html>`;

  return {
    path: 'index.html',
    data: html
  };
});
