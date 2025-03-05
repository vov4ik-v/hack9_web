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

import { press_start } from "@/app/fonts";

export default function Gallery() {
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
                    slidesPerView={1}
                    resizeObserver={true}
                    centerInsufficientSlides={true}
                    initialSlide={0}
                    autoplay={false}
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
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        780: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        1440: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {/*
            Приклад з двома слайдами.
            1) Перший слайд з однією “мозаїкою” (Grid).
            2) Другий слайд з іншою або такою ж схемою.
          */}
                    <SwiperSlide>
                        <div className="w-full h-auto p-4">
                            {/*
                Контейнер сітки: 4 стовпчики x 3 рядки, це лише приклад.
                Висоту можна змінити з [100vh] на щось більше/менше або зробити auto.
              */}
                            <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full h-[50vh] relative">
                                {/* Фото №1: "усю висоту, пів ширини" → col-span-2, row-span-3 */}
                                <div className="col-span-2 row-span-3">
                                    <img
                                        src="/Gallery1.png"
                                        alt="photo1"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Фото №2: "угорі праворуч" → col-span-2, row-span-1 */}
                                <div className="col-span-2 row-span-1">
                                    <img
                                        src="/Gallery2.png"
                                        alt="photo2"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Фото №3: "у середині (праворуч)?" → col-span-2, row-span-2 */}
                                <div className="col-span-2 row-span-2">
                                    <img
                                        src="/Gallery3.png"
                                        alt="photo3"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Можете продовжувати з №4, №5 тощо,
                    змінюючи col-span / row-span за потреби */}
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="w-full h-auto p-4">
                            {/*
                Другий слайд: інша (або така ж) схема зображень,
                можна використати інші файли/розкладку.
              */}
                            <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full h-[50vh] relative">
                                <div className="col-span-2 row-span-2">
                                    <img
                                        src="/Gallery4.png"
                                        alt="photo4"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="col-span-2 row-span-1">
                                    <img
                                        src="/Gallery5.png"
                                        alt="photo5"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="col-span-4 row-span-1">
                                    <img
                                        src="/Gallery1.png"
                                        alt="photo6"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Додавайте решту зображень, як вам треба */}
                            </div>
                        </div>
                    </SwiperSlide>

                    {/*
            Якщо потрібні ще слайди – просто дублюєте <SwiperSlide>...</SwiperSlide>
            та змінюєте розкладку/зображення.
          */}
                </Swiper>
            </div>
        </section>
    );
}
