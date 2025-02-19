"use client";
import { press_start } from "@/app/fonts";

export default function PartnersPlaceholder() {
    return (
        <section
            id="partners"
            className="
        relative
        min-h-screen
        w-full
        bg-black
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
                Партнери
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
