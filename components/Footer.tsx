import Link from "next/link";
import { Plane } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Plane className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">TripBuilder</span>
            </Link>
            <p className="text-gray-500 text-sm">
              AI-powered itineraries, best deals, and unforgettable experiences. Plan your perfect getaway in minutes.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link href="/destinations" className="hover:text-primary">Destinations</Link></li>
              <li><Link href="/blog" className="hover:text-primary">Travel Blog</Link></li>
              <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Stay updated</h3>
            <form className="flex space-x-2">
              <input type="email" placeholder="Enter your email" className="px-4 py-2 border border-gray-200 rounded-lg text-sm w-full focus:outline-none focus:ring-2 focus:ring-primary/20" />
              <button type="button" className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90">
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-primary">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-primary">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-primary">Facebook</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TripBuilder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}