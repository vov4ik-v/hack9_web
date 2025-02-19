"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Імпорт вашого шрифту
import { press_start } from "@/app/fonts";

export default function Team() {
    const teamMembers = [
        { name: "Олександра Оленчук", role: "Головний організатор", img: "/Alexandra.png" },
        { name: "Інна Сидорук",       role: "Дизайнер",            img: "/Ivanka.png" },
        { name: "Роман Фігель",       role: "Контент",            img: "/Roman.png" },
        { name: "Вікторія Бодоряк",   role: "Дизайнер",            img: "/Vika.png" },
        { name: "Юлія Синичак",       role: "IT Responsible",      img: "/Yulia.png" },
        { name: "Олександра Оленчук", role: "Головний організатор", img: "/Alexandra.png" },
        { name: "Інна Сидорук",       role: "Дизайнер",            img: "/Ivanka.png" },
        { name: "Роман Фігель",       role: "Контент",            img: "/Roman.png" },
        { name: "Вікторія Бодоряк",   role: "Дизайнер",            img: "/Vika.png" },
        { name: "Юлія Синичак",       role: "IT Responsible",      img: "/Yulia.png" },
        { name: "Юлія Синичак",       role: "IT Responsible",      img: "/Yulia.png" },
        // продовжуйте свій масив...
    ];

    return (
        <section
            id="team"
            className="
        relative
        min-h-screen
        w-full
        bg-gradient-to-b
        from-black
        to-[#0f3f0f]
        py-10
        px-4
        flex
        flex-col
        items-center
        justify-start
      "
        >
            <h2
                className={`
          ${press_start.className}
          text-white
          text-3xl
          md:text-5xl
          mb-8
          text-center
        `}
            >
                Наша команда
            </h2>

            {/* Контейнер для слайдера */}
            <div className="relative w-full max-w-7xl mx-auto">
                {/* Кнопки-навігація (стрілки) */}
                <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-12 p-2 bg-transparent"
                    id="prev-slide"
                >
                    <ChevronLeft size={50} className="text-white cursor-pointer"/>
                </button>
                <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-12 p-2 bg-transparent"
                    id="next-slide"
                >
                    <ChevronRight size={50} className="text-white cursor-pointer"/>
                </button>

                <Swiper
                    modules={[EffectCoverflow, Navigation, Pagination]}
                    effect="coverflow"
                    navigation={{
                        nextEl: "#next-slide",
                        prevEl: "#prev-slide",
                    }}
                    pagination={{ clickable: true }}
                    centeredSlides={true}
                    slidesPerView={5}
                    loop={true}
                    loopAdditionalSlides={5}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: -100,
                        depth: 200,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    className="max-w-full w-full custom-coverflow"
                >
                    {teamMembers.map((member, idx) => (
                        <SwiperSlide key={idx} className="flex justify-center">
                            <div
                                className="
                  item-container
                  bg-white
                  rounded-[100px]
                  w-[220px]
                  h-[500px]
                  md:w-[300px]
                  md:h-[600px]
                  flex
                  flex-col
                  items-center
                  relative
                  shadow-lg
                  p-4
                  overflow-hidden
                  transition-transform
                  ease-in-out
                  duration-500
                "
                            >
                                {/* Роль зверху */}
                                <h4
                                    className={`
                    ${press_start.className}
                    text-black
                    text-sm
                    md:text-base
                    font-semibold
                    mt-2
                    text-center
                  `}
                                >
                                    {member.role}
                                </h4>

                                {/* Ім’я (зелена плашка) трохи нижче */}
                                <div
                                    className="
                    bg-[#7FFF4F]
                    text-black
                    font-bold
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    md:text-base
                    mt-2
                    text-center
                  "
                                >
                                    {member.name}
                                </div>

                                {/* Фото внизу (велике) */}
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="
                    w-[180px]
                    h-[180px]
                    md:w-[200px]
                    md:h-[200px]
                    object-cover
                    rounded-full
                    mt-auto
                    mb-4
                  "
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Додаткові стилі для затемнення неактивних слайдів */}
            <style>{`
    
        .swiper-slide:not(.swiper-slide-active) .item-container {
          filter: brightness(0.5);
        }

  
      `}</style>
        </section>
    );
}
