import { unstable_setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import Contact from '@/components/Contact';

export default function Home({
  params: { locale }
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <div className="relative">
      {/* Hero Section with wave background */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b via-transparent to-transparent from-blue-500/10" />
        <Hero />
      </div>
      
      {/* Services Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r via-transparent from-blue-950/50 to-blue-950/50" />
        <div className="absolute inset-x-0 -top-3 h-3 bg-gradient-to-r from-transparent to-transparent blur-sm via-blue-500/20" />
        <div className="absolute inset-x-0 -top-2 h-px bg-gradient-to-r from-transparent to-transparent via-blue-500/40" />
        <Services />
      </div>

      {/* Features Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r via-transparent from-teal-950/50 to-teal-950/50" />
        <div className="absolute inset-x-0 -top-3 h-3 bg-gradient-to-r from-transparent to-transparent blur-sm via-teal-500/20" />
        <div className="absolute inset-x-0 -top-2 h-px bg-gradient-to-r from-transparent to-transparent via-teal-500/40" />
        <Features />
      </div>

      {/* Contact Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/30 to-blue-950/50" />
        <div className="absolute inset-x-0 -top-3 h-3 bg-gradient-to-r from-transparent to-transparent blur-sm via-blue-500/20" />
        <div className="absolute inset-x-0 -top-2 h-px bg-gradient-to-r from-transparent to-transparent via-blue-500/40" />
        <Contact />
      </div>
    </div>
  );
}
