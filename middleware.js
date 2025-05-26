import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl;

    // Allow next.js internals, static files, API routes, etc. without redirect
    if (
        url.pathname.startsWith('/_next') ||  // next.js internals (css/js/images)
        url.pathname.startsWith('/api') ||    // api routes
        url.pathname === '/'                   // root page, no redirect
    ) {
        return NextResponse.next();
    }

    // Redirect all other paths to root
    url.pathname = '/';
    return NextResponse.redirect(url, 302);
}

export const config = {
    matcher: '/:path*', // apply to all routes
};
