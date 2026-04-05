/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { 
  MapPin, Calendar, DollarSign, Sun, CheckCircle2, 
  Sparkles, ArrowLeft, Share2, Printer, ChevronDown,
  Utensils, Car, Plane, Hotel, ShoppingBag
} from "lucide-react";
import { cn } from "@/lib/utils";

const COORDS: Record<string, { lat: number; lon: number }> = {
  paris: { lat: 48.8566, lon: 2.3522 },
  bali: { lat: -8.3405, lon: 115.0920 },
  tokyo: { lat: 35.6762, lon: 139.6503 },
  "new york": { lat: 40.7128, lon: -74.0060 },
  maldives: { lat: 4.1755, lon: 73.5093 },
  dubai: { lat: 25.2048, lon: 55.2708 },
  rome: { lat: 41.9028, lon: 12.4964 },
  barcelona: { lat: 41.3851, lon: 2.1734 },
  london: { lat: 51.5074, lon: -0.1278 },
  amsterdam: { lat: 52.3676, lon: 4.9041 },
};

const WEATHER_ICONS: Record<number, string> = {
  0: "☀️", 1: "🌤️", 2: "⛅", 3: "☁️", 45: "🌫️", 48: "🌫️",
  51: "🌦️", 53: "🌦️", 55: "🌦️", 61: "🌧️", 63: "🌧️", 65: "🌧️",
  71: "❄️", 73: "❄️", 75: "❄️", 77: "🌨️", 80: "🌦️", 81: "🌧️", 82: "🌧️",
  85: "❄️", 86: "❄️", 95: "⛈️", 96: "⛈️", 99: "⛈️",
};

const CAT_COLORS: Record<string, string> = {
  accommodation: "bg-gray-100 text-gray-600 border-gray-200",
  food: "bg-red-100 text-red-600 border-red-200",
  culture: "bg-purple-100 text-purple-600 border-purple-200",
  nature: "bg-green-100 text-green-600 border-green-200",
  adventure: "bg-orange-100 text-orange-600 border-orange-200",
  beach: "bg-cyan-100 text-cyan-600 border-cyan-200",
  shopping: "bg-pink-100 text-pink-600 border-pink-200",
  nightlife: "bg-indigo-100 text-indigo-600 border-indigo-200",
  romance: "bg-rose-100 text-rose-600 border-rose-200",
  history: "bg-amber-100 text-amber-600 border-amber-200",
};

const DAY_COLORS = [
  "border-l-primary",
  "border-l-accent",
  "border-l-secondary",
  "border-l-success",
  "border-l-pink-500",
];

export default function TripPage() {
  const { id } = useParams();
  const router = useRouter();
  const [trip, setTrip] = useState<any>(null);
  const [weather, setWeather] = useState<any>(null);
  const [hotels, setHotels] = useState<any[]>([]);
  const [packed, setPacked] = useState<Record<string, boolean>>({});
  const [packingOpen, setPackingOpen] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem(`trip_${id}`);
    if (!data) { router.push("/plan"); return; }
    const parsed = JSON.parse(data);
    setTrip(parsed);
    const savedPacked = localStorage.getItem(`trip_${id}_packed`);
    if (savedPacked) setPacked(JSON.parse(savedPacked));
    const dest = (parsed.formData?.destination || "paris").toLowerCase();
    const loc = COORDS[dest] || COORDS["paris"];
    fetch(`/api/weather?lat=${loc.lat}&lon=${loc.lon}`)
      .then(r => r.json()).then(w => setWeather(w)).catch(() => {});
    fetch(`/api/hotels?city=${encodeURIComponent(parsed.formData?.destination || "Paris")}`)
      .then(r => r.json())
      .then(res => { if (res.data) setHotels(res.data.slice(0, 3)); })
      .catch(() => {});
    setLoading(false);
  }, [id, router]);

  const togglePacked = (item: string) => {
    const next = { ...packed, [item]: !packed[item] };
    setPacked(next);
    localStorage.setItem(`trip_${id}_packed`, JSON.stringify(next));
  };

  const toggleCategory = (cat: string) => {
    setPackingOpen(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const copyShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-500 font-medium animate-pulse">Loading your dream trip...</p>
      </div>
    </div>
  );

  if (!trip) return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Trip Not Found</h1>
      <p className="text-gray-500 mb-8">We couldn&apos;t find an itinerary for this trip.</p>
      <button onClick={() => router.push("/plan")} className="px-8 py-3 bg-primary text-white rounded-xl font-bold hover:scale-105 transition">Plan a New Trip</button>
    </div>
  );

  const itineraryData = trip.itinerary || {};
  const formData = trip.formData || {};
  const itinerary = itineraryData.itinerary || [];
  const budget = itineraryData.budget || {};
  const packing = itineraryData.packing || {};
  const tips = itineraryData.tips || [];
  const totalBudget = Object.values(budget as Record<string, number>).reduce((a, b) => a + b, 0);
  const totalActivities = itinerary.reduce((acc: number, d: any) => acc + (d.activities?.length || 0), 0);
  const packedCount = Object.values(packed).filter(Boolean).length;
  const totalItems = Object.values(packing).flat().length;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero */}
      <section className="relative h-[300px] bg-gradient-to-r from-primary via-accent to-secondary overflow-hidden rounded-b-[40px] shadow-2xl">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
          <button onClick={() => router.back()} className="absolute top-6 left-6 p-2 bg-white/20 backdrop-blur rounded-full text-white hover:bg-white/30 transition self-start">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
              {itineraryData.destination || formData.destination}
            </h1>
            <div className="flex justify-center gap-4 mt-4 flex-wrap">
              <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4" /> {formData.startDate} → {formData.endDate}
              </span>
              <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm font-medium">
                👤 {formData.travelers} Traveler{(formData.travelers || "1") !== "1" ? "s" : ""}
              </span>
              <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm font-medium">
                💰 ${formData.budget?.toLocaleString?.() || formData.budget} budget
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Total Budget", value: `$${totalBudget.toLocaleString()}`, icon: DollarSign, color: "text-primary", bg: "bg-primary/10" },
            { label: "Duration", value: `${itinerary.length} Days`, icon: Calendar, color: "text-accent", bg: "bg-accent/10" },
            { label: "Activities", value: totalActivities, icon: MapPin, color: "text-secondary", bg: "bg-secondary/10" },
            { label: "Weather", value: weather?.daily?.temperature_2m_max?.[0] ? `${weather.daily.temperature_2m_max[0]}°C` : "—", icon: Sun, color: "text-blue-500", bg: "bg-blue-100" },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
              <div className={cn("p-3 rounded-xl", stat.bg)}><stat.icon className={cn("w-5 h-5", stat.color)} /></div>
              <div>
                <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                <p className="text-xl font-bold text-dark">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Itinerary */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2"><Sparkles className="text-primary w-6 h-6" /> Your Itinerary</h2>
            {itinerary.map((day: any, idx: number) => (
              <motion.div key={day.day} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}
                className={cn("bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden border-l-4", DAY_COLORS[idx % DAY_COLORS.length])}>
                <div className="flex items-center p-5 bg-gray-50/60 border-b border-gray-100">
                  <div className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3 shadow-md text-sm">{day.day}</div>
                  <div>
                    <h3 className="font-bold text-lg">{day.title}</h3>
                    <p className="text-xs text-gray-500">{day.theme}</p>
                  </div>
                </div>
                <div className="p-5 space-y-4">
                  {day.activities?.map((act: any, ai: number) => (
                    <div key={ai} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-primary border-2 border-white shadow z-10 mt-1.5" />
                        {ai < day.activities.length - 1 && <div className="w-0.5 flex-1 bg-gray-100 my-1" />}
                      </div>
                      <div className="flex-1 bg-gray-50 p-4 rounded-xl border border-gray-100 hover:shadow-md transition">
                        <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
                          <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-1 rounded">{act.time}</span>
                          <span className={cn("text-[10px] uppercase font-bold px-2 py-1 rounded-full border", CAT_COLORS[act.category] || "bg-gray-100 text-gray-600")}>{act.category}</span>
                        </div>
                        <h4 className="font-bold text-gray-900 mb-1">{act.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{act.description}</p>
                        <div className="flex justify-between items-center text-xs text-gray-400">
                          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {act.location}</span>
                          {act.estimated_cost > 0 && <span className="font-bold text-gray-700">${act.estimated_cost}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weather */}
            <div className="bg-gradient-to-br from-blue-500 to-primary p-6 rounded-2xl text-white shadow-lg">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Sun className="w-5 h-5" /> 7-Day Forecast</h3>
              <div className="grid grid-cols-7 gap-1 text-center">
                {weather?.daily?.time?.map((date: string, i: number) => {
                  const d = new Date(date);
                  const dayName = d.toLocaleDateString("en", { weekday: "short" });
                  const code = weather.daily?.weather_code?.[i] || 0;
                  const high = weather.daily?.temperature_2m_max?.[i];
                  const low = weather.daily?.temperature_2m_min?.[i];
                  return (
                    <div key={date} className="flex flex-col items-center gap-1 p-1">
                      <span className="text-[10px] opacity-80 font-medium">{dayName}</span>
                      <span className="text-lg">{WEATHER_ICONS[code] || "☀️"}</span>
                      <div className="text-[10px]">
                        <span className="font-bold">{Math.round(high || 0)}°</span>
                        <span className="opacity-60">/{Math.round(low || 0)}°</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              {itineraryData.weather && (
                <p className="mt-4 text-xs text-white/80 bg-white/10 rounded-lg p-2">{itineraryData.weather}</p>
              )}
            </div>

            {/* Budget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><DollarSign className="text-primary w-5 h-5" /> Budget Breakdown</h3>
              <div className="space-y-3">
                {[
                  { key: "flights", label: "Flights", icon: Plane, color: "bg-blue-500" },
                  { key: "hotels", label: "Hotels", icon: Hotel, color: "bg-purple-500" },
                  { key: "food", label: "Food & Dining", icon: Utensils, color: "bg-red-500" },
                  { key: "activities", label: "Activities", icon: MapPin, color: "bg-orange-500" },
                  { key: "transport", label: "Transport", icon: Car, color: "bg-green-500" },
                  { key: "misc", label: "Miscellaneous", icon: ShoppingBag, color: "bg-pink-500" },
                ].map(({ key, label, icon: Icon, color }) => {
                  const val = budget[key] || 0;
                  const pct = totalBudget > 0 ? Math.round((val / totalBudget) * 100) : 0;
                  return (
                    <div key={key}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="flex items-center gap-1 font-medium text-gray-700"><Icon className="w-3 h-3" /> {label}</span>
                        <span className="font-bold">${val}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div className={cn("h-full rounded-full transition-all", color)} style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  );
                })}
                <div className="pt-3 border-t border-gray-100 flex justify-between font-bold text-dark">
                  <span>Total</span><span>${totalBudget.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Packing */}
            {totalItems > 0 && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold flex items-center gap-2"><CheckCircle2 className="text-primary w-5 h-5" /> Packing List</h3>
                  <span className="text-xs text-gray-500 font-medium">{packedCount}/{totalItems} packed</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full mb-4 overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${totalItems > 0 ? (packedCount / totalItems) * 100 : 0}%` }} />
                </div>
                <div className="space-y-2">
                  {Object.entries(packing).map(([cat, items]: [string, any]) => (
                    <div key={cat}>
                      <button onClick={() => toggleCategory(cat)} className="flex justify-between items-center w-full text-sm font-semibold text-gray-700 mb-1 hover:text-primary transition">
                        <span className="capitalize">{cat}</span>
                        <ChevronDown className={cn("w-4 h-4 transition-transform", packingOpen[cat] && "rotate-180")} />
                      </button>
                      {packingOpen[cat] !== false && (
                        <div className="space-y-1 ml-2">
                          {(items as string[]).map((item: string) => (
                            <label key={item} className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer hover:text-gray-900">
                              <input type="checkbox" checked={!!packed[item]} onChange={() => togglePacked(item)} className="rounded border-gray-300 text-primary w-4 h-4" />
                              <span className={cn(packed[item] && "line-through text-gray-400")}>{item}</span>
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Hotels */}
            {hotels.length > 0 && (
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><Hotel className="text-primary w-5 h-5" /> Recommended Hotels</h3>
                <div className="space-y-4">
                  {hotels.map((hotel: any, i: number) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <h4 className="font-bold text-sm">{hotel.name}</h4>
                      <p className="text-xs text-gray-500 mt-1 line-clamp-2">{hotel.hotelDescription?.replace(/<[^>]*>/g, "").slice(0, 100)}...</p>
                      <button className="mt-2 text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-lg font-medium hover:bg-primary/20 transition">View Details</button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tips */}
            {tips.length > 0 && (
              <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2"><Sparkles className="text-amber-500 w-5 h-5" /> Travel Tips</h3>
                <ul className="space-y-2">
                  {tips.map((tip: string, i: number) => (
                    <li key={i} className="text-sm text-amber-800 flex gap-2"><span>💡</span><span>{tip}</span></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button onClick={copyShare} className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition shadow-lg shadow-primary/25">
            <Share2 className="w-4 h-4" /> Share Trip
          </button>
          <button onClick={() => window.print()} className="flex items-center gap-2 px-6 py-3 bg-white text-dark border border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition">
            <Printer className="w-4 h-4" /> Print
          </button>
          <button onClick={() => router.push("/plan")} className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold hover:opacity-90 transition shadow-lg">
            <Sparkles className="w-4 h-4" /> Plan Another Trip
          </button>
        </div>
      </main>
    </div>
  );
}
