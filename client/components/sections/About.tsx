import { FadeIn } from "../animations/FadeIn";
import { SlideUp } from "../animations/SlideUp";

export function About() {
  return (
    <section id="about" className="py-12 md:py-20 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Image */}
          <FadeIn>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/imgs/gallery-1.jpg"
                  alt="Luxury nail salon interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right side - Text content */}
          <SlideUp>
            <div className="text-center md:text-left">
              <div className="mb-4 flex justify-center md:block">
                <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
                  <span className="text-accent font-medium text-sm">Our Story</span>
                </div>
              </div>

              <h2 className="mb-6 text-3xl font-serif font-bold text-primary sm:text-4xl md:text-5xl">
                Redefining Luxury Nail Care
              </h2>

              <p className="mb-6 text-base leading-relaxed text-gold-light sm:text-lg text-left">
                Welcome to SLAYE NAIL BAR, where beauty meets artistry and every detail matters. Our journey began with a simple mission: to empower confidence and self-expression through exceptional nail care in a truly luxurious setting.
              </p>

              <p className="mb-6 text-base leading-relaxed text-gold-light sm:text-lg text-left">
                At SLAYE NAIL BAR, we blend creativity with precision, offering a curated experience that goes beyond the ordinary. Our passionate team is dedicated to making every visit memorable—using only the finest products, the latest techniques, and a commitment to uncompromising hygiene. Discover your signature style and let your nails make a statement with us.
              </p>

              <div className="space-y-4">
                <div className="flex items-start justify-center gap-4 text-left transition-all duration-300 hover:translate-x-2 cursor-pointer md:justify-start">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Expert Technicians</h4>
                    <p className="text-gold-light">
                      Internationally trained professionals with 10+ years experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-center gap-4 text-left transition-all duration-300 hover:translate-x-2 cursor-pointer md:justify-start">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Premium Products</h4>
                    <p className="text-gold-light">
                      Exclusively sourced, non-toxic, and cruelty-free materials
                    </p>
                  </div>
                </div>
                <div className="flex items-start justify-center gap-4 text-left transition-all duration-300 hover:translate-x-2 cursor-pointer md:justify-start">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Hygiene First</h4>
                    <p className="text-gold-light">
                      Hospital-grade sterilization for all tools and equipment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
