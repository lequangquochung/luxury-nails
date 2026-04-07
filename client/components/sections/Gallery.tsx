import { SlideUp } from "../animations/SlideUp";
import { FadeIn } from "../animations/FadeIn";
import { ImageZoom } from "../animations/ImageZoom";

export function Gallery() {
  const galleryItems = [
    { id: 1, title: "Classic Red", category: "Manicure", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop" },
    { id: 2, title: "Ombre Art", category: "Nail Art", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop&crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjcyNDAwMDAw" },
    { id: 3, title: "Glitter Accent", category: "Design", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop" },
    { id: 4, title: "French Polish", category: "Classic", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop" },
    { id: 5, title: "Marble Effect", category: "Art", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop" },
    { id: 6, title: "Floral Design", category: "Art", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop" },
    { id: 7, title: "Gold Accent", category: "Luxury", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop" },
    { id: 8, title: "Minimalist", category: "Modern", image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&h=500&fit=crop" },
  ];

  return (
    <section id="gallery" className="py-12 md:py-20 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
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
              <ImageZoom className="h-64 md:h-72 rounded-xl cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-full h-full relative overflow-hidden bg-muted">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="font-serif font-semibold text-white text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/80">{item.category}</p>
                    </div>
                  </div>
                </div>
              </ImageZoom>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
