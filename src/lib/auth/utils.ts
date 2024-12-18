import { randomInt } from 'crypto';
import { prisma } from '../prisma';

export function generateOTP(): string {
  return randomInt(100000, 999999).toString();
}

export async function createVerificationToken(userId: string) {
  const token = generateOTP();
  const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

  await prisma.verificationToken.create({
    data: {
      token,
      userId,
      expiresAt: expires,
    },
  });

  return token;
}

export async function verifyOTP(email: string, token: string) {
  const user = await prisma.user.findUnique({
    where: { email },
    include: {
      verificationTokens: {
        where: {
          token,
          expiresAt: { gt: new Date() },
        },
      },
    },
  });

  if (!user || user.verificationTokens.length === 0) {
    return null;
  }

  // Clean up used token
  await prisma.verificationToken.deleteMany({
    where: { userId: user.id },
  });

  // Create session
  const session = await prisma.session.create({
    data: {
      sessionId: randomInt(100000, 999999).toString(), // or use any unique identifier generator
      userId: user.id,
      expiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
    },
  });

  return { user, session };
}