import { NextResponse } from 'next/server';

// For static export, we'll use a simple redirect to a static image
export async function GET() {
  // Redirect to a static image or return a simple response
  return new NextResponse(null, {
    status: 302,
    headers: {
      'Location': '/og-image.png',
      'Content-Type': 'text/plain',
    },
  });
}

export const dynamic = 'force-static';  // Ensure static generation
