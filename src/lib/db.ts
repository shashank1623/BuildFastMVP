import { prisma } from './prisma';
import { z } from 'zod';

const WaitlistSchema = z.object({
  email: z.string().email(),
});

export type WaitlistEntry = z.infer<typeof WaitlistSchema>;

export async function addToWaitlist(email: string) {
  try {
    const { email: validatedEmail } = WaitlistSchema.parse({ email });

    const entry = await prisma.waitlistEntry.create({
      data: {
        email: validatedEmail,
      },
    });

    return entry;
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (error instanceof Error && (error as any).code === 'P2002') {
      throw new Error('Email already exists in waitlist');
    }
    console.error('Error adding to waitlist:', error);
    throw error;
  }
}