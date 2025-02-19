"use client";
import { press_start } from "@/app/fonts";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function AboutBest() {
    return (
        <section
            id="organizers"
            className="
        relative
        min-h-screen
        w-full
        bg-gradient-to-r
        from-black
        to-[#0f3f0f]
        flex
        flex-col
        items-center
        justify-center
        px-6
        py-10
      "
        >
            <h2
                className={`
          ${press_start.className}
          text-white
          text-3xl
          md:text-5xl
          mb-10
          text-center
        `}
            >
                Організатори
            </h2>

            <div className="relative flex flex-col md:flex-row items-center justify-between max-w-5xl w-full gap-16">
                <div
                    className="
            relative
            bg-white
            text-black
            rounded-[40px]
            p-6
            md:p-10
            max-w-2xl
            w-full
            shadow-lg
          "
                >
                    <ArrowUpRight
                        size={32}
                        className="absolute top-6 right-6 text-black"
                    />

                    <h3
                        className={`
              ${press_start.className}
              text-2xl
              md:text-3xl
              mb-4
            `}
                    >
                        BEST Lviv
                    </h3>

                    <p className="leading-relaxed text-sm md:text-base mb-6">
                        BEST Lviv – це осередок міжнародної неприбуткової організації BEST
                        (Board of European Students of Technology), яка об’єднує студентів
                        технічних спеціальностей. Нашою місією є розвиток студентів через
                        обмін знаннями та співпрацю громадських організацій, компаній,
                        університетів та студентів Європи.
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <div className="bg-[#7FFF4F] text-black px-4 py-2 rounded-full font-semibold text-sm md:text-base">
                            30 країн
                        </div>
                        <div className="bg-[#7FFF4F] text-black px-4 py-2 rounded-full font-semibold text-sm md:text-base">
                            85 осередків
                        </div>
                        <div className="bg-[#7FFF4F] text-black px-4 py-2 rounded-full font-semibold text-sm md:text-base">
                            34 роки досвіду
                        </div>
                    </div>
                </div>

                <div className="hidden md:block">
                    <Image
                        src="/BestLogo.svg"
                        alt="BEST Lviv Logo"
                        width={350}
                        height={350}
                    />
                </div>
            </div>
        </section>
    );
}
