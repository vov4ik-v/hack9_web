"use client";
import { press_start } from "@/app/fonts";
import Image from "next/image";

const partnersData = [
    {
        imgSrc: "/partners/Bowls.svg",
        alt: "Bowls",
    },
    {
        imgSrc: "/partners/Donatello.svg",
        alt: "Donatello",
    },
    {
        imgSrc: "/partners/Harvest.svg",
        alt: "Harvest",
    },
    {
        imgSrc: "/partners/FilmCenter.svg",
        alt: "FilmCenter",
    },
    {
        imgSrc: "/partners/Hator.svg",
        alt: "Hator",
    },
    {
        imgSrc: "/partners/Logikum.svg",
        alt: "Logikum",
    },
    {
        imgSrc: "/partners/meleto.svg",
        alt: "meleto",
    },
    {
        imgSrc: "/partners/Sigma.svg",
        alt: "Sigma",
    },
    {
        imgSrc: "/partners/Hobby.svg",
        alt: "HobbyMonster",
    },
    {
        imgSrc: "/partners/Sova.svg",
        alt: "Sova",
    },
    {
        imgSrc: "/partners/Nonstop.svg",
        alt: "Nonstop",
    },
];

const Partner = ({
                     imgSrc,
                     alt,
                 }: {
    imgSrc: string;
    className?: string;
    alt: string;
}) => {
    return (
        <div className="border rounded-xl bg-black p-3 hover:scale-105 transition-all duration-500">
            <div className="rounded-xl bg-gray-500 p-3">
                <div className="rounded-xl bg-gray-300 p-3 relative z-30">
                    <Image
                        src={imgSrc}
                        alt={alt}
                        height={128}
                        width={208}
                        className="h-24"
                    />
                </div>
            </div>
        </div>
    );
};

export default function Support() {
    return (
        <section
            id="partners"
            className="
        relative
        min-h-screen
        w-full
        flex
        flex-col
        px-6
        py-10
      "
        >
            <h2
                className={`
          ${press_start.className}
          text-white
          text-2xl
          md:text-4xl
          text-center
          mb-10
        `}
            >
                За підтримки
            </h2>

            <div
                className="
          absolute
          top-64
          left-64
          w-48
          h-48
          border-t-[16px]
          border-l-[16px]
          border-[#5AFF36]
          rounded-br-full
        "
            />

            <div
                className="
          absolute
          bottom-64
          right-64
          w-48
          h-48
          border-b-[16px]
          border-r-[16px]
          border-[#5AFF36]
          rounded-tl-full
          rounded-b-2xl
        "
            />
        </section>
    );
}
