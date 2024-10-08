import { json } from '@sveltejs/kit';
import { getRecentPosts } from '$lib/services/blogger';
import { sendNewPostsNotification } from '$lib/services/email';
import { SUPABASE_URL, SUPABASE_KEY } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function GET() {
  try {
    // Get the timestamp of the last check
    let { data: lastCheck } = await supabase
      .from('app_state')
      .select('last_check')
      .single();

    const lastCheckDate = lastCheck ? new Date(lastCheck.last_check) : new Date(0);

    // Fetch recent posts
    const recentPosts = await getRecentPosts(lastCheckDate);

    if (recentPosts.length > 0) {
      // Fetch subscribers
      const { data: subscribers } = await supabase
        .from('subscribers')
        .select('email');

      // Send notification
      await sendNewPostsNotification(subscribers, recentPosts);

      // Update last check timestamp
      await supabase
        .from('app_state')
        .upsert({ id: 1, last_check: new Date().toISOString() });

      return json({ message: `Sent notifications for ${recentPosts.length} new posts` });
    }

    return json({ message: 'No new posts found' });
  } catch (error) {
    console.error('Error checking for new posts:', error);
    return json({ error: 'Failed to check for new posts' }, { status: 500 });
  }
}