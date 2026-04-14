import "swiper/css";
import "swiper/css/navigation";
import { SlideUp } from "../animations/SlideUp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


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
                <div className="w-full max-w-3xl mx-auto">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={32}
                        slidesPerView={1}
                        className="rounded-2xl bg-transparent relative"
                        style={{}}
                    >
                        {FACILITY_IMAGES.map((src, idx) => (
                            <SwiperSlide key={src}>
                                <div className="flex items-center justify-center min-h-[320px] md:min-h-[420px] rounded-2xl">
                                    <img
                                        src={src}
                                        alt={`Facility ${idx + 1}`}
                                        className="max-h-[4300px] w-full max-w-full rounded-xl object-contain mx-auto"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                        {/* Custom navigation buttons styling */}
                        <style>{`
                            .swiper-button-next, .swiper-button-prev {
                                color: #FFD700;
                                width: 44px;
                                height: 44px;
                                top: 50%;
                                transform: translateY(-50%);
                            }
                            .swiper-button-prev {
                                left: 0;
                            }
                            .swiper-button-next {
                                right: 0;
                            }
                            .swiper-button-next:after, .swiper-button-prev:after {
                                font-size: 1.25rem;
                                font-weight: bold;
                            }
                        `}</style>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
