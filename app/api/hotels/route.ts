import { NextResponse } from 'next/server';

// Coordinates for popular destinations (fallback)
const DESTINATION_COORDS: Record<string, { lat: number; lon: number }> = {
  paris: { lat: 48.8566, lon: 2.3522 },
  bali: { lat: -8.3405, lon: 115.0920 },
  tokyo: { lat: 35.6762, lon: 139.6503 },
  'new york': { lat: 40.7128, lon: -74.0060 },
  newyork: { lat: 40.7128, lon: -74.0060 },
  maldives: { lat: 4.1755, lon: 73.5093 },
  dubai: { lat: 25.2048, lon: 55.2708 },
  rome: { lat: 41.9028, lon: 12.4964 },
  barcelona: { lat: 41.3851, lon: 2.1734 },
  london: { lat: 51.5074, lon: -0.1278 },
  amsterdam: { lat: 52.3676, lon: 4.9041 },
  bangkok: { lat: 13.7563, lon: 100.5018 },
  singapore: { lat: 1.3521, lon: 103.8198 },
  sydney: { lat: -33.8688, lon: 151.2093 },
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city') || '';
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  
  try {
    // Use provided coords or lookup from city name
    let latitude = lat;
    let longitude = lon;
    
    if (!latitude || !longitude) {
      const coords = DESTINATION_COORDS[city.toLowerCase()];
      if (coords) {
        latitude = coords.lat.toString();
        longitude = coords.lon.toString();
      } else {
        return NextResponse.json({ error: `No coordinates for "${city}". Provide lat/lon params.` }, { status: 400 });
      }
    }
    
    const res = await fetch(
      `https://api.liteapi.travel/v3.0/data/hotels?latitude=${latitude}&longitude=${longitude}&limit=5`,
      {
        headers: { "X-API-Key": process.env.LITEAPI_PRIVATE_KEY || "prod_851c1863-5c9a-472a-91c0-a04d5ed73e89" }
      }
    );
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Hotels API error:', error);
    return NextResponse.json({ error: 'Failed to fetch hotels' }, { status: 500 });
  }
}
