import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string) {
  try {
    await resend.emails.send({
      from: 'BuildFast <shashankbhardwaj@bitelabs.in>',
      to: email,
      subject: 'Welcome to the BuildFast Waitlist!',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Hi there,</h2>
          <p>Thank you for joining the waitlist for BuildFast.</p>
          <p>We're thrilled to have you on board! Soon, you'll experience how easy it is to transform textbook content into interactive quizzes.</p>
          <p>Stay tuned for updates and early access invites.</p>
          <p>- The BuildFast Team</p>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw error;
  }
}