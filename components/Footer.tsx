import Link from "next/link";
import { Plane } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12 mt-auto">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
            <Plane className="w-6 h-6 text-primary" />
            <span>TripBuilder</span>
          </Link>
          <p className="text-gray-400 text-sm">
            Your personal AI travel planner. Create your dream vacation in minutes.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gray-200">Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/plan" className="hover:text-primary">Plan a Trip</Link></li>
            <li><Link href="/destinations" className="hover:text-primary">Destinations</Link></li>
            <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-gray-200">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="#" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-primary">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} TripBuilder. All rights reserved.
      </div>
    </footer>
  );
}
