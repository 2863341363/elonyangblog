const HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
};

const MAX_ID_LENGTH = 240;

function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      ...HEADERS,
      ...(init.headers || {}),
    },
  });
}

function normalizeId(id) {
  return String(id || "").trim().slice(0, MAX_ID_LENGTH);
}

function emptyStats() {
  return { views: 0, likes: 0 };
}

async function readStats(kv, id) {
  const value = await kv.get(id, "json");
  return {
    ...emptyStats(),
    ...(value || {}),
  };
}

async function writeStats(kv, id, stats) {
  await kv.put(id, JSON.stringify({
    views: Math.max(0, Number(stats.views || 0)),
    likes: Math.max(0, Number(stats.likes || 0)),
  }));
}

function getKv(context) {
  return context.env.BLOG_STATS;
}

export async function onRequestGet(context) {
  const kv = getKv(context);
  if (!kv) {
    return json({ error: "BLOG_STATS KV binding is not configured." }, { status: 501 });
  }

  const url = new URL(context.request.url);
  const id = normalizeId(url.searchParams.get("id"));
  if (!id) {
    return json({ error: "Missing post id." }, { status: 400 });
  }

  return json(await readStats(kv, id));
}

export async function onRequestPost(context) {
  const kv = getKv(context);
  if (!kv) {
    return json({ error: "BLOG_STATS KV binding is not configured." }, { status: 501 });
  }

  let payload;
  try {
    payload = await context.request.json();
  } catch {
    return json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const id = normalizeId(payload.id);
  const action = String(payload.action || "").trim();
  if (!id) {
    return json({ error: "Missing post id." }, { status: 400 });
  }

  const stats = await readStats(kv, id);
  if (action === "view") {
    stats.views += 1;
  } else if (action === "like") {
    stats.likes += 1;
  } else if (action === "unlike") {
    stats.likes = Math.max(0, stats.likes - 1);
  } else {
    return json({ error: "Unknown action." }, { status: 400 });
  }

  await writeStats(kv, id, stats);
  return json(stats);
}
