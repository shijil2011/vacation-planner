"use client";

import { motion } from "framer-motion";
import { MapPin, Sun, Clock, CheckCircle2 } from "lucide-react";

export default function TripResults() {
  // Mock data
  const days = [
    { day: 1, title: "Arrival & Exploration", activities: ["Check into hotel", "Walk around city center", "Welcome dinner at local restaurant"] },
    { day: 2, title: "Cultural Highlights", activities: ["Visit main museum", "Lunch at cafe", "Sunset viewpoint"] },
    { day: 3, title: "Nature & Relaxation", activities: ["Day trip to nearby park", "Picnic lunch", "Spa evening"] },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="h-64 md:h-96 relative bg-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center flex-col text-white text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Your Trip Plan
          </motion.h1>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-lg md:text-xl"
          >
            <MapPin className="w-5 h-5" /> <span>Dream Destination • 3 Days</span>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Itinerary */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold mb-6">Daily Itinerary</h2>
            {days.map((day, idx) => (
              <motion.div 
                key={day.day}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center font-bold text-lg">
                    D{day.day}
                  </div>
                  <h3 className="text-xl font-semibold">{day.title}</h3>
                </div>
                <ul className="space-y-4">
                  {day.activities.map((act, i) => (
                    <li key={i} className="flex gap-3">
                      <Clock className="w-5 h-5 text-gray-400 shrink-0" />
                      <span className="text-gray-600">{act}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weather Widget */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-blue-400 to-primary rounded-2xl p-6 text-white shadow-lg"
            >
              <h3 className="font-semibold mb-4 flex items-center gap-2"><Sun className="w-5 h-5" /> Weather Forecast</h3>
              <div className="flex justify-between items-center">
                <div className="text-4xl font-bold">24°C</div>
                <div className="text-right">
                  <div className="text-blue-100">Mostly Sunny</div>
                  <div className="text-sm">H: 26° L: 18°</div>
                </div>
              </div>
            </motion.div>

            {/* Packing List */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="font-semibold mb-4 text-lg">Essential Packing</h3>
              <ul className="space-y-3">
                {["Comfortable shoes", "Light jacket", "Camera", "Power bank", "Sunscreen"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 className="w-5 h-5 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
