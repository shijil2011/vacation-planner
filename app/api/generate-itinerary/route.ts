import { NextResponse } from 'next/server';

const OLLAMA_API_KEY = process.env.NEXT_PUBLIC_OLLAMA_API_KEY || "fb0a596e81fe4fd9a75d199bfa2ea039.RCwPs8olrk2RRO7OBUvlwv2V";
const OLLAMA_MODEL = process.env.NEXT_PUBLIC_OLLAMA_MODEL || "minimax-m2.7:cloud";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const prompt = `You are an expert travel planner. Create a structured JSON itinerary for ${data.destination} for ${data.days || 3} days.
The JSON should have:
{
  "destination": "Name of destination",
  "itinerary": [
    { "day": 1, "title": "Day title", "theme": "Theme", "activities": [
      { "time": "09:00", "title": "Activity", "description": "Desc", "location": "Loc", "category": "Category", "estimated_cost": 50 }
    ]}
  ],
  "budget": { "flights": 0, "hotels": 0, "food": 0, "activities": 0, "transport": 0, "misc": 0 },
  "packing": { "essentials": [], "clothes": [], "tech": [], "documents": [], "toiletries": [] },
  "weather": "Weather summary",
  "tips": ["Tip 1", "Tip 2"]
}
Respond ONLY with raw JSON, no markdown formatting or backticks.`;

    const response = await fetch("https://ollama.com/api/chat", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OLLAMA_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        messages: [{ role: "user", content: prompt }],
        stream: false
      })
    });

    const result = await response.json();
    let content = result.message.content;
    
    // Attempt to parse JSON safely
    content = content.replace(/```json/g, '').replace(/```/g, '').trim();
    const parsed = JSON.parse(content);
    return NextResponse.json(parsed);

  } catch (error) {
    console.error("AI Generation Error", error);
    // Fallback Mock
    return NextResponse.json({
      destination: "Fallback Destination",
      itinerary: [
        { day: 1, title: "Arrival", theme: "Welcome", activities: [] }
      ],
      budget: { flights: 500, hotels: 300, food: 150, activities: 100, transport: 50, misc: 50 },
      packing: { essentials: ["Passport"], clothes: ["Shirts"], tech: ["Charger"], documents: ["Visa"], toiletries: ["Toothbrush"] },
      weather: "Sunny",
      tips: ["Have fun"]
    });
  }
}
