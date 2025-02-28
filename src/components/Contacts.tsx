"use client";
import { press_start } from "@/app/fonts";

export default function Contacts() {
    return (
        <section
            id="contacts"
            className="
                relative
                min-h-[70vh]
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
                    <span className="text-[#5AFF36]">Олександра Оленчук</span>
                </p>
                <p className="mb-12">
                     <span className={`
                    ${press_start.className} font-bold text-white tracking-wider`}>E-mail:</span>
                    <br/>
                    <span className="text-[#5AFF36]">
                        oleksandra.olenchuk@best-eu.org
                    </span>
                </p>
                <p>
                    <span className={`
                    ${press_start.className} font-bold text-white tracking-wider `}>Тел:</span>
                    <br/>
                    <span className="text-[#5AFF36]">+380 66 250 30 49</span>
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