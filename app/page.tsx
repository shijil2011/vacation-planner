"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { POPULAR_DESTINATIONS, DEPARTURE_CITIES, TRIP_TYPES } from "@/lib/constants";
import { Search, MapPin, Calendar, Users, Plane, Sparkles, Shield, Clock, DollarSign, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const router = useRouter();
  const today = new Date().toISOString().split('T')[0];

  // Form state
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [tripType, setTripType] = useState("roundtrip");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travelers, setTravelers] = useState("2 Adults");
  const [budget, setBudget] = useState(2000);

  // Dropdowns
  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);
  const [travelerOpen, setTravelerOpen] = useState(false);

  const isFormValid = fromCity && toCity && startDate && endDate;

  const handleSearch = () => {
    if (isFormValid) {
      router.push(`/plan?from=${encodeURIComponent(fromCity)}&to=${encodeURIComponent(toCity)}&tripType=${tripType}&startDate=${startDate}&endDate=${endDate}&travelers=${encodeURIComponent(travelers)}&budget=${budget}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg pt-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full py-12">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
            AI-Powered Trip Planning
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-text-reveal">
            Plan Your Perfect Trip
          </h1>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto opacity-0 animate-[text-reveal_1s_ease-out_0.5s_forwards]">
            From flight to itinerary — we build your complete vacation in minutes
          </p>

          {/* Search Card */}
          <div className="w-full max-w-5xl glass bg-white/10 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl opacity-0 animate-[text-reveal_1s_ease-out_0.8s_forwards] border border-white/20">
            
            {/* Trip Type Selector */}
            <div className="flex gap-2 mb-6 justify-center">
              {TRIP_TYPES.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setTripType(type.id)}
                  className={cn(
                    "px-5 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2",
                    tripType === type.id
                      ? "bg-primary text-white shadow-lg"
                      : "bg-white/20 text-white/80 hover:bg-white/30"
                  )}
                >
                  <span>{type.icon}</span>
                  {type.label}
                </button>
              ))}
            </div>

            {/* From / To Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* From */}
              <div className="relative">
                <div className="absolute left-4 top-4 text-white/60 z-10">
                  <Plane className="w-5 h-5" />
                </div>
                <button
                  onClick={() => { setFromOpen(!fromOpen); setToOpen(false); }}
                  className="w-full pl-14 pr-12 py-4 rounded-xl bg-white/90 text-gray-900 text-left font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 relative"
                >
                  {fromCity || <span className="text-gray-400">From where?</span>}
                  <ChevronDown className={cn("absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform", fromOpen && "rotate-180")} />
                </button>
                {fromOpen && (
                  <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-2xl border max-h-72 overflow-y-auto">
                    {DEPARTURE_CITIES.map((city) => (
                      <button
                        key={city.id}
                        onClick={() => { setFromCity(`${city.name} (${city.code})`); setFromOpen(false); }}
                        className="w-full px-4 py-3 text-left hover:bg-primary/5 flex items-center justify-between transition-colors"
                      >
                        <div>
                          <span className="font-medium text-gray-900">{city.name}</span>
                          <span className="text-gray-400 text-sm ml-2">{city.country}</span>
                        </div>
                        <span className="text-primary font-medium text-sm">{city.code}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* To */}
              <div className="relative">
                <div className="absolute left-4 top-4 text-primary z-10">
                  <MapPin className="w-5 h-5" />
                </div>
                <button
                  onClick={() => { setToOpen(!toOpen); setFromOpen(false); }}
                  className="w-full pl-14 pr-12 py-4 rounded-xl bg-white/90 text-gray-900 text-left font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 relative"
                >
                  {toCity || <span className="text-gray-400">To where?</span>}
                  <ChevronDown className={cn("absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform", toOpen && "rotate-180")} />
                </button>
                {toOpen && (
                  <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-2xl border max-h-72 overflow-y-auto">
                    {POPULAR_DESTINATIONS.map((dest) => (
                      <button
                        key={dest.id}
                        onClick={() => { setToCity(dest.name); setToOpen(false); }}
                        className="w-full px-4 py-3 text-left hover:bg-primary/5 flex items-center gap-3 transition-colors"
                      >
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                        <div>
                          <span className="font-medium text-gray-900">{dest.name}</span>
                          <span className="text-gray-400 text-sm ml-2">{dest.country}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Dates Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10 pointer-events-none" />
                <input
                  type="date"
                  min={today}
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  placeholder="Departure"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10 pointer-events-none" />
                <input
                  type="date"
                  min={startDate || today}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  placeholder="Return"
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>

            {/* Travelers + Budget Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 z-10 pointer-events-none" />
                <button
                  onClick={() => { setTravelerOpen(!travelerOpen); }}
                  className="w-full pl-12 pr-12 py-4 rounded-xl bg-white/90 text-gray-900 text-left font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 relative"
                >
                  {travelers}
                  <ChevronDown className={cn("absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform", travelerOpen && "rotate-180")} />
                </button>
                {travelerOpen && (
                  <div className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-2xl border overflow-hidden">
                    {["1 Adult", "2 Adults", "1 Adult, 1 Child", "2 Adults, 1 Child", "2 Adults, 2 Children", "3 Adults", "4 Adults"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => { setTravelers(opt); setTravelerOpen(false); }}
                        className="w-full px-4 py-3 text-left hover:bg-primary/5 transition-colors text-gray-900"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative flex items-center px-4 bg-white/90 rounded-xl">
                <DollarSign className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-900 font-medium ml-1 mr-3">$</span>
                <input
                  type="range"
                  min="500"
                  max="15000"
                  step="100"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="flex-1 h-6 bg-transparent focus:outline-none accent-primary"
                />
                <span className="text-gray-900 font-bold ml-2 min-w-[80px] text-right">${budget}</span>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleSearch}
              disabled={!isFormValid}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg flex items-center justify-center hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
            >
              <Search className="w-5 h-5 mr-2" />
              Plan My Trip — It&apos;s Free
            </button>

            <p className="text-white/60 text-sm text-center mt-3">
              AI generates your complete itinerary in under 60 seconds
            </p>
          </div>

          {/* Social proof */}
          <div className="mt-12 flex items-center justify-center space-x-8 text-white/80 text-sm font-medium opacity-0 animate-[text-reveal_1s_ease-out_1.2s_forwards]">
            <span>50K+ Trips Planned</span>
            <span>•</span>
            <span>200+ Destinations</span>
            <span>•</span>
            <span>4.9★ Rating</span>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-gray-500 text-lg">Explore trending places loved by travelers worldwide</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {POPULAR_DESTINATIONS.slice(0, 8).map((dest) => (
              <div key={dest.id} className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/5] shadow-lg">
                <Image src={dest.image} alt={dest.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full text-white">
                  <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                  <p className="text-white/80 mb-2">{dest.country}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">From ${dest.price}</span>
                    <span className="flex items-center text-sm bg-black/40 px-2 py-1 rounded backdrop-blur-sm">★ {dest.rating}</span>
                  </div>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => { setToCity(dest.name); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                      className="w-full py-2 bg-primary rounded-lg text-sm font-medium"
                    >
                      Plan Trip
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-500 text-lg">Plan your entire trip in 3 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", icon: "🔍", title: "Tell Us Your Trip", desc: "Enter your departure city, destination, dates, and budget. Customize by interests and travel pace." },
              { step: "02", icon: "✨", title: "AI Creates Your Plan", desc: "Our AI generates a complete day-by-day itinerary with flights, hotels, activities, and budget breakdown." },
              { step: "03", icon: "🧳", title: "Travel & Enjoy", desc: "Get packing tips, weather forecasts, and travel recommendations. Your perfect trip is ready!" },
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <span className="text-primary font-bold text-sm">Step {item.step}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Sparkles className="w-6 h-6 text-primary" />, title: "AI-Powered", desc: "Personalized itineraries generated in seconds" },
              { icon: <DollarSign className="w-6 h-6 text-secondary" />, title: "Best Prices", desc: "We scan hundreds of sources for the best deals" },
              { icon: <Clock className="w-6 h-6 text-accent" />, title: "24/7 Support", desc: "Our travel experts are always here to help" },
              { icon: <Shield className="w-6 h-6 text-success" />, title: "Free Changes", desc: "Plans change. We offer flexible options." },
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mx-auto mb-5 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-10 text-white/90">Join thousands of travelers who have planned their perfect trips.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
          >
            Plan Your Trip Now — It&apos;s Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white/60 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-white font-bold text-lg">TripBuilder</h4>
              <p className="text-sm mt-1">Your AI-powered vacation planner</p>
            </div>
            <div className="flex gap-8 text-sm">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link>
              <Link href="/plan" className="hover:text-white transition-colors">Plan a Trip</Link>
            </div>
            <p className="text-sm">© 2026 TripBuilder. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}