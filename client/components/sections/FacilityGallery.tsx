import { FadeIn } from "../animations/FadeIn";
import { SlideUp } from "../animations/SlideUp";

const FACILITY_IMAGES = [
  "/imgs/img_1.png",
  "/imgs/img_2.png",
  "/imgs/img_3.png",
  "/imgs/img_4.png",
];

export function FacilityGallery() {
  return (
    <section id="facility-gallery" className="py-12 md:py-20 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <SlideUp>
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-medium text-sm">Our Space</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Salon Facilities
            </h2>
            <p className="text-lg text-gold-light max-w-2xl mx-auto">
              Explore our modern, clean, and luxurious salon environment.
            </p>
          </SlideUp>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {FACILITY_IMAGES.map((src, idx) => (
            <FadeIn key={src} delay={idx * 0.1}>
              <div className="rounded-xl overflow-hidden shadow-lg group">
                <img
                  src={src}
                  alt={`Facility ${idx + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
