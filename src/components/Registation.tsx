"use client";
import { press_start } from "@/app/fonts";
import Image from "next/image";
import React from "react";

export default function Registration() {
    return (
        <section
            id="registration"
            className="
                relative
                min-h-screen
                w-full
                flex
                flex-col
                items-center
                justify-start
                px-6
                py-10
            "
        >
            <h2
                className={`
                    ${press_start.className}
                    text-white
                    text-3xl
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
                    lg:flex-row
                    gap-6
                    md:gap-10
                    items-center
                    justify-center
                    mb-12
                "
            >
                {/* 1-а «пігулка» */}
                <div
                    className="
                        bg-[#5AFF36]
                        text-black
                        rounded-full
                        px-8
                        py-4
                        sm:py-6
                        flex
                        items-center
                        text-center
                        max-w-sm
                        shadow-lg
                        gap-2
                    "
                >
                    <Image
                        src="/registration/smile.svg"
                        width={53}
                        height={53}
                        alt="Smile"
                    />
                    <p className="text-lg font-medium">
                        Хочеш отримати унікальний досвід?
                    </p>
                </div>

                <div
                    className="
                        bg-[#5AFF36]
                        text-black
                        rounded-full
                        px-8
                        py-4
                        sm:py-6
                        flex
                        items-center
                        text-center
                        max-w-sm
                        shadow-lg
                        gap-4
                    "
                >
                    <Image
                        src="/registration/trending.svg"
                        width={53}
                        height={53}
                        alt="Trending"
                    />
                    <p className="text-lg font-medium">
                        Випробувати свої сили на практиці?
                    </p>
                </div>

                <div
                    className="
                        bg-[#5AFF36]
                        text-black
                        rounded-full
                        px-8
                        py-4
                        sm:py-6
                        flex
                        items-center
                        text-center
                        max-w-sm
                        shadow-lg
                        gap-4
                    "
                >
                    <Image
                        src="/registration/lightbulb.svg"
                        width={37}
                        height={53}
                        alt="Lightbulb"
                    />
                    <p className="text-lg font-medium">
                        Реалізувати власну ідею за заданою темою?
                    </p>
                </div>
            </div>

            {/* Стрілка */}
            <div className="flex justify-center my-16">
                <Image
                    src="/registration/arrow_icon.svg"
                    width={50}
                    height={50}
                    alt="Arrow"
                    className="animate-bounce"
                />
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
                    py-6
                    md:py-10
                "
            >
                <h3
                    className={`
                        ${press_start.className}
                        text-[#5AFF36]
                        text-2xl
                        sm:text-3xl
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
                    Студенти, які хочуть розвиватися в ІТ, можуть спробувати себе в командних проєктах і вирішувати технічні задачі. Ви отримаєте нові емоції, незабутні враження, унікальний досвід і шанс виграти круті призи.
                </p>
            </div>

            <h4
                className={`
                    ${press_start.className}
                    text-white
                    text-xl
                    md:text-3xl
                    text-center
                    font-semibold
                    mb-6
                    mt-12
                    leading-relaxed
                `}
            >
                Приймаєш виклик?<br/>
                <span className="mt-8 block">Не зволікай!</span>
            </h4>

            <button
                onClick={() => window.open("https://t.me/@HACKath0n_2025_bot", "_blank")}
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
