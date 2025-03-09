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
        {name: "Олександра Оленчук", role: "Main Organizer", img: "/team/sasha.JPG"},
        {name: "Володимир Василишин", role: "IT Responsible", img: "/team/vov4ik.JPG"},
        {name: "Інна Сидорук", role: "Design", img: "/team/inna.JPG"},
        {name: "Владислав Довбняк", role: "Corporate Relations", img: "/team/vlad.JPG"},
        {name: "Ксенія Олефір", role: "Corporate Relations", img: "/team/ksenia.JPG"},
        {name: "Артемій Філіп", role: "Logist", img: "/Roman.png"},
        {name: "Ірина Федорович", role: "Public Relations", img: "/team/ira.JPG"},
        {name: "Анна Морозова", role: "Human Resources", img: "/team/anya.JPG"},
        {name: "Христина Соджак", role: "Mentor", img: "/team/khrystyna.JPG"},
        {name: "Ростислав Мінчак", role: "Mentor", img: "/team/rostyk.JPG"},
        {name: "Владислав Братюк", role: "Content Responsible", img: "/Zakhar.png"},
    ];

    return (
        <section
            id="team"
            className="relative min-h-screen w-full py-10 px-4 flex flex-col items-center justify-start"
        >
            <h2
                className={`${press_start.className} text-white text-3xl md:text-5xl mb-8 text-center`}
            >
                Наша команда
            </h2>

            <div className="relative w-full px-2 md:px-12 mx-auto flex flex-col">
                <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10
    p-2 bg-transparent"
                    id="prev-slide"
                >
                    <ChevronLeft size={50} className="text-white cursor-pointer"/>
                </button>
                <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10
    p-2 bg-transparent"
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
                    pagination={{
                        clickable: true,
                        el: ".team-pagination"
                    }}
                    centeredSlides={true}
                    centeredSlidesBounds={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            loop: true,
                            centerInsufficientSlides: true,
                            coverflowEffect: {
                                rotate: 0,
                                stretch: 0,
                                depth: 0,
                                modifier: 1,
                                slideShadows: false,
                            },
                        },
                        768: {
                            slidesPerView: 3,
                            loop: true,
                            loopAdditionalSlides: 2,
                            coverflowEffect: {
                                rotate: 0,
                                stretch: -70,
                                depth: 150,
                                modifier: 1,
                                slideShadows: false,
                            },
                        },
                        1280: {
                            slidesPerView: 5,
                            loop: true,
                            loopAdditionalSlides: 4,
                            coverflowEffect: {
                                rotate: 0,
                                stretch: -70,
                                depth: 150,
                                modifier: 1,
                                slideShadows: false,
                            },
                        },
                    }}
                    className="max-w-full w-full custom-coverflow mb-8"
                >
                    {teamMembers.map((member, idx) => (
                        <SwiperSlide key={idx} className="flex justify-center">
                            <div
                                className="
    item-container
    bg-white
    rounded-[84px]
    w-[260px] h-[650px]
    md:w-[350px]
    flex flex-col
    items-center
    relative
    shadow-lg
    overflow-hidden
    transition-transform
    duration-500
  "
                            >
                                <div className="w-full p-6 flex flex-col items-center z-10">
                                    <h4
                                        className={`
        ${press_start.className}
        text-black
        text-lg
        md:text-xl
        font-bold
        mb-4
        text-center
        px-4
      `}
                                    >
                                        {member.role}
                                    </h4>
                                    <div
                                        className="bg-[#7FFF4F] text-black font-bold px-6 py-2 rounded-full text-base md:text-lg text-center">
                                        {member.name}
                                    </div>
                                </div>

                                <div className="absolute bottom-0 w-full h-3/4 rounded-t-[120px] overflow-hidden">
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

                <div className="team-pagination w-full flex justify-center mt-4"></div>
            </div>

            <style>{`
                @media (min-width: 768px) {
                    .swiper-slide:not(.swiper-slide-active) .item-container {
                        filter: brightness(0.5);
                    }
                }
                @media (max-width: 767px) {
                    .swiper {
                        display: flex;
                        justify-content: center;
                    }
                    .swiper-slide {
                        display: flex;
                        justify-content: center;
                    }
                    
              
                }
                
                .swiper-pagination-bullet {
                    background-color: white !important;
                    opacity: 0.5;
                    width: 10px;
                    height: 10px;
                    margin: 0 5px;
                }
                
                .swiper-pagination-bullet-active {
                    background-color: white !important;
                    opacity: 1;
                }
                
                .team-pagination {
                    position: static !important;
                    margin-top: 20px;
                }
            `}</style>
        </section>
    );
}
