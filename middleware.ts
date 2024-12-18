import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const sessionCookie = request.cookies.get('session_id')?.value;

    const isAuthPage = request.nextUrl.pathname.startsWith('/sign-in');
    const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard');

    // If not authenticated, redirect to sign-in
    if (!sessionCookie && isDashboardPage) {
        return NextResponse.redirect(new URL('/sign-in', request.url));
    }

    // If authenticated and on the auth page, redirect to dashboard
    if (sessionCookie && isAuthPage) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*', '/sign-in'],
};
