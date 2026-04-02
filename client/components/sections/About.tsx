import { FadeIn } from "../animations/FadeIn";
import { SlideUp } from "../animations/SlideUp";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left side - Image */}
          <FadeIn>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop"
                  alt="Luxury nail salon interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
            </div>
          </FadeIn>

          {/* Right side - Text content */}
          <SlideUp>
            <div>
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
                <span className="text-accent font-medium text-sm">Our Story</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Redefining Luxury Nail Care
              </h2>

              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                Founded in 2019, Luxe Nails was born from a vision to elevate the nail
                care experience. We believe that every client deserves a sanctuary of
                relaxation, impeccable artistry, and the highest standards of hygiene.
              </p>

              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Our team of certified nail technicians brings years of expertise and
                international training to every service. We use premium, non-toxic
                products and follow strict sanitization protocols to ensure your safety
                and satisfaction.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Expert Technicians</h4>
                    <p className="text-foreground/60">
                      Internationally trained professionals with 10+ years experience
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Premium Products</h4>
                    <p className="text-foreground/60">
                      Exclusively sourced, non-toxic, and cruelty-free materials
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-accent rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Hygiene First</h4>
                    <p className="text-foreground/60">
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
