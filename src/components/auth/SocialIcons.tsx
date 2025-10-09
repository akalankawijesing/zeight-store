// src/components/auth/social-buttons.tsx
'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { 
  Loader2, 
  Mail,
  Github 
} from 'lucide-react';
import { useState } from 'react';

interface SocialButtonsProps {
  isLoading?: boolean;
}

export function SocialButtons({ isLoading = false }: SocialButtonsProps) {
  const [googleLoading, setGoogleLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      await signIn('google', { callbackUrl: '/' });
    } catch (error) {
      console.error('Google sign in error:', error);
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleGithubSignIn = async () => {
    setGithubLoading(true);
    try {
      await signIn('github', { callbackUrl: '/' });
    } catch (error) {
      console.error('GitHub sign in error:', error);
    } finally {
      setGithubLoading(false);
    }
  };

  const handleEmailSignIn = () => {
    // Redirect to email sign in page or open modal
    window.location.href = '/login?method=email';
  };

  return (
    <div className="grid gap-3">
      {/* Google Button */}
      <Button
        variant="outline"
        onClick={handleGoogleSignIn}
        disabled={isLoading || googleLoading}
        className="w-full"
      >
        {googleLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <GoogleIcon className="mr-2 h-4 w-4" />
        )}
        Continue with Google
      </Button>

      {/* GitHub Button */}
      <Button
        variant="outline"
        onClick={handleGithubSignIn}
        disabled={isLoading || githubLoading}
        className="w-full"
      >
        {githubLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Github className="mr-2 h-4 w-4" />
        )}
        Continue with GitHub
      </Button>

      {/* Email Button (Optional) */}
      <Button
        variant="outline"
        onClick={handleEmailSignIn}
        disabled={isLoading}
        className="w-full"
      >
        <Mail className="mr-2 h-4 w-4" />
        Continue with Email
      </Button>
    </div>
  );
}

// Google Icon component (since it's not in Lucide)
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="currentColor"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="currentColor"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="currentColor"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}