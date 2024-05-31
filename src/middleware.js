import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const pathname = req.nextUrl.pathname;
    const token = req.nextauth.token;
    console.log("@midw pathname", pathname);
    console.log("@midw token", token);
    if (pathname.startsWith("/admin") && token?.role != "admin") {
      return NextResponse.rewrite(new URL("/denied", req.url));
    }
    return NextResponse.rewrite(new URL("/", req.url));
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/create-user"],
};
