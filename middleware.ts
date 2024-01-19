import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const ROLES_ALLOWED_TO_AUTH = ["ADMIN", "MODERATOR", "USER"];

export default withAuth(
  function middleware(req) {
   
    if(req.nextUrl.pathname === '/' && req.nextauth.token){
      return NextResponse.redirect(new URL("/portal", req.url));
    }

    if (req.nextUrl.pathname.startsWith("/portal") && !req.nextauth.token) {
      return NextResponse.redirect(new URL("/", req.url));
    } 
    
    if (
      req.nextUrl.pathname.startsWith("/dashboard") &&
      req.nextauth.token?.role !== "ADMIN" &&
      req.nextauth.token?.role !== "MODERATOR"
    ) {
      return NextResponse.redirect(new URL("/portal", req.url));
    }


  },
  {
    callbacks: {
      authorized: ({ token }) =>
        token?.role !== undefined && ROLES_ALLOWED_TO_AUTH.includes(token.role),
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/portal/:path*", "/"],
};
