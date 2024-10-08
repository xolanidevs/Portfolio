import sgMail from '@sendgrid/mail';
import { SENDGRID_API_KEY } from '$env/static/private';

sgMail.setApiKey(SENDGRID_API_KEY);

export async function sendNewPostsNotification(subscribers, posts) {
  const msg = {
    to: subscribers.map(sub => sub.email),
    from: 'xolanidev0@gmail.com', // Use your verified sender
    subject: 'New Blog Posts!',
    html: `
      <h1>Check out our latest posts:</h1>
      <ul>
        ${posts.map(post => `
          <li>
            <a href="${post.url}">${post.title}</a>
          </li>
        `).join('')}
      </ul>
    `,
  };

  try {
    await sgMail.sendMultiple(msg);
    console.log('Emails sent successfully');
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
}