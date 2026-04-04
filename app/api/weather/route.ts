import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get('lat') || '52.52';
  const lon = searchParams.get('lon') || '13.41';

  try {
    const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
    const data = await res.json();
    
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch weather' }, { status: 500 });
  }
}
