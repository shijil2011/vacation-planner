"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { POPULAR_DESTINATIONS } from "@/lib/constants";
import { Search, MapPin, Calendar, Users, DollarSign, Sparkles, Shield, Clock } from "lucide-react";

export default function Home() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden mesh-bg pt-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-text-reveal">
            Plan Your Perfect Getaway
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto opacity-0 animate-[text-reveal_1s_ease-out_0.5s_forwards]">
            AI-powered itineraries • Best deals • Unforgettable experiences
          </p>

          {/* Search Card */}
          <div className="w-full max-w-4xl glass bg-white/10 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl opacity-0 animate-[text-reveal_1s_ease-out_0.8s_forwards] border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative text-left">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input type="text" placeholder="Where to?" value={destination} onChange={(e) => setDestination(e.target.value)} onKeyDown={(e) => e.key === "Enter" && router.push(`/plan?destination=${destination}`)} className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div className="relative text-left">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input type="text" placeholder="Dates" className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50" />
              </div>
              <div className="relative text-left">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <select className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 appearance-none">
                  <option value="1">1 Traveler</option>
                  <option value="2">2 Travelers</option>
                  <option value="3">3 Travelers</option>
                  <option value="4+">4+ Travelers</option>
                </select>
              </div>
              <Link href="/plan" className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg">
                <Search className="w-5 h-5 mr-2" />
                Search
              </Link>
            </div>
          </div>

          <div className="mt-16 flex items-center justify-center space-x-8 text-white/80 text-sm font-medium opacity-0 animate-[text-reveal_1s_ease-out_1.2s_forwards]">
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
          <h2 className="text-4xl font-bold mb-12 text-center">Popular Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {POPULAR_DESTINATIONS.map((dest) => (
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
                    <button className="w-full py-2 bg-primary rounded-lg text-sm font-medium">Explore</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI-Powered</h3>
              <p className="text-gray-500">Personalized itineraries generated in seconds based on your preferences.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
                <DollarSign className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Best Price Guarantee</h3>
              <p className="text-gray-500">We scan hundreds of sources to find you the best deals.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-500">Our travel experts are always here to help you anywhere.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-success" />
              </div>
              <h3 className="text-xl font-bold mb-3">Free Cancellation</h3>
              <p className="text-gray-500">Plans change. We offer flexible cancellation policies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-10 text-white/90">Join thousands of travelers who have planned their perfect trips with TripBuilder.</p>
          <Link href="/plan" className="inline-block px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl">
            Plan Your Trip Now
          </Link>
        </div>
      </section>
    </div>
  );
}