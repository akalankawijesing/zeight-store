// src/components/auth/protected.tsx
'use client';

import { useAuth } from '@/hooks/use-auth';
//import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { redirect } from 'next/navigation';

interface ProtectedProps {
  children: React.ReactNode;
  fallback?: string;
}

export function Protected({ children, fallback = '/login' }: ProtectedProps) {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
       Loading..
      </div>
    );
  }

  if (!isAuthenticated) {
    redirect(fallback);
  }

  return <>{children}</>;
}