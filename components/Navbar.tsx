import Link from "next/link";
import { Plane } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-gray-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary font-bold text-xl">
          <Plane className="w-6 h-6" />
          <span>TripBuilder</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/destinations" className="text-gray-600 hover:text-primary transition-colors">Destinations</Link>
          <Link href="/about" className="text-gray-600 hover:text-primary transition-colors">About</Link>
        </nav>
        <Link href="/plan" className="bg-primary text-white px-4 py-2 rounded-full font-medium hover:bg-blue-600 transition-colors">
          Start Planning
        </Link>
      </div>
    </header>
  );
}
