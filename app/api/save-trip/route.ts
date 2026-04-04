import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  try {
    return NextResponse.json({ success: true, data: await request.json() });
  } catch {
    return NextResponse.json({ error: 'Failed' }, { status: 500 });
  }
}
