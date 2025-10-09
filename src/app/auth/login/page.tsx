// src/app/(auth)/login/page.tsx
import { LoginForm } from '@/components/auth/LoginForm';
import { SocialButtons } from '@/components/auth/SocialIcons';

export default function LoginPage() {
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Welcome back</h1>
        <p className="text-muted-foreground mt-2">
          Sign in to your account to continue
        </p>
      </div>
      
      <div className="space-y-6">
       {/* Social Buttons  <SocialButtons /> */} 
        <SocialButtons />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        
        <LoginForm />
      </div>
    </div>
  );
}