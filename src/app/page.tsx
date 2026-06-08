import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import ServicesSection from "@/components/feature-sections";
export default function Home() { 
  return ( 
    <main className="min-h-screen bg-black">
      <HeroGeometric 
        badge="PurpleLabs Studio"
        title1="Trasformiamo ogni idea in "
        title2="Realtà" 
      />
      <ServicesSection />
    </main>
  );
}