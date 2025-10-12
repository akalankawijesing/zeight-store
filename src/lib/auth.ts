import { NextAuthOptions, User, Session } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import prisma from '@/lib/prisma';
import bcrypt from "bcryptjs";

// Extend built-in types
declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      image?: string;
      role?: string;
    };
  }

  interface User {
    id: string;
    email: string;
    name: string;
    image?: string;
    role?: string;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    role?: string;
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter an email and password');
        }

        // Find user by email
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        });

        if (!user || !user.password) {
          throw new Error('No user found with this email');
        }

        // Check password
        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error('Invalid password');
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name || `${user.firstName} ${user.lastName}`,
          role: user.role,
        };
      }
    }),
    
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
  ],
  
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  
  pages: {
    signIn: '/login',
    error: '/login',
    // Remove 'signUp' - it's not a valid NextAuth page option
  },
  
  callbacks: {
    async jwt({ token, user, account, trigger, session }) {
      // Initial sign in
      if (user) {
        token.id = user.id;
        token.role = user.role || 'CUSTOMER';
        token.email = user.email;
        token.name = user.name;
      }
      
      // Handle session update
      if (trigger === 'update' && session) {
        token = { ...token, ...session };
      }
      
      return token;
    },
    
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.email = token.email as string;
        session.user.name = token.name as string;
      }
      return session;
    },
    
    async signIn({ user, account, profile }) {
      try {
        // For OAuth providers (Google, GitHub)
        if (account?.provider !== 'credentials') {
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email! }
          });

          // If user doesn't exist, create with OAuth data
          if (!existingUser) {
            const names = user.name?.split(' ') || [];
            const newUser = await prisma.user.create({
              data: {
                email: user.email!,
                firstName: names[0] || 'User',
                lastName: names.slice(1).join(' ') || '',
                name: user.name || '',
                password: '', // Empty password for OAuth users
                role: 'CUSTOMER',
              }
            });
            
            // Update user.id with the newly created user's id
            user.id = newUser.id;
          } else {
            user.id = existingUser.id;
          }
        }
        
        return true;
      } catch (error) {
        console.error('Sign in error:', error);
        return false;
      }
    },
  },
  
  events: {
    async signIn({ user, account, isNewUser }) {
      try {
        // Log sign in
        await prisma.auditLog.create({
          data: {
            userId: user.id,
            action: 'USER_SIGNED_IN',
            meta: {
              provider: account?.provider,
              isNewUser,
            }
          }
        });
      } catch (error) {
        console.error('Error logging sign in:', error);
      }
    },
  },
  
  debug: process.env.NODE_ENV === 'development',
};