(() => {
  const input = document.querySelector('#search-input');
  const status = document.querySelector('#search-status');
  const results = document.querySelector('#search-results');
  const dataNode = document.querySelector('#search-data');

  if (!input || !status || !results || !dataNode) return;

  let posts = [];
  try {
    posts = JSON.parse(dataNode.textContent || '[]');
  } catch {
    posts = [];
  }

  const render = (items, query) => {
    results.innerHTML = '';

    if (!query) {
      status.textContent = '输入关键词后显示结果。';
      return;
    }

    if (!items.length) {
      status.textContent = '没有找到相关内容，换个关键词试试。';
      return;
    }

    status.textContent = `找到 ${items.length} 条相关内容`;
    const fragment = document.createDocumentFragment();

    items.forEach((post) => {
      const article = document.createElement('article');
      article.className = 'post-row';
      article.innerHTML = `
        <p class="meta">${post.date}${post.category ? ` · ${post.category}` : ''}</p>
        <h2><a href="${post.url}">${post.title}</a></h2>
        <p>${post.summary || '这篇文章还没有摘要。'}</p>
      `;
      fragment.appendChild(article);
    });

    results.appendChild(fragment);
  };

  input.addEventListener('input', () => {
    const query = input.value.trim().toLowerCase();
    const items = posts.filter((post) => {
      const haystack = `${post.title} ${post.summary} ${post.category} ${post.tags}`.toLowerCase();
      return haystack.includes(query);
    });
    render(items, query);
  });
})();
