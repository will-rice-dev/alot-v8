import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("session")?.value;

  if (!currentUser && !request.nextUrl.pathname.startsWith("/welcome")) {
    return Response.redirect(new URL("/welcome", request.url));
  }

  if (request.nextUrl.pathname === "/") {
    return Response.redirect(new URL("/welcome", request.url));
  }

  if (request.nextUrl.pathname === "/welcome/login" && currentUser) {
    return Response.redirect(new URL("/home", request.url));
  } 
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
