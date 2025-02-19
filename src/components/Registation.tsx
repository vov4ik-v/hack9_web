"use client";
import { press_start } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import { Smile, TrendingUp, Lightbulb } from "lucide-react";


export default function Registration() {
    const redirectToSite = () => {
        window.open("https://t.me/HACKath0n_2025_bot", "_blank");
    };

    return (
        <section
            id="registration"
            className="
        relative
        min-h-screen
        w-full
        bg-gradient-to-br
        from-black
        to-[#003f00]
        flex
        flex-col
        items-center
        justify-start
        pt-16
        pb-20
        px-4
      "
        >
            <h2
                className={`
          ${press_start.className}
          text-white
          text-2xl
          md:text-4xl
          mb-10
          text-center
        `}
            >
                Для чого взяти участь?
            </h2>

            <div
                className="
        flex
        flex-col
        md:flex-row
        gap-6
        md:gap-10
        items-center
        justify-center
        mb-12
      "
            >
                <div
                    className="
          bg-[#5AFF36]
          text-black
          rounded-full
          px-8
          py-6
          flex
          flex-col
          items-center
          text-center
          max-w-xs
          shadow-lg
        "
                >
                    <div
                        className="
            bg-black
            rounded-full
            w-20
            h-10
            flex
            items-center
            justify-center
            mb-4
          "
                    >
                        <Smile size={24} color="#5AFF36"/>
                    </div>
                    <p className="text-lg font-medium">Хочеш отримати унікальний досвід?</p>
                </div>

                <div
                    className="
          bg-[#5AFF36]
          text-black
          rounded-full
          px-8
          py-6
          flex
          flex-col
          items-center
          text-center
          max-w-xs
          shadow-lg
        "
                >
                    <div
                        className="
            bg-black
            rounded-full
            w-20
            h-10
            flex
            items-center
            justify-center
            mb-4
          "
                    >
                        <TrendingUp size={24} color="#5AFF36"/>
                    </div>
                    <p className="text-lg font-medium">Випробувати свої сили на практиці?</p>
                </div>

                <div
                    className="
          bg-[#5AFF36]
          text-black
          rounded-full
          px-8
          py-6
          flex
          flex-col
          items-center
          text-center
          max-w-xs
          shadow-lg
        "
                >
                    <div
                        className="
            bg-black
            rounded-full
            w-20
            h-10
            flex
            items-center
            justify-center
            mb-4
          "
                    >
                        <Lightbulb size={24} color="#5AFF36"/>
                    </div>
                    <p className="text-lg font-medium">
                        Реалізувати власну ідею за заданою темою?
                    </p>
                </div>
            </div>

            <div className="flex justify-center my-16">
                <Image src="/registration/arrow_icon.svg" width={50} height={50} alt="Arrow"
                       className="animate-bounce"/>
            </div>

            <div
                className="
        relative
        flex
        flex-col
        items-center
        justify-center
        text-center
        px-6
        py-12
        md:py-20


      "
            >


                <h3
                    className={`
          ${press_start.className}
          text-[#7FFF4F]
          text-xl
          md:text-3xl
          mb-6
        `}
                >
                    BEST::HACKathOn 2025
                </h3>

                <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
                    це унікальна платформа для розвитку твоїх IT-навичок,
                    генерації креативних рішень та нетворкінгу з найкращими спеціалістами.
                </p>

                <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl mt-4">
                    Це можливість для студентів, які хочуть розвиватися в IT,
                    спробувати себе в командних проєктах і вирішувати технічні задачі.
                    Ти отримаєш нові емоції, незабутні враження, унікальний досвід і шанс виграти круті призи.
                </p>

            </div>

            <h4
                className={`
          ${press_start.className}
          text-white
          text-2xl
          md:text-3xl
          text-center
          font-semibold
          mb-6
        `}
            >
                Готовий(-a) go виклику?<br/>
                Не зволікай!
            </h4>


            <button
                onClick={() => window.open("https://t.me/@ACKath0n_2025_bot", "_blank")}
                className={`
            ${press_start.className}
            text-black bg-[#5AFF36]
            px-8 py-4
            mt-4
            rounded-3xl
            hover:scale-105
            transition-transform
          `}
            >
                Зареєструватися
            </button>
        </section>
    );
}
