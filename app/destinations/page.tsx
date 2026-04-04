import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DestinationsPage() {
  const destinations = [
    { name: "Tokyo, Japan", desc: "A mix of the ultramodern and the traditional.", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=600&auto=format&fit=crop" },
    { name: "Paris, France", desc: "The city of light, love, and incredible food.", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop" },
    { name: "Bali, Indonesia", desc: "Tropical paradise with beaches and temples.", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600&auto=format&fit=crop" },
    { name: "New York, USA", desc: "The city that never sleeps.", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=600&auto=format&fit=crop" },
    { name: "Rome, Italy", desc: "Ancient history meets modern lifestyle.", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=600&auto=format&fit=crop" },
    { name: "Santorini, Greece", desc: "Stunning sunsets and white-washed buildings.", image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=600&auto=format&fit=crop" }
  ];

  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">Popular Destinations</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our most requested locations and let our AI craft the perfect itinerary for your next adventure.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{dest.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{dest.desc}</p>
                <Link href={`/plan?dest=${dest.name}`} className="text-primary font-medium flex items-center gap-1 hover:gap-2 transition-all">
                  Plan Trip Here <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
