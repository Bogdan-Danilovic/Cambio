import type { Metadata, Viewport } from 'next';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

const spaceGrotesk = Space_Grotesk({ variable: '--font-sans', subsets: ['latin', 'latin-ext'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Cambio — Kartaška igra pamćenja',
  description: 'Kartaška igra za 2–4 igrača. Skupi što manje bodova i pozovi Cambio!',
  appleWebApp: { capable: true, statusBarStyle: 'black-translucent', title: 'Cambio' },
};

export const viewport: Viewport = {
  themeColor: '#10b981',
  width: 'device-width', initialScale: 1, maximumScale: 1,
  userScalable: false, viewportFit: 'cover',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sr" className={`h-full antialiased ${spaceGrotesk.variable} font-sans`}>
      <body className="min-h-full flex flex-col font-sans selection:bg-emerald-500/30"
        style={{ background: 'var(--bg-base)', color: 'var(--text-primary)' }}>
        {children}
        <Toaster position="top-center" richColors theme="dark" />
      </body>
    </html>
  );
}
