import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto space-y-12">
      <section className="glass p-12 rounded-3xl text-center bg-gradient-to-r from-blue-50 to-purple-50">
        <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-6">Our Mission</h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-700">To make travel planning effortless, beautiful, and completely personalized.</p>
      </section>
      
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Trips Planned", value: "10K+" },
          { label: "Happy Travelers", value: "25K+" },
          { label: "Destinations", value: "150+" },
          { label: "Reviews", value: "4.9/5" }
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-2xl text-center">
            <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
            <div className="text-sm text-gray-600 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </section>
      
      <section className="text-center py-12">
        <Link href="/plan" className="px-8 py-4 bg-primary text-white rounded-xl font-medium text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
          Start Planning Now
        </Link>
      </section>
    </div>
  );
}
