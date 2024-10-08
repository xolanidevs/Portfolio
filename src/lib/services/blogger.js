import { BLOGGER_API_KEY, BLOG_ID } from '$env/static/private';

export async function getRecentPosts(publishedAfter) {
  const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts`;
  const params = new URLSearchParams({
    key: BLOGGER_API_KEY,
    publishedMin: publishedAfter.toISOString(),
    orderBy: 'published',
    fields: 'items(id,title,url,published)'
  });

  const response = await fetch(`${url}?${params}`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts from Blogger');
  }

  const data = await response.json();
  return data.items || [];
}