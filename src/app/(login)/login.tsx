'use client';

import * as React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';

interface AuthFormProps {
    isSignIn: boolean;
}

export default function AuthForm({ isSignIn }: AuthFormProps) {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [showOTP, setShowOTP] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const { login } = useAuth();
    const router = useRouter();

    const handleSendOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch('/api/auth/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) throw new Error('Failed to send verification code');

            setShowOTP(true);
            toast({
                title: 'Verification code sent',
                description: 'Please check your email for the verification code.',
            });
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Failed to send verification code. Please try again.',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerifyOTP = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const res = await fetch('/api/auth/verify-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, token: otp }),
            });

            if (!res.ok) throw new Error('Invalid verification code');

            const data = await res.json();

            // Save the session cookie
            document.cookie = `session_id=${data.sessionId}; path=/; Secure; SameSite=Lax;`;

            // Update Zustand auth state
            login({ id: data.userId, email: data.email, name: data.name });

            toast({ title: 'Success', description: 'OTP Verified! Redirecting...' });
            // Replace with actual redirection logic after successful verification
            window.location.href = '/dashboard';
        } catch (error) {
            toast({
                title: 'Error',
                description: 'Invalid verification code. Please try again.',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center bg-black relative px-4">
            {/* Gradient decorations */}
            <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl -translate-y-1/2" />

            {/* Back to home link */}
            <div className='flex justify-center items-center'>
                <Link
                    href="/"
                    className="self-start mb-8 text-white hover:text-white/80 transition-colors flex items-center"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to home
                </Link>
            </div>

            <Card className="w-full max-w-md mx-4">
                <CardHeader className="space-y-1">
                    <div className="flex justify-center items-center">
                        <BuildFastLogo />
                    </div>
                    <CardTitle className="text-2xl font-bold mt-4 text-center">
                        {isSignIn ? 'Welcome back' : 'Create an account'}
                    </CardTitle>
                    <CardDescription className="text-white/70 text-center">
                        {isSignIn
                            ? 'Enter your credentials to sign in'
                            : 'Enter your information to get started'
                        }
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <form onSubmit={showOTP ? handleVerifyOTP : handleSendOTP}>
                            <div className="grid gap-4">
                                {!showOTP ? (
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                                    />
                                ) : (
                                    <div className='flex justify-center items-center'>
                                        <InputOTP value={otp} onChange={setOtp} maxLength={6}>
                                            <InputOTPGroup>
                                                <InputOTPSlot index={0} />
                                                <InputOTPSlot index={1} />
                                                <InputOTPSlot index={2} />
                                            </InputOTPGroup>
                                            <InputOTPSeparator />
                                            <InputOTPGroup>
                                                <InputOTPSlot index={3} />
                                                <InputOTPSlot index={4} />
                                                <InputOTPSlot index={5} />
                                            </InputOTPGroup>
                                        </InputOTP>
                                    </div>
                                )}
                                <Button className="w-full bg-white text-black hover:bg-white/90" type="submit" disabled={isLoading}>
                                    {isLoading
                                        ? 'Loading...'
                                        : showOTP
                                            ? 'Verify Code'
                                            : isSignIn
                                                ? 'Sign In'
                                                : 'Sign Up'}
                                </Button>
                            </div>
                        </form>
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-muted-foreground/25" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-background px-2 text-muted-foreground">
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Button variant="outline" className="w-full border-white/20 hover:bg-white/20 text-white">
                                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                                    <path
                                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                        fill="#4285F4"
                                    />
                                    <path
                                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                        fill="#34A853"
                                    />
                                    <path
                                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                        fill="#FBBC05"
                                    />
                                    <path
                                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                        fill="#EA4335"
                                    />
                                </svg>
                                Continue with Google
                            </Button>
                            <Button variant="outline" className="w-full border-white/20 hover:bg-white/20 text-white">
                                <Github className="mr-2 h-4 w-4" />
                                Continue with GitHub
                            </Button>
                        </div>
                        <div className="text-center text-sm text-white/70">
                            {isSignIn ? "Don't have an account? " : "Already have an account? "}
                            <Link
                                href={isSignIn ? '/sign-up' : '/sign-in'}
                                className="underline underline-offset-4 hover:text-white"
                            >
                                {isSignIn ? 'Sign Up' : 'Sign In'}
                            </Link>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

function BuildFastLogo() {
    return (
        <div className="flex text-xl font-bold items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 3738 3236">
                <path fill="#fff" fillRule="evenodd"
                    d="M2530.44 1145.64 1869 0 475.379 2413.82c131.695 51.95 260.914 81.02 384.699 81.61 245.352 1.17 513.692-109.55 774.302-492.04 271.17-397.97 579.18-672.62 896.06-857.75Zm235.57 408.02c-260.46 152.82-514.92 381.09-742.39 714.95-331.66 486.76-735.71 699.86-1165.784 697.82-214.975-1.03-423.92-55.96-619.932-141.29L.982 3235.5H3737.02l-971.01-1681.84Z"
                    clipRule="evenodd"></path>
            </svg>
            <span className="ml-2">BuildFast</span>
        </div>
    );
}

