"use client";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <h2 className="text-xl text-red-500">Something went wrong!</h2>
      <button onClick={() => reset()} className="px-4 py-2 bg-primary text-white rounded">Try again</button>
    </div>
  );
}
