'use client';
import { useRouter } from 'next/navigation';

export default function Error({ error }: { error: Error }) {
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080b14]">
      <div className="text-center">
        <p className="text-white/50 mb-4">{error.message}</p>
        <button onClick={() => router.push('/')} className="text-emerald-400 underline text-sm">Nazad na početak</button>
      </div>
    </div>
  );
}
