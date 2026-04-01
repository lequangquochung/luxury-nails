import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { Gallery } from "../components/sections/Gallery";
import { Testimonials } from "../components/sections/Testimonials";
import { Contact } from "../components/sections/Contact";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  );
}
