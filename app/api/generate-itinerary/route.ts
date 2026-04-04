import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Simulate AI generation delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    return NextResponse.json({
      success: true,
      message: "Itinerary generated successfully",
      data: {
        destination: body.destination,
        days: 3,
        itinerary: [
          { day: 1, title: "Arrival", activities: ["Check in", "Dinner"] },
          { day: 2, title: "Exploration", activities: ["Museum", "Lunch", "Park"] }
        ]
      }
    });
  } catch {
    return NextResponse.json({ error: "Failed to generate itinerary" }, { status: 500 });
  }
}
