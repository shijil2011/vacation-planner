/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const coords: Record<string, { lat: number; lon: number }> = {
  paris: { lat: 48.8566, lon: 2.3522 },
  bali: { lat: -8.3405, lon: 115.0920 },
  tokyo: { lat: 35.6762, lon: 139.6503 },
  'new york': { lat: 40.7128, lon: -74.0060 },
  maldives: { lat: 4.1755, lon: 73.5093 },
  dubai: { lat: 25.2048, lon: 55.2708 },
  rome: { lat: 41.9028, lon: 12.4964 },
  barcelona: { lat: 41.3851, lon: 2.1734 },
};

export default function TripPage() {
  const { id } = useParams();
  const router = useRouter();
  const [trip, setTrip] = useState<any>(null);
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    const data = localStorage.getItem(`trip_${id}`);
    if (!data) {
      router.push("/plan");
      return;
    }
    const parsed = JSON.parse(data);
    setTrip(parsed);
    
    // Fetch weather
    const dest = parsed.formData?.destination?.toLowerCase() || '';
    const loc = coords[dest] || coords['paris']; // fallback
    fetch(`/api/weather?lat=${loc.lat}&lon=${loc.lon}`)
      .then(r => r.json())
      .then(w => setWeather(w))
      .catch(console.error);
  }, [id, router]);

  if (!trip) return <div className="p-10 text-center">Loading Trip...</div>;

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto space-y-8">
      <div className="glass p-8 rounded-2xl">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Your Trip to {trip.destination || trip.formData?.destination || "Unknown"}
        </h1>
        <p className="mt-4 text-lg">Have a great time for {trip.formData?.days || 3} days!</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Itinerary</h2>
          {trip.itinerary?.map((day: any) => (
            <div key={day.day} className="mb-4">
              <h3 className="font-bold text-lg">Day {day.day}: {day.title}</h3>
              <ul className="list-disc pl-5">
                {day.activities?.map((act: any, i: number) => (
                  <li key={i}>{act.time} - {act.title} ({act.location})</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="glass p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Weather</h2>
          {weather ? (
            <pre className="text-sm overflow-auto">{JSON.stringify(weather.daily?.temperature_2m_max, null, 2)}</pre>
          ) : (
            <p>Loading weather...</p>
          )}

          <h2 className="text-2xl font-semibold mt-8 mb-4">Budget</h2>
          <pre className="text-sm overflow-auto">{JSON.stringify(trip.budget, null, 2)}</pre>
        </div>
      </div>
      
      <div className="glass p-6 rounded-2xl flex justify-center gap-4">
        <button onClick={() => window.print()} className="px-6 py-2 bg-primary text-white rounded">Print</button>
        <button onClick={() => router.push('/plan')} className="px-6 py-2 border border-primary text-primary rounded">Plan Another</button>
      </div>
    </div>
  );
}
