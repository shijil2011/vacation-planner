"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plane, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "glass py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Plane className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              TripBuilder
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/destinations" className="text-sm font-medium hover:text-primary transition-colors">Destinations</Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            <Link href="/plan" className="px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
              Plan Your Trip
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass border-t border-gray-100 py-4 px-4 flex flex-col space-y-4 shadow-xl">
          <Link href="/destinations" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 hover:bg-gray-50 rounded-lg">Destinations</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 hover:bg-gray-50 rounded-lg">About</Link>
          <Link href="/plan" onClick={() => setMobileMenuOpen(false)} className="px-4 py-2 bg-primary text-white text-center rounded-lg">Plan Your Trip</Link>
        </div>
      )}
    </nav>
  );
}