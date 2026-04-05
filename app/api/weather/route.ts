import { NextResponse } from 'next/server';
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max&timezone=auto`);
    return NextResponse.json(await res.json());
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
