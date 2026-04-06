export const POPULAR_DESTINATIONS = [
  { id: '1', name: "Paris", country: "France", image: "https://images.unsplash.com/photo-1502602898657-3e9076113886?q=80&w=2000&auto=format&fit=crop", price: 1200, rating: 4.8, lat: 48.8566, lon: 2.3522 },
  { id: '2', name: "Bali", country: "Indonesia", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop", price: 800, rating: 4.9, lat: -8.4095, lon: 115.1889 },
  { id: '3', name: "Tokyo", country: "Japan", image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000&auto=format&fit=crop", price: 1500, rating: 4.9, lat: 35.6762, lon: 139.6503 },
  { id: '4', name: "New York", country: "USA", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2000&auto=format&fit=crop", price: 1400, rating: 4.7, lat: 40.7128, lon: -74.0060 },
  { id: '5', name: "Maldives", country: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop", price: 2500, rating: 4.9, lat: 3.2028, lon: 73.2207 },
  { id: '6', name: "Dubai", country: "UAE", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop", price: 1300, rating: 4.8, lat: 25.2048, lon: 55.2708 },
  { id: '7', name: "Rome", country: "Italy", image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2000&auto=format&fit=crop", price: 1100, rating: 4.8, lat: 41.9028, lon: 12.4964 },
  { id: '8', name: "Barcelona", country: "Spain", image: "https://images.unsplash.com/photo-1583422409516-2895a77ef244?q=80&w=2000&auto=format&fit=crop", price: 1000, rating: 4.7, lat: 41.3851, lon: 2.1734 },
  { id: '9', name: "London", country: "UK", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2000&auto=format&fit=crop", price: 1300, rating: 4.7, lat: 51.5074, lon: -0.1278 },
  { id: '10', name: "Singapore", country: "Singapore", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389cc7?q=80&w=2000&auto=format&fit=crop", price: 1100, rating: 4.8, lat: 1.3521, lon: 103.8198 },
];

export const DEPARTURE_CITIES = [
  { id: '1', name: "New York", code: "JFK", country: "USA" },
  { id: '2', name: "Los Angeles", code: "LAX", country: "USA" },
  { id: '3', name: "Chicago", code: "ORD", country: "USA" },
  { id: '4', name: "San Francisco", code: "SFO", country: "USA" },
  { id: '5', name: "London", code: "LHR", country: "UK" },
  { id: '6', name: "Paris", code: "CDG", country: "France" },
  { id: '7', name: "Dubai", code: "DXB", country: "UAE" },
  { id: '8', name: "Singapore", code: "SIN", country: "Singapore" },
  { id: '9', name: "Tokyo", code: "NRT", country: "Japan" },
  { id: '10', name: "Mumbai", code: "BOM", country: "India" },
  { id: '11', name: "Delhi", code: "DEL", country: "India" },
  { id: '12', name: "Bangalore", code: "BLR", country: "India" },
];

export const TRIP_TYPES = [
  { id: 'roundtrip', label: "Round Trip", icon: "🔄" },
  { id: 'oneway', label: "One Way", icon: "➡️" },
  { id: 'multicity', label: "Multi-City", icon: "🌍" },
];

export const TRAVELER_OPTIONS = [
  { adults: 1, children: 0, label: "1 Adult" },
  { adults: 2, children: 0, label: "2 Adults" },
  { adults: 1, children: 1, label: "1 Adult, 1 Child" },
  { adults: 2, children: 1, label: "2 Adults, 1 Child" },
  { adults: 2, children: 2, label: "2 Adults, 2 Children" },
  { adults: 3, children: 0, label: "3 Adults" },
  { adults: 4, children: 0, label: "4 Adults" },
];

export const INTERESTS = [
  { id: "adventure", label: "Adventure", icon: "🎿" },
  { id: "culture", label: "Culture", icon: "🏛️" },
  { id: "beach", label: "Beach", icon: "🏖️" },
  { id: "food", label: "Food", icon: "🍜" },
  { id: "nature", label: "Nature", icon: "🌲" },
  { id: "nightlife", label: "Nightlife", icon: "🍸" },
  { id: "shopping", label: "Shopping", icon: "🛍️" },
  { id: "romance", label: "Romance", icon: "💕" },
  { id: "history", label: "History", icon: "📚" },
];