"use client";
import { press_start } from "@/app/fonts";

export default function Contacts() {
    return (
        <section
            id="contacts"
            className="
                relative
                min-h-screen
                w-full
                flex
                flex-col
                justify-center
                px-4
                sm:px-16
                xl:px-32
                py-10
            "
        >
            {/* Заголовок */}
            <h1
                className={`
                    ${press_start.className}
                    text-white
                    text-4xl
                    md:text-5xl
                   
                    mb-12
                    text-center
                `}
            >
                Контакти
            </h1>

            <div className="text-white text-left text-lg md:text-2xl font-mono">
                <p className="mb-12">
                    <span className={`
                    ${press_start.className} font-bold text-white tracking-wider`}>
                        Головна організаторка:
                    </span>
                    <br/>
                    <span className="block mt-4 text-[#5AFF36]">Олександра Оленчук</span>
                </p>
                <p className="mb-12">
                     <span className={`
                    ${press_start.className} font-bold text-white tracking-wider`}>E-mail:</span>
                    <br/>
                    <a
                        href="mailto:oleksandra.olenchuk@best-eu.org"
                        className="block mt-4 text-[#5AFF36]"
                    >
                        oleksandra.olenchuk@best-eu.org
                    </a>
                </p>
                <p>
                    <span className={`
                    ${press_start.className} font-bold text-white tracking-wider `}>Телефон:</span>
                    <br/>
                    <a
                        href="tel:+380662503049"
                        className="block mt-4 text-[#5AFF36]"
                    >
                        +380 66 250 30 49
                    </a>
                </p>
                <img
                    src="/contacts/maskot.svg"
                    alt={("mascotAlt")}
                    className="absolute right-0 lg:right-24 xl:right-64 bottom-0 w-[150px] sm:w-[300px] h-auto"
                />
            </div>
        </section>
    );
}