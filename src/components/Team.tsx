"use client";

import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow, Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {ChevronLeft, ChevronRight} from "lucide-react";

import {press_start} from "@/app/fonts";

export default function Team() {
    const teamMembers = [
        {name: "Олександра Оленчук", role: "Головний організатор", img: "/Sasha.png"},
        {name: "Володимир Василишин", role: "IT Responsible", img: "/Roman.png"},
        {name: "Інна Сидорук", role: "Design", img: "/Maria.png"},
        {name: "Владислав Довбняк", role: "Corporate Relations", img: "/Illia.png"},
        {name: "Ксенія Олефір", role: "Corporate Relations", img: "/Tetiana.png"},
        {name: "Артемій Філіп", role: "Logist", img: "/Roman.png"},
        {name: "Ірина Федорович", role: "Public Relations", img: "/Vika.png"},
        {name: "Анна Морозова", role: "Human Resources", img: "/Maria.png"},
        {name: "Христина Соджак", role: "Mentor", img: "/Tetiana.png"},
        {name: "Ростислав Мінчак", role: "Mentor", img: "/Rostik.png"},
        {name: "Владислав Братюк", role: "Content Responsible", img: "/Zakhar.png"},
    ];

    return (
        <section id="team" className="relative min-h-screen w-full py-10 px-4 flex flex-col items-center justify-start">
            <h2 className={`${press_start.className} text-white text-3xl md:text-5xl mb-8 text-center`}>
                Наша команда
            </h2>

            <div className="relative w-full max-w-7xl mx-auto">
                <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-12 p-2 bg-transparent" id="prev-slide">
                    <ChevronLeft size={50} className="text-white cursor-pointer"/>
                </button>
                <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-12 p-2 bg-transparent" id="next-slide">
                    <ChevronRight size={50} className="text-white cursor-pointer"/>
                </button>

                <Swiper
                    modules={[EffectCoverflow, Navigation, Pagination]}
                    effect="coverflow"
                    navigation={{
                        nextEl: "#next-slide",
                        prevEl: "#prev-slide",
                    }}
                    pagination={{clickable: true}}
                    centeredSlides={true}
                    slidesPerView={4}
                    loop={true}
                    loopAdditionalSlides={4}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: -70,
                        depth: 150,
                        modifier: 1,
                        slideShadows: false,
                    }}
                    className="max-w-full w-full custom-coverflow"
                >
                    {teamMembers.map((member, idx) => (
                        <SwiperSlide key={idx} className="flex justify-center">
                            <div className="item-container bg-white rounded-[32px] w-[250px] h-[500px] md:w-[350px] md:h-[650px] flex flex-col items-center relative shadow-lg overflow-hidden transition-transform duration-500">
                                <div className="w-full p-6 flex flex-col items-center z-10">
                                    <h4 className={`${press_start.className} text-black text-lg md:text-xl font-bold mb-4 text-center`}>
                                        {member.role}
                                    </h4>
                                    <div className="bg-[#7FFF4F] text-black font-bold px-6 py-2 rounded-full text-base md:text-lg text-center">
                                        {member.name}
                                    </div>
                                </div>

                                <div className="absolute bottom-0 w-full h-3/4 rounded-t-full overflow-hidden">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style>{`
                .swiper-slide:not(.swiper-slide-active) .item-container {
                    filter: brightness(0.5);
                }
            `}</style>
        </section>
    );
}