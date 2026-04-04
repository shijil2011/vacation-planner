const fs = require('fs');
let code = fs.readFileSync('app/page.tsx', 'utf8');

if (!code.includes('"use client"')) {
  code = '"use client";\n' + code;
}

if (!code.includes('useRouter')) {
  code = code.replace(/import { useState(.*?) } from "react";/, 'import { useState$1 } from "react";\nimport { useRouter } from "next/navigation";');
}

code = code.replace(/export default function Home\(\) {/, 'export default function Home() {\n  const router = useRouter();\n  const [destination, setDestination] = useState("");');

code = code.replace(/placeholder="Where to\?"/g, 'placeholder="Where to?" value={destination} onChange={(e) => setDestination(e.target.value)} onKeyDown={(e) => e.key === "Enter" && router.push(`/plan?destination=${destination}`)}');

code = code.replace(/<button className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary\/90 transition-colors shadow-lg shadow-primary\/25 flex items-center justify-center gap-2">/, '<button onClick={() => router.push(`/plan?destination=${destination}`)} className="w-full sm:w-auto px-8 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 flex items-center justify-center gap-2">');

fs.writeFileSync('app/page.tsx', code);
