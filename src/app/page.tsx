import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import ServicesSection from "@/components/feature-sections";
import WorkProcess from "@/components/WorkProcess";
import PartnersSection from "@/components/Partners";
import FinalCTA from "@/components/FinalCTA";
export default function Home() { 
  return ( 
    <main className="min-h-screen bg-black">
      <HeroGeometric 
        badge="PurpleLabs Studio"
        title1="Trasformiamo ogni idea in "
        title2="Realtà" 
      />
      <ServicesSection />
      <WorkProcess />
      <PartnersSection />
      <FinalCTA />
    </main>
  );
}