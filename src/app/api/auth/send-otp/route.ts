import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { createVerificationToken } from '@/lib/auth/utils';
import { sendVerificationEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // assign a temp user id for now
    // const user = { id: '23889466-bde3-43c6-a787-25ccd151fa3c' };

    let user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      user = await prisma.user.create({
        data: { email },
      });
    }

    const token = await createVerificationToken(user.id);
    console.log('Token:', token);
    await sendVerificationEmail(email, token);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in send-otp:', error);
    return NextResponse.json(
      { error: 'Failed to send verification code' },
      { status: 500 }
    );
  }
}


