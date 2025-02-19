"use client";
import {FaCalendarAlt, FaMapMarkerAlt} from "react-icons/fa";
import {press_start} from "@/app/fonts";

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
        bg-gradient-to-br
        from-black
        to-[#0f3f0f]
        text-white
      "
        >
            <h2
                className={`
          ${press_start.className}
          text-white
          text-2xl
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
    rounded-[4.5rem]
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
    <span className={`
          ${press_start.className} bg-[#5AFF36] px-4 py-2 rounded-2xl`}>
      Післявоєнне відновлення
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
            <div className="flex flex-wrap gap-36 justify-center items-center">
                <div className="flex flex-col items-center">
                    <FaCalendarAlt className="text-white text-8xl mb-10"/>
                    <span
                        className={`
          ${press_start.className}
          text-[#5AFF36]
          text-xl
          md:text-2xl
          text-center
        `}
                    >
        26-27
        <br/>
        квітня
      </span>
                </div>
                <div className="flex flex-col items-center">
                    <FaMapMarkerAlt className="text-white text-8xl mb-10"/>
                    <span
                        className={`
          ${press_start.className}
          text-[#5AFF36]
          text-xl
          md:text-2xl
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
)
    ;
}
