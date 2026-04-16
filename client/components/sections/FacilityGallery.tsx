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
                        <h2 className="mb-6 text-3xl font-serif font-bold text-primary sm:text-4xl md:text-5xl">
                            Salon Facilities
                        </h2>
                        <p className="mx-auto max-w-2xl text-base text-gold-light sm:text-lg">
                            Explore our modern, clean, and luxurious salon environment.
                        </p>
                    </SlideUp>
                </div>
                <div className="mx-auto w-full max-w-3xl px-2 sm:px-8">
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={16}
                        slidesPerView={1}
                        className="relative rounded-2xl bg-transparent"
                        style={{}}
                    >
                        {FACILITY_IMAGES.map((src, idx) => (
                            <SwiperSlide key={src}>
                                <div className="flex min-h-[240px] items-center justify-center rounded-xl sm:min-h-[320px] md:min-h-[420px]">
                                    <img
                                        src={src}
                                        alt={`Facility ${idx + 1}`}
                                        className="mx-auto max-h-[260px] w-auto max-w-full rounded-xl object-contain sm:max-h-[360px] md:max-h-[450px]"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                        {/* Custom navigation buttons styling */}
                        <style>{`
                            .swiper-button-next, .swiper-button-prev {
                                color: #FFD700;
                                width: 36px;
                                height: 36px;
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
                                font-size: 1rem;
                                font-weight: bold;
                            }
                            @media (min-width: 640px) {
                                .swiper-button-next, .swiper-button-prev {
                                    width: 44px;
                                    height: 44px;
                                }
                                .swiper-button-next:after, .swiper-button-prev:after {
                                    font-size: 1.25rem;
                                }
                            }
                        `}</style>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
