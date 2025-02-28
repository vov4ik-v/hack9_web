"use client";
import { press_start } from "@/app/fonts";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function AboutBest() {
    return (
        <section
            id="about_us"
            className="
                relative
                min-h-screen
                w-full
                flex
                flex-col
                items-center
                justify-center
                px-6
                py-10
                lg:py-20
            "
        >
            <h2
                className={`
                    ${press_start.className}
                    text-white
                    text-3xl
                    lg:text-5xl
                    mb-10
                    text-center
                `}
            >
                Організатори
            </h2>

            <div className="relative flex flex-col lg:flex-row items-center justify-center max-w-5xl w-full gap-8 lg:gap-16 xl:gap-20">
                <div
                    className="
                        relative
                        bg-white
                        text-black
                        rounded-[70px]
                        p-6
                        lg:p-10
                        max-w-3xl
                        w-full
                        shadow-lg
                        text-center lg:text-left
                    "
                >
                    <h3
                        className={`
                            ${press_start.className}
                            text-2xl
                            lg:text-3xl
                            mb-4
                        `}
                    >
                        BEST Lviv
                    </h3>
                    <ArrowUpRight
                        size={42}
                        className="absolute top-6 right-6 lg:top-10 lg:right-10 text-black"
                    />
                    <p className="leading-relaxed text-sm lg:text-base mb-6">
                        BEST Lviv – це осередок міжнародної неприбуткової організації BEST
                        (Board of European Students of Technology), яка об’єднує студентів
                        технічних спеціальностей. <br/>
                        Нашою місією є розвиток студентів через обмін знаннями та співпрацю
                        громадських організацій, компаній, університетів та студентів Європи.
                    </p>
                    <div className="flex justify-center lg:justify-start flex-wrap gap-3">
                        <div className="bg-[#5AFF36] text-black px-4 py-2 rounded-full font-semibold text-sm lg:text-base">
                            30 країн
                        </div>
                        <div className="bg-[#5AFF36] text-black px-4 py-2 rounded-full font-semibold text-sm lg:text-base">
                            84 осередків
                        </div>
                        <div className="bg-[#5AFF36] text-black px-4 py-2 rounded-full font-semibold text-sm lg:text-base">
                            36 років досвіду
                        </div>
                    </div>
                </div>

                {/* Лого на lg і більше - справа, на <lg - під карткою */}
                <div className="flex justify-center w-full lg:w-auto">
                    <Image
                        src="/BestLogo.svg"
                        alt="BEST Lviv Logo"
                        width={300}
                        height={300}
                        className="lg:w-[400px] xl:w-[500px]"
                    />
                </div>
            </div>
        </section>
    );
}
