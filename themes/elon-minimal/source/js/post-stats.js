(() => {
  const root = document.querySelector('[data-post-id]');
  if (!root) return;

  const postId = root.dataset.postId || location.pathname;
  const viewNode = root.querySelector('[data-view-count]');
  const likeNode = root.querySelector('[data-like-count]');
  const likeButton = root.querySelector('[data-like-button]');

  const storageKey = 'elon-blog-post-stats';
  const apiUrl = '/api/post-stats';

  const readStore = () => {
    try {
      return JSON.parse(localStorage.getItem(storageKey) || '{}');
    } catch {
      return {};
    }
  };

  const writeStore = (store) => {
    localStorage.setItem(storageKey, JSON.stringify(store));
  };

  const store = readStore();
  const current = store[postId] || { views: 0, likes: 0, liked: false };
  current.views = Number(current.views || 0);
  current.likes = Math.max(0, Number(current.likes || 0));
  current.liked = Boolean(current.liked);
  store[postId] = current;

  const render = () => {
    if (viewNode) viewNode.textContent = String(current.views);
    if (likeNode) likeNode.textContent = String(current.likes);
    if (likeButton) {
      likeButton.classList.toggle('is-liked', current.liked);
      likeButton.setAttribute('aria-pressed', current.liked ? 'true' : 'false');
    }
  };

  const requestStats = async (method, payload) => {
    const options = method === 'GET'
      ? {}
      : {
          method,
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(payload),
        };
    const url = method === 'GET'
      ? `${apiUrl}?id=${encodeURIComponent(postId)}`
      : apiUrl;
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(`Stats API failed: ${response.status}`);
    return response.json();
  };

  const mergeRemoteStats = (stats) => {
    current.views = Math.max(0, Number(stats.views || 0));
    current.likes = Math.max(0, Number(stats.likes || 0));
    store[postId] = current;
    writeStore(store);
    render();
  };

  const fallbackView = () => {
    current.views += 1;
    store[postId] = current;
    writeStore(store);
    render();
  };

  const recordView = async () => {
    try {
      const stats = await requestStats('POST', { id: postId, action: 'view' });
      mergeRemoteStats(stats);
    } catch {
      fallbackView();
    }
  };

  likeButton?.addEventListener('click', async () => {
    current.liked = !current.liked;
    const action = current.liked ? 'like' : 'unlike';
    const previousLikes = current.likes;
    current.likes += current.liked ? 1 : -1;
    current.likes = Math.max(0, current.likes);
    store[postId] = current;
    writeStore(store);
    render();

    try {
      const stats = await requestStats('POST', { id: postId, action });
      mergeRemoteStats(stats);
    } catch {
      current.likes = Math.max(0, previousLikes + (current.liked ? 1 : -1));
      store[postId] = current;
      writeStore(store);
      render();
    }
  });

  render();
  recordView();
})();
