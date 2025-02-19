"use client";

import {press_start} from "@/app/fonts";
import {useEffect, useState} from "react";

type MenuItem = {
    name: string;
    href: string;
};

const navigation: MenuItem[] = [
    {
        name: "Про нас",
        href: "#about",
    },
    {
        name: "Пропозиції",
        href: "#offers",
    },
    {
        name: "Контакти",
        href: "#contacts",
    },
];

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState({
        months: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date("2025-04-26T00:00:00").getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance <= 0) {
                clearInterval(timer);
                setTimeLeft({
                    months: 0,
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                });
                return;
            }

            // Приблизно рахуємо "місяці" як 30 днів
            const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));
            const months = Math.floor(totalDays / 30);
            const days = totalDays % 30;
            const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((distance / (1000 * 60)) % 60);
            const seconds = Math.floor((distance / 1000) % 60);

            setTimeLeft({months, days, hours, minutes, seconds});
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            className="
        relative min-h-screen w-full
        bg-gradient-to-r from-black to-[#1d5d1f]
        flex flex-col
        overflow-hidden
      "
        >

            <div className="relative z-10 flex flex-col  items-center justify-center flex-1 px-4">
                <h1
                    className={`
            ${press_start.className}
            text-white text-4xl md:text-6xl mb-10 text-center
          `}
                >
                    BEST::HACKath0n
                </h1>

                <div className="flex gap-16 text-white text-lg md:text-2xl mb-10">
                    <div className="flex flex-col items-center">
            <span className={`${press_start.className} text-[#90FF77] text-3xl md:text-4xl font-bold pb-2.5`}>
              {String(timeLeft.months).padStart(2, "0")}
            </span>
                        <span className="text-sm md:text-base ">mths</span>
                    </div>
                    <div className="flex flex-col items-center">
            <span className={`${press_start.className} text-[#90FF77] text-3xl md:text-4xl font-bold pb-2.5`}>
              {String(timeLeft.days).padStart(2, "0")}
            </span>
                        <span className="text-sm md:text-base ">days</span>
                    </div>
                    <div className="flex flex-col items-center">
            <span className={`${press_start.className} text-[#90FF77] text-3xl md:text-4xl font-bold pb-2.5`}>
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
                        <span className="text-sm md:text-base ">hrs</span>
                    </div>
                    <div className="flex flex-col items-center">
            <span className={`${press_start.className} text-[#90FF77] text-3xl md:text-4xl font-bold pb-2.5`}>
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
                        <span className="text-sm md:text-base ">mins</span>
                    </div>
                    <div className="flex flex-col items-center">
            <span className={`${press_start.className} text-[#90FF77] text-3xl md:text-4xl font-bold pb-2.5`}>
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
                        <span className="text-sm md:text-base ">secs</span>
                    </div>
                </div>

                <button
                    onClick={() => window.open("https://t.me/HACKath0n_2025_bot", "_blank")}
                    className={`
            ${press_start.className}
            text-black bg-[#5AFF36]
            px-8 py-4
            mt-16
            rounded-3xl
            hover:scale-105
            transition-transform
          `}
                >
                    Зареєструватися
                </button>
            </div>
        </section>
    );
}
