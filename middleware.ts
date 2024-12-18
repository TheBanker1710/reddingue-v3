
/*import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [    
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',    
    '/(api|trpc)(.*)',
  ],
};*/


//export { auth as middleware } from "@/auth"


import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './auth';

const protectedRoutes = ["/middleware"]

export default async function middleware(request: NextRequest){

  const session = await auth();

  const isProtected = protectedRoutes.some((route)=> request.nextUrl.pathname.startsWith(route));
  if(!session && isProtected){
    const absoluteURL = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  return NextResponse.next();
}

export const config = {
 matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}