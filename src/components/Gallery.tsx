"use client";

import {useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {
    EffectCoverflow,
    Keyboard,
    Mousewheel,
    Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import {press_start} from "@/app/fonts";

export default function Gallery() {
    const galleryImages = [
        "/gallery/gallery1.jpeg",
        "/gallery/gallery2.jpeg",
        "/gallery/gallery3.jpeg",
        "/gallery/gallery4.jpeg",
        "/gallery/gallery5.jpeg",
        "/gallery/gallery6.jpeg",
        "/gallery/gallery7.jpeg",
        "/gallery/gallery8.jpeg",
        "/gallery/gallery9.jpeg",
        "/gallery/gallery10.jpeg",
    ];

    return (
        <section
            id="gallery"
            className="
        min-h-[50vh]
        w-full
        py-20
        relative
      "
        >
            <h2
                className={`
          ${press_start.className}
          text-4xl
          lg:text-5xl
          text-center
          mb-10
        `}
            >
                Галерея
            </h2>

            <div className="relative py-5 px-4">
                <Swiper
                    className="w-full flex items-center relative z-10"
                    autoHeight={true}
                    slidesPerView={1}
                    resizeObserver={true}
                    centerInsufficientSlides={true}
                    initialSlide={0}
                    autoplay={{delay: 2000}}
                    mousewheel={false}
                    keyboard={{enabled: true}}
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
                            spaceBetween: 10,
                        },
                        780: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1440: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div
                            className={`
      overflow-hidden
      mx-auto
      rounded-3xl
      w-[280px]
      h-[280px]
      md:w-[320px]
      md:h-[320px]
      lg:w-[320px]
      lg:h-[380px]
      xl:w-[380px]
      xl:h-[420px]
      grid
      grid-cols-2
      gap-2
    `}
                        >
                            <img
                                src={galleryImages[8]}
                                alt="gallery-0"
                                className="w-full h-full object-cover"
                            />
                            <img
                                src={galleryImages[9]}
                                alt="gallery-1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div
                            className={`
                  overflow-hidden
                  mx-auto
                  rounded-3xl
                  w-[280px]
                  h-[280px]
                  md:w-[320px]
                  md:h-[320px]
                  lg:w-[320px]
                  lg:h-[380px]
                  xl:w-[380px]
                  xl:h-[420px]
                  flex
                  items-center
                  justify-center
                  
                `}
                        >
                            <img
                                src={galleryImages[0]}
                                alt={`gallery-${0}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="
      mx-auto
      w-[280px]
      h-[280px]
      md:w-[320px]
      md:h-[320px]
      lg:w-[320px]
      lg:h-[380px]
      xl:w-[380px]
      xl:h-[420px]
      grid
      grid-rows-2
      grid-cols-2
      gap-3
      overflow-hidden
    "
                        >
                            {/* Верхнє зображення на 2 колонки */}
                            <div className="row-span-1 rounded-3xl col-span-2">
                                <img
                                    src={galleryImages[1]}
                                    alt="gallery-1"
                                    className="w-full h-full rounded-3xl object-cover"
                                />
                            </div>

                            {/* Ліва картинка внизу */}
                            <div className="row-span-1 col-span-1">
                                <img
                                    src={galleryImages[2]}
                                    alt="gallery-2"
                                    className="w-full h-full rounded-3xl object-cover"
                                />
                            </div>

                            {/* Права картинка внизу */}
                            <div className="row-span-1 col-span-1">
                                <img
                                    src={galleryImages[3]}
                                    alt="gallery-3"
                                    className="w-full h-full rounded-3xl object-cover"
                                />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div
                            className={`
                  overflow-hidden
                  mx-auto
                  w-[280px]
                  h-[280px]
                  md:w-[320px]
                  md:h-[320px]
                 lg:w-[320px]
                  lg:h-[380px]
                  xl:w-[380px]
                  xl:h-[420px]
                  flex
                  items-center
                  justify-center
                  rounded-3xl
                `}
                        >
                            <img
                                src={galleryImages[4]}
                                alt={`gallery-${2}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className="
      mx-auto
      w-[280px]
      h-[280px]
      md:w-[320px]
      md:h-[320px]
      lg:w-[320px]
      lg:h-[380px]
      xl:w-[380px]
      xl:h-[420px]
      grid
      grid-rows-2
      grid-cols-2
      gap-3
      overflow-hidden
    "
                        >


                            {/* Ліва картинка внизу */}
                            <div className="row-span-1 col-span-1">
                                <img
                                    src={galleryImages[5]}
                                    alt="gallery-2"
                                    className="w-full h-full rounded-3xl object-cover"
                                />
                            </div>

                            {/* Права картинка внизу */}
                            <div className="row-span-1 col-span-1">
                                <img
                                    src={galleryImages[6]}
                                    alt="gallery-3"
                                    className="w-full h-full rounded-3xl object-cover"
                                />
                            </div>

                            {/* Верхнє зображення на 2 колонки */}
                            <div className="row-span-1 rounded-3xl col-span-2">
                                <img
                                    src={galleryImages[7]}
                                    alt="gallery-1"
                                    className="w-full h-full rounded-3xl object-cover"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div
                            className={`
                  overflow-hidden
                  mx-auto
                  rounded-3xl
                  w-[280px]
                  h-[280px]
                  md:w-[320px]
                  md:h-[320px]
                  lg:w-[320px]
                  lg:h-[380px]
                  xl:w-[380px]
                  xl:h-[420px]
                  flex
                  items-center
                  justify-center
                  
                `}
                        >
                            <img
                                src={galleryImages[0]}
                                alt={`gallery-${0}`}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
