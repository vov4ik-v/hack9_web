"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
    EffectCoverflow,
    Keyboard,
    Mousewheel,
    Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import Image from "next/image";
import { press_start } from "@/app/fonts";

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
        "/gallery/gallery11.jpeg",
    ];

    return (
        <section id="gallery" className="min-h-[50vh] w-full py-20 relative">
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
                    initialSlide={1}
                    autoplay={{ delay: 2000 }}
                    mousewheel={false}
                    keyboard={{ enabled: true }}
                    grabCursor={true}
                    speed={500}
                    loop={true}
                    centeredSlides={true}
                    watchSlidesProgress={true}
                    modules={[EffectCoverflow, Autoplay, Keyboard, Mousewheel]}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    spaceBetween={20} // відступ залишається сталим
                    breakpoints={{
                        550: {
                            slidesPerView: 2,
                        },
                        890: {
                            slidesPerView: 3,
                        },
                        1260: {
                            slidesPerView: 4,
                        },
                        1800: {
                            slidesPerView: 6,
                        },
                    }}
                >
                    {/* Приклад слайда з комбінацією зображень */}
                    <SwiperSlide>
                        <div className="overflow-hidden mx-auto rounded-3xl w-full aspect-square grid grid-cols-2 gap-2">
                            <div className="relative rounded-3xl w-full h-full">
                                <Image
                                    src={galleryImages[8]}
                                    alt="gallery-0"
                                    fill
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                            <div className="relative rounded-3xl w-full h-full">
                                <Image
                                    src={galleryImages[9]}
                                    alt="gallery-1"
                                    fill
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Приклад слайда з одним зображенням */}
                    <SwiperSlide>
                        <div className="overflow-hidden mx-auto rounded-3xl w-full aspect-square flex items-center justify-center relative">
                            <Image
                                src={galleryImages[0]}
                                alt="gallery-0"
                                fill
                                className="object-cover rounded-3xl"
                            />
                        </div>
                    </SwiperSlide>

                    {/* Інші слайди – за аналогією */}
                    <SwiperSlide>
                        <div className="mx-auto w-full aspect-square grid grid-rows-2 grid-cols-2 gap-3 overflow-hidden">
                            {/* Верхнє зображення на 2 колонки */}
                            <div className="relative row-span-1 col-span-2 rounded-3xl">
                                <Image
                                    src={galleryImages[1]}
                                    alt="gallery-1"
                                    fill
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                            {/* Ліва картинка внизу */}
                            <div className="relative rounded-3xl col-span-1">
                                <Image
                                    src={galleryImages[2]}
                                    alt="gallery-2"
                                    fill
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                            {/* Права картинка внизу */}
                            <div className="relative rounded-3xl col-span-1">
                                <Image
                                    src={galleryImages[3]}
                                    alt="gallery-3"
                                    fill
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="overflow-hidden mx-auto rounded-3xl w-full aspect-square flex items-center justify-center relative">
                            <Image
                                src={galleryImages[4]}
                                alt="gallery-4"
                                fill
                                className="object-cover rounded-3xl"
                                loading="lazy"
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="mx-auto w-full aspect-square grid grid-rows-2 grid-cols-2 gap-3 overflow-hidden">
                            {/* Ліва картинка внизу */}
                            <div className="relative rounded-3xl col-span-1">
                                <Image
                                    src={galleryImages[5]}
                                    alt="gallery-5"
                                    fill
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                            {/* Права картинка внизу */}
                            <div className="relative rounded-3xl col-span-1">
                                <Image
                                    src={galleryImages[6]}
                                    alt="gallery-6"
                                    fill
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                            {/* Верхнє зображення на 2 колонки */}
                            <div className="relative col-span-2 rounded-3xl">
                                <Image
                                    src={galleryImages[7]}
                                    alt="gallery-7"
                                    fill
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="overflow-hidden mx-auto rounded-3xl w-full aspect-square flex items-center justify-center relative">
                            <Image
                                src={galleryImages[10]}
                                alt="gallery-10"
                                fill
                                className="object-cover rounded-3xl"
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}
