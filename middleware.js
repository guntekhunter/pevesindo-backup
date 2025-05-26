// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
    const url = request.nextUrl;

    // If path is already '/', do nothing
    if (url.pathname === '/') {
        return NextResponse.next();
    }

    // Redirect all other paths to root '/'
    url.pathname = '/';
    return NextResponse.redirect(url, 302);
}

export const config = {
    matcher: '/:path*', // match all routes including root
};
