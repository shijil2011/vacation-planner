"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar as CalendarIcon, ArrowRight, ArrowLeft, Loader2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { INTERESTS } from "@/lib/constants";

export default function PlanPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: "2",
    budget: 2000,
    interests: [] as string[],
    pace: "moderate"
  });

  const handleInterestToggle = (id: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(id) 
        ? prev.interests.filter(i => i !== id)
        : [...prev.interests, id]
    }));
  };

  const generateItinerary = async () => {
    setLoading(true);
    try {
      const tripId = Date.now().toString();
      
      // Call AI API to generate real itinerary
      const res = await fetch('/api/generate-itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          destination: formData.destination,
          startDate: formData.startDate,
          endDate: formData.endDate,
          travelers: formData.travelers,
          budget: formData.budget,
          interests: formData.interests,
          pace: formData.pace,
        })
      });
      
      const result = await res.json();
      
      // Save both form data AND generated itinerary to localStorage
      localStorage.setItem(`trip_${tripId}`, JSON.stringify({
        formData,
        itinerary: result,
        generatedAt: new Date().toISOString()
      }));
      
      // Navigate to results with the real data
      router.push(`/trip/${tripId}`);
    } catch (error) {
      console.error('Failed to generate:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            {["Destination", "Preferences", "Review"].map((label, i) => (
              <div key={label} className={cn(
                "text-sm font-medium",
                step >= i + 1 ? "text-primary" : "text-gray-400"
              )}>
                {label}
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-500 ease-in-out"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 sm:p-12">
            
            {/* Step 1 */}
            {step === 1 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold mb-2">Where do you want to go?</h2>
                  <p className="text-gray-500">Let&apos;s start with the basics of your trip.</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Destination</label>
                    <div className="relative">
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input 
                        type="text" 
                        value={formData.destination}
                        onChange={(e) => setFormData({...formData, destination: e.target.value})}
                        placeholder="e.g. Paris, France" 
                        className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-lg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                          type="date" 
                          value={formData.startDate}
                          onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                          className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input 
                          type="date" 
                          value={formData.endDate}
                          onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                          className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-end">
                  <button 
                    onClick={() => setStep(2)}
                    disabled={!formData.destination || !formData.startDate || !formData.endDate}
                    className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Next Step <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold mb-2">What&apos;s your style?</h2>
                  <p className="text-gray-500">Help us personalize your experience.</p>
                </div>

                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-sm font-medium text-gray-700">Budget ($)</label>
                      <span className="font-bold text-primary">${formData.budget}</span>
                    </div>
                    <input 
                      type="range" 
                      min="500" 
                      max="10000" 
                      step="100"
                      value={formData.budget}
                      onChange={(e) => setFormData({...formData, budget: Number(e.target.value)})}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>$500</span>
                      <span>$10,000+</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Interests</label>
                    <div className="flex flex-wrap gap-3">
                      {INTERESTS.map((interest) => (
                        <button
                          key={interest.id}
                          onClick={() => handleInterestToggle(interest.id)}
                          className={cn(
                            "px-4 py-2 rounded-full border text-sm font-medium transition-all flex items-center space-x-2",
                            formData.interests.includes(interest.id)
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-gray-200 text-gray-600 hover:border-gray-300"
                          )}
                        >
                          <span>{interest.icon}</span>
                          <span>{interest.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Pace</label>
                    <div className="grid grid-cols-3 gap-4">
                      {["relaxed", "moderate", "packed"].map((pace) => (
                        <button
                          key={pace}
                          onClick={() => setFormData({...formData, pace})}
                          className={cn(
                            "py-3 rounded-xl border text-sm font-medium transition-all capitalize",
                            formData.pace === pace
                              ? "border-primary bg-primary text-white"
                              : "border-gray-200 text-gray-600 hover:border-gray-300"
                          )}
                        >
                          {pace}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-between">
                  <button 
                    onClick={() => setStep(1)}
                    className="px-6 py-4 text-gray-500 hover:text-gray-900 font-medium flex items-center"
                  >
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </button>
                  <button 
                    onClick={() => setStep(3)}
                    disabled={formData.interests.length === 0}
                    className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center hover:bg-primary/90 disabled:opacity-50 transition-all"
                  >
                    Review <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold mb-2">Ready to generate?</h2>
                  <p className="text-gray-500">Review your trip details.</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <div className="grid grid-cols-2 gap-y-6">
                    <div>
                      <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Destination</span>
                      <p className="font-semibold text-lg">{formData.destination}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Dates</span>
                      <p className="font-semibold">{formData.startDate} to {formData.endDate}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Budget</span>
                      <p className="font-semibold">${formData.budget}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Pace</span>
                      <p className="font-semibold capitalize">{formData.pace}</p>
                    </div>
                    <div className="col-span-2">
                      <span className="text-xs text-gray-500 uppercase font-bold tracking-wider">Interests</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {formData.interests.map(id => {
                          const interest = INTERESTS.find(i => i.id === id);
                          return (
                            <span key={id} className="text-sm bg-white px-3 py-1 rounded-full border border-gray-200">
                              {interest?.icon} {interest?.label}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-between">
                  <button 
                    onClick={() => setStep(2)}
                    disabled={loading}
                    className="px-6 py-4 text-gray-500 hover:text-gray-900 font-medium flex items-center"
                  >
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </button>
                  <button 
                    onClick={generateItinerary}
                    disabled={loading}
                    className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold flex items-center hover:opacity-90 disabled:opacity-80 transition-all shadow-lg"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                        Crafting your trip...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 w-5 h-5" />
                        Generate My Itinerary
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}