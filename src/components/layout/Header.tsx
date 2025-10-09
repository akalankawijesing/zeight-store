'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Heart, Menu, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { useSession, signOut } from 'next-auth/react';
import type { Session } from 'next-auth';

// Mock stores for now
const useCartStore = () => ({ 
  items: [], 
  getItemCount: () => 0 
});

const useUIStore = () => ({ 
  mobileMenuOpen: false, 
  toggleMobileMenu: () => {},
  cartOpen: false,
  toggleCart: () => {} 
});

interface HeaderProps {
  categorySelector?: React.ReactNode;
}

// Mobile Navigation Props Interface
interface MobileNavigationProps {
  isAuthenticated: boolean;
  session: Session | null;
  onSignOut: () => void;
}

export function Header({ categorySelector }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { data: session, status } = useSession();
  const { items, getItemCount } = useCartStore();
  const { mobileMenuOpen, toggleMobileMenu } = useUIStore();

  const cartItemCount = getItemCount();
  const isAuthenticated = status === 'authenticated';
  const isAuthLoading = status === 'loading';

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log('Searching for:', searchQuery);
      setIsLoading(false);
    }, 1000);
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' });
  };

  const AnnouncementBar = () => {
    return (
        <div className='w-full bg-black py-2'>
            <div className='container mx-auto flex items-center justify-center px-8'>
                <span className='text-center text-sm font-medium tracking-wide text-white'>FREE SHIPPING ON ORDERS OVER $15.00 • FREE RETURNS</span>
            </div>
        </div>
    );
};

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
         <AnnouncementBar />
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              FashionStore
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/store" className="text-sm font-medium hover:text-primary">
              Shop
            </Link>
            <Link href="/categories" className="text-sm font-medium hover:text-primary">
              Categories
            </Link>
            <Link href="/new-arrivals" className="text-sm font-medium hover:text-primary">
              New Arrivals
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10"
              />
              <Button 
                type="submit" 
                size="icon" 
                variant="ghost" 
                className="absolute right-0 top-0 h-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
              </Button>
            </form>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5 lg:hidden" />
            </Button>

            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {/* Auth Section */}
            {isAuthLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : isAuthenticated ? (
              // Logged In - User Menu
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <div className="flex items-center justify-start gap-2 p-2">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{session?.user?.name}</p>
                      <p className="text-xs text-muted-foreground">{session?.user?.email}</p>
                    </div>
                  </div>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/orders">Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem 
                    className="text-red-600 cursor-pointer"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              // Logged Out - Sign In/Sign Up Links
              <div className="flex items-center space-x-4">
                <Link 
                  href="/auth/login" 
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Sign In
                </Link>
                <Link 
                  href="/auth/register" 
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={toggleMobileMenu}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <MobileNavigation 
                  isAuthenticated={isAuthenticated} 
                  session={session} 
                  onSignOut={handleSignOut}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Category Selector */}
        {categorySelector && (
          <div className="hidden md:block py-2">
            {categorySelector}
          </div>
        )}
      </div>
    </header>
  );
}

// Mobile Navigation Component
function MobileNavigation({ isAuthenticated, session, onSignOut }: MobileNavigationProps) {
  return (
    <div className="flex flex-col space-y-6 mt-8">
      {/* Main Navigation */}
      <nav className="flex flex-col space-y-4">
        <Link href="/store" className="text-lg font-medium hover:text-primary transition-colors">
          Shop
        </Link>
        <Link href="/categories" className="text-lg font-medium hover:text-primary transition-colors">
          Categories
        </Link>
        <Link href="/new-arrivals" className="text-lg font-medium hover:text-primary transition-colors">
          New Arrivals
        </Link>
      </nav>

      {/* Auth Section */}
      <div className="border-t pt-4">
        {isAuthenticated ? (
          <div className="space-y-4">
            <div className="space-y-1">
              <p className="font-medium text-sm">
                {session?.user?.name || 'User'}
              </p>
              <p className="text-sm text-muted-foreground">
                {session?.user?.email || ''}
              </p>
            </div>
            <div className="flex flex-col space-y-2">
              <Link href="/profile" className="text-sm py-2 hover:text-primary transition-colors">
                Profile
              </Link>
              <Link href="/orders" className="text-sm py-2 hover:text-primary transition-colors">
                Orders
              </Link>
            </div>
            <Button variant="outline" className="w-full" onClick={onSignOut}>
              Sign Out
            </Button>
          </div>
        ) : (
          <div className="flex flex-col space-y-3">
            <Button asChild className="w-full">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button variant="outline" asChild className="w-full">
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}