"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, User } from 'lucide-react';
// import { StorageMeter } from '@/components/dashboard/storage-meter';
// import { UploadButton } from '@/components/dashboard/upload-button';
// import { UploadsList } from '@/components/dashboard/uploads-list';

const MAX_STORAGE = 2 * 1024 * 1024 * 1024; // 2GB in bytes

export default function DashboardPage() {
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/sign-in');
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-8 dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <User className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Storage</CardTitle>
              {/* <UploadButton /> */}
            </CardHeader>
            <CardContent>
              {/* <StorageMeter used={user.storageUsed} total={MAX_STORAGE} /> */}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Uploads</CardTitle>
            </CardHeader>
            <CardContent>
              {/* <UploadsList /> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}