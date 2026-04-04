import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const base = searchParams.get('base') || 'USD';

  try {
    const res = await fetch(`https://open.er-api.com/v6/latest/${base}`);
    const data = await res.json();
    
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch currency rates' }, { status: 500 });
  }
}
