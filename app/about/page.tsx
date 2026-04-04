export default function AboutPage() {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-dark mb-6">About TripBuilder</h1>
        <p className="text-lg text-gray-600 mb-8">
          TripBuilder is your ultimate AI-powered travel companion. We believe that planning a vacation should be as exciting as the trip itself, not a stressful chore.
        </p>
        <div className="bg-white p-8 rounded-3xl shadow-sm text-left">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To empower travelers to explore the world with personalized, meticulously crafted itineraries generated in minutes. By combining cutting-edge artificial intelligence with vast travel data, we provide recommendations that perfectly match your vibe, budget, and schedule.
          </p>
          <h2 className="text-2xl font-semibold mb-4">How We Built This</h2>
          <p className="text-gray-600">
            This platform uses Next.js 14 App Router, beautifully animated with Framer Motion, and styled with Tailwind CSS. We aggregate data from top-tier travel and weather APIs to bring you accurate and inspiring travel plans.
          </p>
        </div>
      </div>
    </div>
  );
}
