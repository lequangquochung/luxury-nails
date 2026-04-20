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
    {
      id: 1,
      title: "Classic Red",
      category: "Manicure",
      image: "/imgs/gallery-1.jpg",
    },
    {
      id: 2,
      title: "Ombre Art",
      category: "Nail Art",
      image: "/imgs/gallery-2.jpg",
    },
    {
      id: 3,
      title: "Glitter Accent",
      category: "Design",
      image: "/imgs/gallery-3.jpg",
    },
    {
      id: 4,
      title: "French Polish",
      category: "Classic",
      image: "/imgs/gallery-4.jpg",
    },
    {
      id: 5,
      title: "Marble Effect",
      category: "Art",
      image: "/imgs/gallery-5.jpg",
    },
    {
      id: 6,
      title: "Floral Design",
      category: "Art",
      image: "/imgs/gallery-6.jpg",
    },
    {
      id: 7,
      title: "Gold Accent",
      category: "Luxury",
      image: "/imgs/gallery-7.jpg",
    },
    {
      id: 8,
      title: "Minimalist",
      category: "Modern",
      image: "/imgs/gallery-8.jpg",
    },
  ];

  const handleOpenChange = (v: boolean) => {
    setOpen(v);
    if (!v) {
      setSelectedImg(null);
    }
  };

  return (
    <section
      id="gallery"
      className="py-12 md:py-20 bg-background px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <SlideUp>
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-medium text-sm">Gallery</span>
            </div>
            <h2 className="mb-6 text-3xl font-serif font-bold text-primary sm:text-4xl md:text-5xl">
              Our Latest Creations
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gold-light sm:text-lg">
              Explore our portfolio of stunning nail designs and artistry. Each
              piece is a testament to our commitment to beauty and precision.
            </p>
          </SlideUp>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4 animation-stagger">
          {galleryItems.map((item, index) => (
            <ScaleIn key={item.id} delay={index * 0.12} className="h-full">
              <ImageZoom className="aspect-square h-full w-full overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div
                  className="relative h-full w-full overflow-hidden bg-muted"
                  onClick={() => {
                    setSelectedImg(item.image);
                    setOpen(true);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out will-change-transform group-hover:scale-110"
                  />
                </div>
              </ImageZoom>
            </ScaleIn>
          ))}
        </div>

        {/* Popup xem ảnh lớn với react-zoom-pan-pinch */}
        <Dialog open={open} onOpenChange={handleOpenChange}>
          <DialogOverlay />
          <DialogContent className="flex min-h-[50vh] w-[calc(100vw-1rem)] max-w-3xl flex-col items-center overflow-hidden rounded-lg bg-black/95 p-0 shadow-2xl sm:min-h-[60vh] sm:w-full md:rounded-2xl">
            {selectedImg && (
              <TransformWrapper
                initialScale={1}
                minScale={0.5}
                maxScale={5}
                wheel={{ disabled: true }}
                doubleClick={{ disabled: true }}
              >
                {({ zoomIn, zoomOut, resetTransform }) => (
                  <>
                    <div className="z-20 flex w-full flex-wrap items-center justify-between gap-2 bg-black/70 px-2 py-2 md:bg-transparent">
                      <div className="flex flex-wrap gap-2 md:gap-3">
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
                      </div>
                      <DialogClose className="bg-white/10 text-white px-4 py-2 rounded-full hover:bg-white/20 text-lg md:text-base">
                        ×
                      </DialogClose>
                    </div>
                    <div className="relative flex h-[52vh] w-full flex-1 items-center justify-center bg-black select-none sm:h-[60vh]">
                      <TransformComponent>
                        <img
                          src={selectedImg}
                          alt="Zoomed"
                          draggable={false}
                          className="mx-auto max-h-[48vh] w-auto max-w-full rounded-md border border-white/10 shadow-lg sm:max-h-[56vh] md:max-h-[60vh]"
                          style={{
                            userSelect: "none",
                            pointerEvents: "auto",
                            display: "block",
                            margin: "0 auto",
                            background: "#222",
                          }}
                        />
                      </TransformComponent>
                    </div>
                  </>
                )}
              </TransformWrapper>
            )}
            <div className="w-full bg-black/60 px-2 py-2 text-center text-[11px] text-white opacity-70 md:bg-transparent md:text-xs">
              Use two fingers or drag to move the image. Use the + - buttons or
              pinch/zoom to scale in and out.
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
