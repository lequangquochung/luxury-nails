import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { Gallery } from "../components/sections/Gallery";
import { Contact } from "../components/sections/Contact";
import { FacilityGallery } from "../components/sections/FacilityGallery";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <FacilityGallery />
      <Contact />
    </div>
  );
}
