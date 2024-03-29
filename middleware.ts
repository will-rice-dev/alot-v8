import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('session')?.value
     
    if (!currentUser && !request.nextUrl.pathname.startsWith('/welcome')) {
        return Response.redirect(new URL('/welcome', request.url))
    }
}
     
export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
      
      