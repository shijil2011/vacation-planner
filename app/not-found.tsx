import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <h2 className="text-2xl font-bold">404 - Not Found</h2>
      <Link href="/" className="px-4 py-2 bg-primary text-white rounded">Return Home</Link>
    </div>
  );
}
