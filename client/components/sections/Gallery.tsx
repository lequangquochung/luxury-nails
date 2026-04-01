import { SlideUp } from "../animations/SlideUp";
import { FadeIn } from "../animations/FadeIn";
import { ImageZoom } from "../animations/ImageZoom";

export function Gallery() {
  const galleryItems = [
    { id: 1, title: "Classic Red", category: "Manicure" },
    { id: 2, title: "Ombre Art", category: "Nail Art" },
    { id: 3, title: "Glitter Accent", category: "Design" },
    { id: 4, title: "French Polish", category: "Classic" },
    { id: 5, title: "Marble Effect", category: "Art" },
    { id: 6, title: "Floral Design", category: "Art" },
    { id: 7, title: "Gold Accent", category: "Luxury" },
    { id: 8, title: "Minimalist", category: "Modern" },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SlideUp>
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-medium text-sm">Gallery</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Our Latest Creations
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Explore our portfolio of stunning nail designs and artistry. Each piece is
              a testament to our commitment to beauty and precision.
            </p>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <FadeIn key={item.id} delay={index * 0.05}>
              <ImageZoom className="h-64 md:h-72 rounded-xl cursor-pointer group">
                <div className="w-full h-full bg-gradient-to-br from-muted to-accent/20 flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder with elegant design */}
                  <div className="text-center z-10">
                    <div className="w-16 h-16 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="font-serif font-semibold text-primary text-lg mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground/50">{item.category}</p>
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300" />
                </div>
              </ImageZoom>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
