// middleware.js
import { NextResponse } from 'next/server'

/** @param {import('next/server').NextRequest} request */
export function middleware(request) {
    const hostname = request.headers.get('host') || '';

    // ✅ Prevent redirect loop if already on pevesindo.co.id
    if (hostname.includes('pevesindo.co.id')) {
        return NextResponse.next();
    }

    // ✅ Redirect ONLY to homepage (no slug)
    return NextResponse.redirect(new URL('/', 'https://pevesindo.co.id'), 302);
}

export const config = {
    matcher: '/:path*', // Match all slugs
};
