const fs = require('fs');
let code = fs.readFileSync('app/plan/page.tsx', 'utf8');

if (!code.includes('"use client"')) {
  code = '"use client";\n' + code;
}

if (!code.includes('useRouter')) {
  code = code.replace(/import { useState(.*?) } from "react";/, 'import { useState$1 } from "react";\nimport { useRouter } from "next/navigation";');
}

code = code.replace(/export default function PlanTrip\(\) {/, `export default function PlanTrip() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
`);

code = code.replace(/const handleSubmit = \(e: React\.FormEvent\) => {[\s\S]*?};/, `const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/generate-itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      const tripId = Date.now().toString();
      localStorage.setItem(\`trip_\${tripId}\`, JSON.stringify({ ...data, formData }));
      router.push(\`/trip/\${tripId}\`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };`);

code = code.replace(/<button\s+type="submit"\s+className="w-full py-4 bg-primary text-white rounded-xl font-medium text-lg hover:bg-primary\/90 transition-colors shadow-lg shadow-primary\/25 flex items-center justify-center gap-2"/, `<button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primary text-white rounded-xl font-medium text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 flex items-center justify-center gap-2"`);

fs.writeFileSync('app/plan/page.tsx', code);
