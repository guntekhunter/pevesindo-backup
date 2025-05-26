// middleware.js
import { NextResponse } from 'next/server';

/** @param {import('next/server').NextRequest} request */
export function middleware(request) {
    const hostname = request.headers.get('host') || '';

    // ✅ Prevent redirect loop if already on pevesindo.co.id
    if (hostname.includes('pevesindo.co.id')) {
        return NextResponse.next();
    }

    // 🔁 Redirect all other domains/slugs to main domain
    return NextResponse.redirect('https://pevesindo.co.id', 302);
}

export const config = {
    matcher: '/:path*', // Apply to all routes
};
