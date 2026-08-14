import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProductSection } from '@/components/sections/ProductSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { StorySection } from '@/components/sections/StorySection';
import { StatsSection } from '@/components/sections/StatsSection';
import { AppSection } from '@/components/sections/AppSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <ProductSection />
        <HowItWorksSection />
        <StorySection />
        <StatsSection />
        <AppSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
