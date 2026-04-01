import { FadeIn } from "../animations/FadeIn";
import { SlideUp } from "../animations/SlideUp";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left side - Image placeholder */}
          <FadeIn>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted via-background to-accent/10 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center opacity-40">
                    <svg
                      className="w-24 h-24 mx-auto mb-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                    <p className="text-sm">Premium Nail Studio</p>
                  </div>
                </div>
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
