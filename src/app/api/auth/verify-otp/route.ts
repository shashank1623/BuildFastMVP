import { NextResponse } from 'next/server';
import { verifyOTP } from '@/lib/auth/utils';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { email, token } = await request.json();
    const result = await verifyOTP(email, token);

    if (!result) {
      return NextResponse.json(
        { error: 'Invalid or expired verification code' },
        { status: 400 }
      );
    }

    const { user, session } = result;

    // Set session cookie
    (await cookies()).set('session_id', session.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      expires: session.expiresAt,
    });

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Error in verify-otp:', error);
    return NextResponse.json(
      { error: 'Failed to verify code' },
      { status: 500 }
    );
  }
}