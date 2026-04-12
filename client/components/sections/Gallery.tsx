import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { SlideUp } from "../animations/SlideUp";
import { FadeIn } from "../animations/FadeIn";
import { ScaleIn } from "../animations/ScaleIn";
import { ImageZoom } from "../animations/ImageZoom";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogClose,
} from "../ui/dialog";

export function Gallery() {
  const [open, setOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const galleryItems = [
    { id: 1, title: "Classic Red", category: "Manicure", image: "/imgs/gallery-1.jpg" },
    { id: 2, title: "Ombre Art", category: "Nail Art", image: "/imgs/gallery-2.jpg" },
    { id: 3, title: "Glitter Accent", category: "Design", image: "/imgs/gallery-3.jpg" },
    { id: 4, title: "French Polish", category: "Classic", image: "/imgs/gallery-4.jpg" },
    { id: 5, title: "Marble Effect", category: "Art", image: "/imgs/gallery-5.jpg" },
    { id: 6, title: "Floral Design", category: "Art", image: "/imgs/gallery-6.jpg" },
    { id: 7, title: "Gold Accent", category: "Luxury", image: "/imgs/gallery-7.jpg" },
    { id: 8, title: "Minimalist", category: "Modern", image: "/imgs/gallery-8.jpg" },
  ];

  // Reset khi đóng
  const handleOpenChange = (v: boolean) => {
    setOpen(v);
    if (!v) {
      setSelectedImg(null);
    }
  };

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
            <p className="text-lg text-gold-light max-w-2xl mx-auto">
              Explore our portfolio of stunning nail designs and artistry. Each piece is
              a testament to our commitment to beauty and precision.
            </p>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animation-stagger">
          {galleryItems.map((item, index) => (
            <ScaleIn key={item.id} delay={index * 0.12}>
              <ImageZoom
                className="h-64 md:h-72 rounded-xl cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                <div
                  className="w-full h-full relative overflow-hidden bg-muted"
                  onClick={() => {
                    setSelectedImg(item.image);
                    setOpen(true);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-125"
                  />
                </div>
              </ImageZoom>
            </ScaleIn>
          ))}
        </div>

        {/* Popup xem ảnh lớn với react-zoom-pan-pinch */}
        <Dialog open={open} onOpenChange={handleOpenChange}>
          <DialogOverlay />
          <DialogContent className="max-w-3xl w-full flex flex-col items-center bg-black/95 p-0 rounded-lg md:rounded-2xl shadow-2xl overflow-hidden min-h-[60vh] md:min-h-[60vh]">
            <div className="flex justify-between items-center w-full px-2 py-2 gap-2 bg-black/70 md:bg-transparent z-20">
              <div className="flex gap-2 md:gap-3">
                {selectedImg && (
                  <TransformWrapper
                    initialScale={1}
                    minScale={0.5}
                    maxScale={5}
                    wheel={{ step: 0.15 }}
                    doubleClick={{ disabled: true }}
                  >
                    {({ zoomIn, zoomOut, resetTransform }) => (
                      <>
                        <button
                          className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 text-lg md:text-base"
                          onClick={() => zoomIn()}
                          aria-label="Zoom in"
                        >
                          +
                        </button>
                        <button
                          className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 text-lg md:text-base"
                          onClick={() => zoomOut()}
                          aria-label="Zoom out"
                        >
                          -
                        </button>
                        <button
                          className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 text-sm md:text-xs"
                          onClick={() => resetTransform()}
                          aria-label="Reset"
                        >
                          Reset
                        </button>
                      </>
                    )}
                  </TransformWrapper>
                )}
              </div>
              <DialogClose className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 text-lg md:text-base">×</DialogClose>
            </div>
            {selectedImg && (
              <div className="flex-1 flex items-center justify-center w-full h-[60vh] md:h-[60vh] select-none relative bg-black">
                <TransformWrapper
                  initialScale={1}
                  minScale={0.5}
                  maxScale={5}
                  wheel={{ step: 0.15 }}
                  doubleClick={{ disabled: true }}
                >
                  {({ zoomIn, zoomOut, resetTransform }) => (
                    <TransformComponent>
                      <img
                        src={selectedImg}
                        alt="Zoomed"
                        draggable={false}
                        className="max-h-[55vh] md:max-h-[60vh] w-auto max-w-full mx-auto rounded-md shadow-lg border border-white/10"
                        style={{
                          userSelect: 'none',
                          pointerEvents: 'auto',
                          display: 'block',
                          margin: '0 auto',
                          background: '#222',
                        }}
                      />
                    </TransformComponent>
                  )}
                </TransformWrapper>
              </div>
            )}
            <div className="text-white text-xs py-2 opacity-70 text-center w-full bg-black/60 md:bg-transparent px-2">
              Use two fingers or drag to move the image. Use the + - buttons or pinch/zoom to scale in and out.
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
