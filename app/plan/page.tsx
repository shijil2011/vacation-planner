"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Map, Calendar, Users } from "lucide-react";

const interestsList = ["Adventure", "Culture", "Beach", "Food", "Nature", "Nightlife", "Shopping", "Romance"];

export default function PlanPage() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const toggleInterest = (i: string) => {
    setInterests(prev => prev.includes(i) ? prev.filter(item => item !== i) : [...prev, i]);
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      router.push(`/trip/trip-${Math.floor(Math.random() * 10000)}`);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold text-dark mb-2">Design Your Trip</h1>
          <p className="text-gray-500 mb-8">Fill in the details and our AI will craft the perfect itinerary.</p>
          
          <form onSubmit={handleGenerate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Where to?</label>
              <div className="relative">
                <Map className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  required
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Tokyo, Paris, Bali" 
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dates</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input type="text" placeholder="Select dates" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Travelers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input type="number" min="1" placeholder="2" className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary outline-none" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
              <div className="flex flex-wrap gap-2">
                {interestsList.map((interest) => (
                  <button
                    type="button"
                    key={interest}
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      interests.includes(interest) 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading || !destination}
              className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all disabled:opacity-70 flex justify-center items-center gap-2"
            >
              {loading ? "Generating Magic..." : "Generate Itinerary"}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
