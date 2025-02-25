"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    EffectCoverflow,
    Keyboard,
    Mousewheel,
    Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { press_start } from "@/app/fonts";

export default function Gallery() {
    const galleryImages = [
        "/Gallery1.png",
        "/Gallery2.png",
        "/Gallery3.png",
        "/Gallery4.png",
        "/Gallery5.png",
        "/Gallery1.png",
        "/Gallery2.png",
        "/Gallery3.png",
        "/Gallery4.png",
    ];

    const shapes = [
        "rounded-tl-[80px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[80px]",
        "rounded-t-[60px]",
        "rounded-bl-[60px] rounded-br-[60px]",
        "rounded-[40px]",
        "rounded-l-[60px]",
        "rounded-r-[60px]",
        "rounded-tl-[60px] rounded-br-[60px]",
        "rounded-tr-[80px] rounded-bl-[80px]",
        "rounded-[60px]",
    ];

    return (
        <section
            id="gallery"
            className="
        min-h-screen
        w-full
        py-20
        relative
      "
        >
            <h2
                className={`
          ${press_start.className}
          text-hack-green
          text-4xl
          lg:text-5xl
          text-center
          mb-10
        `}
            >
                Галерея
            </h2>

            <div className="relative border-t-2 border-b-2 border-hack-green py-5 px-4">
                <Swiper
                    className="w-full flex items-center relative z-10"
                    autoHeight={true}
                    slidesPerView={1}
                    resizeObserver={true}
                    centerInsufficientSlides={true}
                    initialSlide={0}
                    autoplay={{ delay: 2500 }}
                    mousewheel={false}
                    keyboard={{ enabled: true }}
                    grabCursor={true}
                    speed={600}
                    loop={true}
                    centeredSlides={true}
                    watchSlidesProgress={true}
                    modules={[EffectCoverflow, Autoplay, Keyboard, Mousewheel]}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    breakpoints={{
                        550: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        780: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1440: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {galleryImages.map((src, idx) => (
                        <SwiperSlide key={idx}>
                            <div
                                className={`
                  overflow-hidden
                  mx-auto
                  w-[200px]
                  h-[200px]
                  md:w-[240px]
                  md:h-[240px]
                  lg:w-[280px]
                  lg:h-[280px]
                  flex
                  items-center
                  justify-center
                  bg-white/10
                  ${shapes[idx % shapes.length]} /* Заокруглення з масиву */
                `}
                            >
                                <img
                                    src={src}
                                    alt={`gallery-${idx}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
