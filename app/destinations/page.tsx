"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const destinations = [
  { id: 'paris', name: 'Paris, France', category: 'Romantic', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34' },
  { id: 'bali', name: 'Bali, Indonesia', category: 'Beach', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4' },
  { id: 'tokyo', name: 'Tokyo, Japan', category: 'City', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf' },
];

export default function DestinationsPage() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Beach', 'City', 'Romantic', 'Cultural'];
  
  const filtered = filter === 'All' ? destinations : destinations.filter(d => d.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto space-y-8">
      <h1 className="text-4xl font-bold text-center mb-8">Explore Destinations</h1>
      
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map(c => (
          <button key={c} onClick={() => setFilter(c)} className={`px-4 py-2 rounded-full \${filter === c ? 'bg-primary text-white' : 'glass hover:bg-gray-50'}`}>
            {c}
          </button>
        ))}
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map(d => (
          <Link href={`/plan?destination=\${d.name}`} key={d.id} className="glass rounded-2xl overflow-hidden hover:shadow-xl transition-all block group">
            <div className="relative h-48">
              <Image src={d.image} alt={d.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{d.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{d.category}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
