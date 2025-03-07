"use client";
import {press_start} from "@/app/fonts";
import Image from "next/image";

const partnersData = [
    {
        imgSrc: "/partners/Lionwood.svg",
        alt: "Lionwood",
    },
    {
        imgSrc: "/partners/qubstudio.svg",
        alt: "Qubstudio",
    },
    {
        imgSrc: "/partners/DataArt.svg",
        alt: "DataArt",
    },
    {
        imgSrc: "/partners/Ukeess.svg",
        alt: "Ukeess",
    },
    {
        imgSrc: "/partners/keepit.svg",
        alt: "keepit",
    },
    {
        imgSrc: "/partners/infineon.svg",
        alt: "Infineon",
    },
    {
        imgSrc: "/partners/keenethics.svg",
        alt: "keen.ethics",
    },
    {
        imgSrc: "/partners/Comptools.svg",
        alt: "Comptools",
    },
    {
        imgSrc: "/partners/clover_dynamics.svg",
        alt: "Clover Dynamics",
    },
    {
        imgSrc: "/partners/gl.svg",
        alt: "GlobalLogic",
    },
    {
        imgSrc: "/partners/sombra.svg",
        alt: "Sombra",
    },
    {
        imgSrc: "/partners/Leobit.svg",
        alt: "Leobit",
    },
    {
        imgSrc: "/partners/osfdigital.svg",
        alt: "OSF Digital",
    },
    {
        imgSrc: "/partners/SiTime.svg",
        alt: "SiTime",
    },
    {
        imgSrc: "/partners/lynksen.svg",
        alt: "Lynksen",
    },
    {
        imgSrc: "/partners/soft.svg",
        alt: "SoftServe",
    },
    {
        imgSrc: "/partners/tskt.svg",
        alt: "tskt",
    },
    {
        imgSrc: "/partners/teamvoy_new.svg",
        alt: "teamvoy",
    },
];

// Одне “лого” з колонки
const Partner = ({imgSrc, alt}: { imgSrc: string; alt: string }) => {
    return (
        <div
            className={`flex items-center justify-center`}
        >
            <Image
                src={imgSrc}
                alt={alt}
                height={128}
                width={208}
                className="hover:scale-105 transition-all duration-500 h-16 sm:h-20 md:h-24 lg:h-32"
            />
        </div>
    );
};

export default function Partners() {
    return (
        <section
            className="min-h-screen py-16 flex flex-col items-center justify-center max-w-7xl w-full px-4 sm:px-16 mx-auto gap-12"
            id="partners"
        >
            <div className="relative w-full flex justify-center">
                <h1
                    className={`${press_start.className} flex self-center text-white text-center text-2xl lg:text-4xl my-10`}
                >
                    Партнери
                </h1>
            </div>

            <div className="grid grid-cols-4 gap-6 w-full place-items-center">
                {partnersData.slice(0, 16).map((p, index) => (
                    <Partner key={index} imgSrc={p.imgSrc} alt={p.alt} />
                ))}

                <div className="col-span-1"></div>

                {partnersData.slice(16).map((p, index) => (
                    <Partner key={index} imgSrc={p.imgSrc} alt={p.alt} />
                ))}

                <div className="col-span-1"></div>
            </div>
        </section>
    );
}
