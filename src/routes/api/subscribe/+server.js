import { json } from '@sveltejs/kit';
import { SUPABASE_URL, SUPABASE_KEY } from '$env/static/private';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function POST({ request }) {
  const { email } = await request.json();

  try {
    const { error } = await supabase
      .from('subscribers')
      .insert({ email });

    if (error) throw error;

    return json({ message: 'Subscribed successfully!' });
  } catch (error) {
    console.error('Subscription error:', error);
    return json({ message: 'Failed to subscribe. Please try again.' }, { status: 400 });
  }
}