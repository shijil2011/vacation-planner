"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Calendar, CreditCard, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold text-dark tracking-tight mb-6"
          >
            Plan Your Dream <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Vacation</span> in Minutes
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            AI-powered itineraries, optimized budgets, and perfectly curated destinations tailored just for you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link href="/plan" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:shadow-lg transition-all">
              Start Planning Now <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-dark">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: MapPin, title: "1. Tell us where", desc: "Choose your destination or let us suggest one based on your vibe." },
              { icon: Calendar, title: "2. Set the dates", desc: "Pick your travel dates and how long you want to stay." },
              { icon: CreditCard, title: "3. Get your plan", desc: "Receive a complete itinerary, budget, and packing list." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 mx-auto bg-blue-100 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
