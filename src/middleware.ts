import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export default withAuth(async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  const protectedRoutes = ["/articles"];
  const isAuth = await getToken({ req: request })

  const isLoginPage = pathname.startsWith('/login')
  if(isLoginPage){
    if(isAuth) {
      return NextResponse.redirect(new URL('/articles', request.url))
    }
    return NextResponse.next()
  }

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );
  if (isProtectedRoute && !isAuth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if(pathname === '/'){
    return NextResponse.redirect(new URL('/articles', request.url))
  }
},
{
  callbacks: {
    authorized(){
      return true
    }
  }
})

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/articles/:path*", "/", "/login"],
};
