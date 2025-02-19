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
                bg-gradient-to-br
                from-[#1a1a1a]
                to-[#1d5d1f]
                flex
                flex-col
                justify-center
                px-16
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
                   
                    mb-10
                    text-center
                `}
            >
                Контакти
            </h1>

            {/* Контактна інформація */}
            <div className="text-white text-left text-lg md:text-2xl font-mono">
                <p className="mb-10">
                    <span  className={`
                    ${press_start.className} font-bold text-white tracking-wider`}>
                        Головна організаторка:
                    </span>
                    <br />
                    <span className="text-hack-green">Олександра Оленчук</span>
                </p>
                <p className="mb-10">
                     <span  className={`
                    ${press_start.className} font-bold text-white tracking-wider`}>E-mail:</span>
                    <br/>
                    <span className="text-hack-green">
                        oleksandra.olenchuk@best-eu.org
                    </span>
                </p>
                <p>
                    <span  className={`
                    ${press_start.className} font-bold text-white tracking-wider `}>Тел:</span>
                    <br/>
                    <span className="text-hack-green">+380 66 250 30 49</span>
                </p>
            </div>
        </section>
    );
}