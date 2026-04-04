import { NextResponse } from 'next/server';
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  try {
    const res = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_KEY}&query=${query}`);
    return NextResponse.json(await res.json());
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
