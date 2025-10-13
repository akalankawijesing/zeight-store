import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const path = req.nextUrl.pathname;

    // Admin only routes
    if (path.startsWith("/admin") && token?.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    // Seller routes (Sellers and Admins can access)
    if (
      path.startsWith("/seller") &&
      !["SELLER", "ADMIN"].includes(token?.role as string)
    ) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    // Customer routes (logged in users only)
    if ((path.startsWith("/profile") || path.startsWith("/orders")) && !token) {
      return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const path = req.nextUrl.pathname;

        // Public paths - always accessible
        const publicPaths = ["/", "/auth/login", "/auth/register", "/about", "/contact", "/unauthorized","/landing"];

        if (publicPaths.includes(path)) {
          return true;
        }

        // Public path patterns
        if (
          path.startsWith("/products") ||
          path.startsWith("/landing") ||
          path.startsWith("/api/auth") ||
          path.startsWith("/_next") ||
          path.startsWith("/static")
        ) {
          return true;
        }

        // Protected paths require authentication
        return !!token;
      },
    },
    pages: {
      signIn: "/auth/login",
    },
  }
);

export const config = {
  matcher: [
    // Protected routes
    "/admin/:path*",
    "/seller/:path*",
    "/profile/:path*",
    "/orders/:path*",
    "/checkout/:path*",
    "/dashboard/:path*",

    // Exclude public API routes and static files
    "/((?!api/public|_next/static|_next/image|favicon.ico).*)",
  ],
};
