"use client";
import { press_start } from "@/app/fonts";

export default function Theme() {
    return (
        <section
            id="theme"
            className="
                relative
                w-full
                min-h-screen
                flex
                flex-col
                items-center
                justify-center
                px-6
                py-10
                text-white
            "
        >
            <h2
                className={`
                    ${press_start.className}
                    text-white
                    text-3xl
                    md:text-4xl
                    mb-6
                    text-center
                `}
            >
                Тема
            </h2>

            <div
                className="
                    max-w-3xl
                    bg-white
                    rounded-[40px]
                    p-10
                    text-center
                    mb-8
                    shadow
                "
            >
                <h3
                    className="
                        text-xl
                        md:text-2xl
                        mb-8
                        text-center
                        font-bold
                        text-black
                    "
                >
                    <span
                        className="
                            inline-block
                            bg-[#5AFF36]
                            px-4
                            py-2
                            rounded-2xl
                            leading-tight
                        "
                    >
                        <span className={`${press_start.className} block sm:inline`}>
                            Післявоєнне
                        </span>
                        <span className={`
                            ${press_start.className} 
                            block 
                            sm:inline 
                            sm:ml-2
                            md:ml-4 
                            mt-1 
                            sm:mt-0
                        `}>
                            відновлення
                        </span>
                    </span>
                </h3>

                <p className="text-base md:text-sm leading-relaxed text-black">
                    Тема цьогорічного BEST::HACKath0n зосереджена на розробці інноваційних рішень,
                    які сприятимуть ефективному та сталому відновленню України, роблячи її сильною,
                    стійкою та здатною протистояти будь-яким викликам.
                </p>
                <p className="text-base md:text-sm leading-relaxed text-black mt-4">
                    Сьогодні наша країна стикається з нагальною потребою у відновленні ключових сфер:
                    інфраструктури, економіки, екології та соціальної сфери. Відбувається пошкодження міст,
                    відновлення екосистем, створення нових економічних можливостей і підтримка суспільства
                    з пріоритетами для нашого майбутнього.
                </p>
            </div>

            <div className="flex flex-col items-center pt-20">
                <div className="flex flex-wrap gap-12 sm:gap-36 justify-center items-center">
                    <div className="flex flex-col items-center">
                        <img src="/theme/calendar-line.svg" alt="Calendar" className="w-20 h-20 sm:w-24 sm:h-24 mb-10"/>
                        <span
                            className={`
                                ${press_start.className}
                                text-[#5AFF36]
                                text-sm
                                sm:text-lg
                                md:text-xl
                                text-center
                            `}
                        >
                            26-27
                            <br/>
                            квітня
                        </span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/theme/map-pin-line.svg" alt="Location" className="w-20 h-20 sm:w-24 sm:h-24 mb-10"/>
                        <span
                            className={`
                                ${press_start.className}
                                text-[#5AFF36]
                                text-sm
                                sm:text-lg
                                md:text-xl
                                text-center
                            `}
                        >
                            Львів
                            <br/>
                            (offline)
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
