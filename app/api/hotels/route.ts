import { NextResponse } from 'next/server';
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  const country = searchParams.get('country') || 'FR';
  try {
    const res = await fetch(`https://liteapi.travel/v3.0/data/hotels?city=${city}&country_code=${country}`, {
      headers: { "X-API-Key": process.env.LITEAPI_PRIVATE_KEY || "" }
    });
    return NextResponse.json(await res.json());
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
