import { Hero } from "@/components/home/Hero";
import BusinessGrid from "@/components/home/BusinessGrid";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import InfoSection from "@/components/home/InfoSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <BusinessGrid />
      <FeaturedProjects />
      <InfoSection />
    </div>
  );
}
