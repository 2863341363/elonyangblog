'use strict';

const fs = require('fs');
const path = require('path');

let latestGeneratedPages = [];

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
    .slice(0, 96);
}

function collectionNames(collection) {
  if (!collection) return [];
  const items = typeof collection.toArray === 'function'
    ? collection.toArray()
    : Array.isArray(collection)
      ? collection
      : [];

  return items
    .map(item => (typeof item === 'string' ? item : item.name || item.slug || item.title || ''))
    .filter(Boolean);
}

function primaryCategory(post, index) {
  const defaults = ['设计观察', '开发笔记', '产品思考', '生活片段', '读书摘记', '灵感收藏'];
  return collectionNames(post.categories)[0] || collectionNames(post.tags)[0] || defaults[index % defaults.length];
}

function tagsFor(post, category, index) {
  const defaults = [
    ['设计系统', '组件化', '经验分享'],
    ['Next.js', 'React', '缓存'],
    ['产品设计', '需求分析', '方案设计'],
    ['日常', '生活记录', '治愈'],
    ['纳瓦尔宝典', '财富', '心智模型'],
    ['灵感', '设计', '收藏']
  ];
  const tags = collectionNames(post.tags);
  return tags.length ? tags.slice(0, 3) : [category].concat(defaults[index % defaults.length].slice(0, 2));
}

function readingTime(post) {
  const raw = String(post.raw || post.content || '');
  const words = raw.replace(/<[^>]*>/g, '').replace(/\s+/g, '').length;
  return Math.max(4, Math.ceil(words / 420));
}

function normalizePosts(locals) {
  const posts = locals.posts
    .sort('-date')
    .filter(post => post.published !== false)
    .toArray()
    .map((post, index) => {
      const category = primaryCategory(post, index);
      return {
        title: post.title || post.slug || '未命名文章',
        date: formatDate(post.date),
        path: `/${post.path}`,
        excerpt: plainExcerpt(post) || '这篇文章暂时还没有摘要，点进去看看完整内容。',
        category,
        tags: tagsFor(post, category, index),
        minutes: readingTime(post),
        visual: (index % 6) + 1
      };
    });

  const samples = [
    ['如何构建设计系统：从 0 到 1 的思考与实践', '2026-04-20', '设计观察', ['设计系统', '组件化', '经验分享'], 8],
    ['在 Next.js 中优雅地处理数据请求与缓存', '2026-04-16', '开发笔记', ['Next.js', 'React', '缓存'], 6],
    ['一个功能的诞生：需求挖掘到方案落地', '2026-04-10', '产品思考', ['产品设计', '需求分析', '方案设计'], 7],
    ['周末的慢时光：整理房间、烘焙与发呆', '2026-04-06', '生活片段', ['日常', '生活记录', '治愈'], 5],
    ['《纳瓦尔宝典》：关于财富与幸福的智慧', '2026-04-01', '读书摘记', ['纳瓦尔宝典', '财富', '心智模型'], 6],
    ['灵感收集箱：近期看到的有趣设计与想法', '2026-03-28', '灵感收藏', ['灵感', '设计', '收藏'], 4]
  ].map((item, index) => ({
    title: item[0],
    date: item[1],
    path: posts[index]?.path || `/posts/#sample-${index + 1}`,
    excerpt: [
      '分享我在设计系统建设过程中的一些方法、踩过的坑以及总结的经验，希望能给同路人一些启发。',
      '结合实际项目，聊聊我在 Next.js App Router 中遇到的数据请求缓存问题和解决方案。',
      '以我最近做的一个小功能为例，聊聊产品设计的完整流程和背后的思考。',
      '一些平凡却治愈的瞬间，记录生活里那些微小而确定的幸福。',
      '一些触动我的观点摘录，以及读完这本书后的思考与感悟。',
      '收集一些让我眼前一亮的设计、文案和产品想法，持续更新中...'
    ][index],
    category: item[2],
    tags: item[3],
    minutes: item[4],
    visual: index + 1
  }));

  return posts.length >= 6 ? posts : samples;
}

function layout(config, active, body, title) {
  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title || config.title || 'ElonYang 的博客')}</title>
  <meta name="description" content="${escapeHtml(config.description || config.subtitle || '')}">
  <link rel="stylesheet" href="/css/home.css">
</head>
<body>
  <div class="cursor-dot" aria-hidden="true"></div>
  <div class="click-layer" aria-hidden="true"></div>
  <div class="app-shell">
    <header class="site-header">
      <a class="brand" href="/">
        <span class="brand-mark mark-${active === 'home' ? 'lighthouse' : 'island'}" aria-hidden="true"></span>
        <span>ElonYang 的博客</span>
      </a>
      <nav class="nav" aria-label="主导航">
        ${navLink('/', '首页', active === 'home')}
        ${navLink('/posts/', '文章', active === 'posts')}
        ${navLink('/categories/', '分类', active === 'categories')}
        ${navLink('/about/', '关于', active === 'about')}
      </nav>
      <div class="header-actions">
        <a class="icon-search" href="/search/" aria-label="搜索文章"></a>
        <button class="theme-switch" type="button" aria-label="切换主题"><span></span></button>
      </div>
    </header>
    ${body}
  </div>
  <script src="/js/cartoon-cursor.js"></script>
</body>
</html>`;
}

function navLink(href, text, active) {
  return `<a class="${active ? 'active' : ''}" href="${href}">${text}</a>`;
}

function miniIsland() {
  return `<div class="mini-island" aria-hidden="true">
    <span class="mi-cloud one"></span><span class="mi-cloud two"></span>
    <span class="mi-star a">✦</span><span class="mi-star b">✧</span>
    <span class="mi-plane"></span><span class="mi-land"></span><span class="mi-light"></span>
  </div>`;
}

function picture(type) {
  return `<div class="pic pic-${type}"><span></span><i></i><b></b></div>`;
}

function tag(text, tone) {
  return `<span class="tag ${tone || ''}">${escapeHtml(text)}</span>`;
}

function articleRow(post, index) {
  return `<article class="post-row">
    <a href="${escapeHtml(post.path)}" class="post-thumb">${picture(post.visual)}</a>
    <div class="post-main">
      <h2><a href="${escapeHtml(post.path)}">${escapeHtml(post.title)}</a></h2>
      <p>${escapeHtml(post.excerpt)}</p>
      <div class="tag-line">${post.tags.map((item, tagIndex) => tag(item, tagIndex === 0 ? `tone-${post.visual}` : '')).join('')}</div>
    </div>
    <div class="post-side">
      <time>${escapeHtml(post.date)}</time>
      <span class="read-time">${post.minutes} 分钟阅读</span>
    </div>
  </article>`;
}

function cardPost(post, index) {
  return `<article class="small-article">
    <a href="${escapeHtml(post.path)}" class="small-thumb">${picture((index % 6) + 1)}</a>
    <div>
      <strong>${escapeHtml(post.title)}</strong>
      <small>${escapeHtml(post.date)} · ${post.minutes} 分钟阅读</small>
    </div>
  </article>`;
}

function postsPage(config, posts) {
  const chips = ['全部', '🎨 设计观察', '⌘ 开发笔记', '💡 产品思考', '♧ 生活片段', '📖 读书摘记', '⭐ 灵感收藏'];
  const hotTags = ['设计系统', 'Next.js', 'React', '产品设计', '思考', '生活', '读书', '推荐', '效率工具', '灵感', 'UI/UX', '成长'];
  const body = `<main class="page posts-page">
    <section class="posts-hero">
      <div>
        <h1>全部文章</h1>
        <p>记录灵感、代码与生活，这里是我思考和成长的痕迹。</p>
      </div>
      ${miniIsland()}
    </section>
    <div class="filter-tabs">${chips.map((item, index) => `<a class="${index === 0 ? 'selected' : ''}" href="#">${item}</a>`).join('')}</div>
    <div class="posts-layout">
      <section class="post-list">
        ${posts.map(articleRow).join('')}
        <div class="pager"><a>‹</a><a class="current">1</a><a>2</a><a>3</a><a>4</a><span>...</span><a>10</a><a>›</a></div>
      </section>
      <aside class="side-stack">
        <section class="side-card search-card">
          <h2>搜索文章</h2>
          <label><input placeholder="输入关键词搜索..."><span></span></label>
        </section>
        <section class="side-card tags-card">
          <h2>热门标签</h2>
          <div class="tag-cloud">${hotTags.map((item, index) => tag(item, `tone-${(index % 6) + 1}`)).join('')}</div>
          <a class="more-link" href="/tags/">更多 →</a>
        </section>
        <section class="profile-card image-card">
          <div class="profile-art"><span class="avatar-boy"><i></i><b></b></span>${miniIsland()}</div>
          <h2>ElonYang</h2>
          <p>记录灵感、代码与生活。</p>
          <div class="socials"><span>GitHub</span><span>Email</span><span>X</span></div>
          <a class="blue-button" href="/about/">关于我 →</a>
        </section>
        <section class="side-card subscribe-card">
          <h2>订阅更新</h2>
          <p>每周精选内容，不错过任何新文章</p>
          <form><input placeholder="输入你的邮箱"><button>订阅</button></form>
        </section>
      </aside>
    </div>
  </main>`;
  return layout(config, 'posts', body, `文章 - ${config.title}`);
}

function homePage(config, posts) {
  const body = `<main class="page home-page">
    <section class="home-hero">
      <div>
        <p class="soft-label">Personal Blog</p>
        <h1>在柔软的小岛上，记录灵感、代码与生活。</h1>
        <p>这里收集设计观察、开发笔记、产品思考和一些慢慢变亮的日常。</p>
        <div class="home-actions"><a class="blue-button" href="/posts/">开始阅读</a><a class="ghost-button" href="/categories/">看看分类</a></div>
      </div>
      ${miniIsland()}
    </section>
    <section class="home-latest">
      <div class="section-title"><h2>最新内容</h2><a href="/posts/">全部文章 →</a></div>
      <div class="home-card-grid">${posts.slice(0, 3).map(cardPost).join('')}</div>
    </section>
  </main>`;
  return layout(config, 'home', body, config.title);
}

function categoriesPage(config, posts) {
  const cats = [
    ['设计观察', '记录设计灵感、界面趋势与体验细节。', 28],
    ['开发笔记', '前端开发、技术探索与踩坑记录。', 42],
    ['产品思考', '关于产品、用户和商业的思考与总结。', 18],
    ['生活片段', '生活中的小事、日常记录与随想。', 16],
    ['读书摘记', '阅读带来的启发与思考的片段。', 23],
    ['灵感收藏', '灵感、资源、好的东西都在这里。', 31]
  ];
  const body = `<main class="page category-page">
    <section class="category-hero">
      <div><h1>分类与标签</h1><p>在这里探索 ElonYang 的所有笔记，按你感兴趣的主题阅读和发现。</p></div>
      ${miniIsland()}
    </section>
    <section class="category-cards">
      ${cats.map((item, index) => `<a class="category-tile" href="/posts/">
        ${picture(index + 1)}
        <h2>${item[0]}</h2><p>${item[1]}</p><strong>${item[2]} 篇文章</strong><span class="progress"><i style="width:${42 + index * 7}%"></i></span>
      </a>`).join('')}
    </section>
    <section class="category-bottom">
      <div class="tag-board"><h2>热门标签</h2><div class="big-tags">${['Next.js 24','React 38','UI/UX 26','设计系统 19','思考 33','效率工具 21','读书 17','成长 28','缓存 12','灵感 30'].map((item, index) => tag(item, `tone-${(index % 6) + 1}`)).join('')}</div><a class="ghost-button">查看全部标签 →</a></div>
      <div class="picked-list"><h2>精选：开发笔记</h2><p>记录前端开发过程中的技术探索与实践。</p>${posts.slice(0, 3).map((post, index) => `<article>${picture(index + 1)}<div><strong>${escapeHtml(post.title)}</strong><p>${escapeHtml(post.excerpt)}</p><div>${post.tags.slice(0, 3).map(item => tag(item)).join('')}</div></div><small>${escapeHtml(post.date)}<br>${post.minutes} 分钟阅读</small></article>`).join('')}<a class="more-link">查看更多开发笔记文章 →</a></div>
    </section>
  </main>`;
  return layout(config, 'categories', body, `分类 - ${config.title}`);
}

function aboutPage(config) {
  const body = `<main class="page about-page">
    <section class="about-hero">
      <div class="portrait-card"><span class="portrait"></span></div>
      <div class="about-copy"><h1>你好，我是 ElonYang</h1><p>欢迎来到我的小岛 🌴</p><p>在这里，我记录灵感、代码、产品思考和一些慢慢变亮的日常。希望我的文字和思考，能给你带来启发与陪伴。</p><div class="about-actions"><a class="ghost-button">GitHub</a><a class="ghost-button">Email</a><a class="ghost-button">X (Twitter)</a></div></div>
      ${miniIsland()}
    </section>
    <section class="about-grid">
      <div class="about-card"><h2>我关注的方向</h2><div class="interest-grid">${['前端开发','产品设计','用户体验','AI 应用','独立思考','效率工具'].map((item, index) => tag(item, `tone-${(index % 6) + 1}`)).join('')}</div></div>
      <div class="about-card timeline"><h2>博客时间线</h2>${['2022.06 开启博客写作，记录学习与思考','2023.03 开始系统输出产品与设计相关内容','2024.07 尝试用 AI 提升创作与开发效率','2025.01 持续迭代内容与网站体验'].map(item => `<p>${item}</p>`).join('')}</div>
      <div class="about-card contact-card"><h2>联系我</h2><p>如果你有想法、建议或合作意向，欢迎通过以下方式联系我。</p><ul><li>hello@elonyang.com</li><li>github.com/elonyang</li><li>x.com/elon_yang</li><li>中国 · 深圳</li></ul><a class="peach-button">期待与你交流！</a></div>
      <div class="about-card topic-card"><h2>常写主题</h2><div class="topic-row">${['开发笔记','产品思考','生活随笔','工具推荐'].map((item, index) => `<article>${picture(index + 1)}<strong>${item}</strong><p>${['前端、工程化、性能优化等','产品设计、用户体验、增长思考','日常观察、书影音、灵感收集','效率工具、软件分享与测评'][index]}</p></article>`).join('')}</div></div>
    </section>
  </main>`;
  return layout(config, 'about', body, `关于 - ${config.title}`);
}

function searchPage(config, posts) {
  const body = `<main class="page search-page">
    <h1>搜索</h1>
    <div class="search-line"><span></span><input value="Next.js 缓存"><button>×</button></div>
    <p class="result-count">找到 <strong>8</strong> 篇相关内容</p>
    <section class="search-layout">
      <aside class="search-side"><div class="side-card"><h2>最近搜索</h2>${['Next.js 缓存','React Server Components','Tailwind CSS 动画','数据可视化 ECharts','性能优化'].map(item => `<p>${item}<span>×</span></p>`).join('')}<small>清空记录</small></div><div class="side-card"><h2>热门搜索</h2><div class="tag-cloud">${['Next.js','缓存','React','性能优化','部署','TypeScript','数据库','Vercel'].map((item, index) => tag(item, `tone-${(index % 6) + 1}`)).join('')}</div></div></aside>
      <section class="search-results">${posts.slice(0, 4).map((post, index) => `<article class="search-result">${picture(index + 1)}<div><h2>${escapeHtml(post.title).replace('Next.js', '<mark>Next.js</mark>')}</h2><p>${escapeHtml(post.excerpt)}</p><div>${post.tags.slice(0, 4).map(item => tag(item)).join('')}</div></div><small>${escapeHtml(post.date)}<br>${post.minutes} 分钟阅读</small></article>`).join('')}</section>
      <aside class="search-art"><span class="mi-plane"></span><h2>换个关键词，<br>也许会遇见新的灵感</h2><div class="magnifier"></div><a class="blue-button" href="/posts/">浏览全部文章 →</a></aside>
    </section>
  </main>`;
  return layout(config, '', body, `搜索 - ${config.title}`);
}

function notFoundPage(config, posts) {
  const body = `<main class="page notfound-page">
    <section class="notfound-hero"><div><strong>404</strong><h1>这片小岛还没有被发现</h1><p>也许链接走远了，先回到熟悉的地方吧。</p><div><a class="blue-button" href="/">返回首页</a><a class="ghost-button" href="/posts/">查看最新文章</a></div></div><div class="lost-island">${miniIsland()}<span class="sign">迷路了...</span><span class="lost-kid"></span></div></section>
    <section class="home-latest"><div class="section-title"><h2>看看最新的内容</h2></div><div class="home-card-grid">${posts.slice(0, 3).map(cardPost).join('')}</div></section>
  </main><footer class="simple-footer">© ${new Date().getFullYear()} ElonYang 的博客 · 保留所有权利</footer>`;
  return layout(config, 'home', body, `404 - ${config.title}`);
}

function detailPage(config, post, posts) {
  const related = posts.filter(item => item.path !== post.path).slice(0, 4);
  const body = `<main class="page detail-page">
    <aside class="float-actions"><a href="/posts/">←<span>返回</span></a><button>♡<span>喜欢<br>128</span></button><button>☆<span>收藏<br>86</span></button><button>⌘<span>分享</span></button><i></i></aside>
    <article class="article-detail">
      <span class="pill">${escapeHtml(post.category)}</span>
      <h1>${escapeHtml(post.title)}</h1>
      <div class="detail-meta"><span>2026-04-23</span><span>前端开发</span>${post.tags.slice(0, 3).map(item => `<span>${escapeHtml(item)}</span>`).join('')}<span>阅读约 ${post.minutes + 2} 分钟</span></div>
      <div class="detail-cover">${picture(2)}<span class="cover-plane"></span></div>
      <p>在构建现代 Web 应用时，数据请求与缓存策略直接影响性能与用户体验。Next.js 提供了强大的数据获取能力与多层缓存机制，合理使用它们可以让应用更快、更稳定，也能显著降低服务器压力。</p>
      <blockquote>缓存并不是万能的，关键在于理解数据的时效性与用户感知，选择合适的缓存粒度与更新策略。</blockquote>
      <h2>1. 数据请求方式概览</h2>
      <p>在 Next.js 中，常见的数据请求方式主要有三种：Server Components 中的 fetch、Route Handler 以及传统的客户端请求。每种方式适用于不同的场景。</p>
      <pre><code>// 在 Server Component 中直接使用 fetch
async function getPosts() {
  const res = await fetch('https://api.example.com/posts', {
    next: { revalidate: 60 }
  })
  return res.json()
}</code></pre>
      <nav class="prev-next"><a>上一篇<br><strong>从 0 到 1 搭建一个 AI 助手：架构与踩坑记录</strong></a><i></i><a>下一篇<br><strong>如何设计一个可扩展的前端组件库</strong></a></nav>
      <section class="related"><h2>相关文章 ♡</h2><div>${related.map(cardPost).join('')}</div></section>
    </article>
    <aside class="toc-card"><h2>目录</h2><ol><li class="active">数据请求方式概览</li><li>缓存机制详解</li><li>实践：组合使用策略</li><li>缓存失效与更新</li><li>小结</li></ol><div class="note-card">缓存的目标是减少重复计算，而不是让数据永不变化。</div></aside>
  </main>`;
  return layout(config, 'posts', body, `${post.title} - ${config.title}`);
}

hexo.extend.generator.register('custom-blog-pages', function(locals) {
  const config = this.config;
  const posts = normalizePosts(locals);
  latestGeneratedPages = [
    { path: 'index.html', data: homePage(config, posts) },
    { path: 'posts/index.html', data: postsPage(config, posts) },
    { path: 'categories/index.html', data: categoriesPage(config, posts) },
    { path: 'about/index.html', data: aboutPage(config) },
    { path: 'search/index.html', data: searchPage(config, posts) },
    { path: '404.html', data: notFoundPage(config, posts) },
    ...posts
      .filter(post => post.path && !post.path.includes('#'))
      .map(post => ({ path: post.path.replace(/^\//, ''), data: detailPage(config, post, posts) }))
  ];

  return latestGeneratedPages;
});

hexo.extend.filter.register('after_generate', function() {
  const publicDir = this.public_dir || path.join(this.base_dir, 'public');
  latestGeneratedPages.forEach(page => {
    const outputPath = page.path.endsWith('/') ? `${page.path}index.html` : page.path;
    const target = path.join(publicDir, outputPath);
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, page.data, 'utf8');
  });
});
