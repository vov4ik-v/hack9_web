"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Keyboard, Mousewheel, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { User } from "lucide-react";

// Імпорт шрифту
import { press_start } from "@/app/fonts";

export default function Feedbacks() {
    const feedbacks = [
        {
            teamName: "kiBEERмаслята",
            quote: "Дуже класно! Це мій перший захід такого формату і дуже шкодую, що познайомився з ним аж на 5 курсі",
            author: "Григорій Кутянський",
        },
        {
            teamName: "Virus",
            quote: "Багато крутих людей, з якими можна познайомитись; чудова робота організаторів та їх підтримка; також сподобалось місце проведення",
            author: "Назар Цап",
        },
        {
            teamName: "INFERNO",
            quote: "Дуже крута атмосфера, був радий побувати на такому заході! Все чудово, все дуже круто",
            author: "Солтис Олександр",
        },
        {
            teamName: "Пітончики на Хакатончику",
            quote: "Гарний івент, я познайомився з талановитими людьми, дізнався і вивчив щось нове, та отримав море задоволення",
            author: "Дмитро-Андрій Костельний",
        },
        {
            teamName: "ILoveReact",
            quote: "Це класний досвід!",
            author: "Василь Шпитчук",
        },
    ];

    return (
        <section
            id="feedbacks"
            className="
        relative
        min-h-[50vh]
        w-full
        px-4
        py-10
      "
        >
            <h2
                className={`
          ${press_start.className}
          text-center
          text-3xl
          md:text-5xl
          text-white
          mb-10
        `}
            >
                Відгуки
            </h2>

            <Swiper
                className="w-full mx-auto h-auto relative"
                autoHeight={true}
                slidesPerView={1}
                resizeObserver={true}
                centerInsufficientSlides={true}
                initialSlide={0}
                autoplay={{ delay: 3000 }}
                mousewheel={false}
                keyboard={{ enabled: true }}
                grabCursor={true}
                speed={500}
                loop={true}
                centeredSlides={true}
                watchSlidesProgress={true}
                modules={[EffectCoverflow, Autoplay, Keyboard, Mousewheel]}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 0,
                    depth: 100,
                    scale: 0.5,
                    modifier: 1,
                    slideShadows: false,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1600: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
            >
                {feedbacks.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div
                            className="

      bg-white
      rounded-[50px]
      p-8
      px-12
      flex
      flex-col
      gap-4
      text-black
      max-w-full
      h-[300px]
      md:h-[320px]
      shadow-lg
    "
                        >
                            <h3
                                className={`
                  ${press_start.className}
                  text-sm
                  md:text-lg
                  font-bold
                  text-[#408989]
                `}
                            >
                                Команда {item.teamName}
                            </h3>

                            <p className="leading-relaxed text-sm md:text-base italic text-start">
                                “{item.quote}”
                            </p>

                            <div className="mt-auto flex items-center gap-2">
                                <img
                                    src="/feedbacks/icon.svg"
                                    alt="author icon"
                                    className="w-12 h-12"
                                />
                                <span className="font-semibold text-sm md:text-base">
                                    {item.author}
                                </span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
