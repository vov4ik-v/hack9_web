import { press_start } from "@/app/fonts";

export default function AboutHack() {
    return (
        <section
            id="about"
            className="
        relative
        min-h-screen
        w-full
        flex flex-col
        items-center
        justify-center
        px-6
        py-10
        bg-black
        bg-gradient-to-r from-black to-[#1d5d1f]
      "
        >
            {/* Зелена обводка (inline SVG) */}
            <div className="absolute  inset-0 pointer-events-none flex justify-center items-center">
                <svg
                    viewBox="0 0 800 400"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[80%] h-auto"
                >
                    {/* Приклад умовної фігури; підставте свій path */}
                    <path
                        d="M 50 50 C 200 50, 600 50, 750 200 S 600 350, 100 350"
                        fill="none"
                        stroke="#00ff00"
                        strokeWidth="20"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            {/* Контент поверх фігури */}
            <h1
                className={`${press_start.className} text-hack-green text-3xl lg:text-5xl mb-8 z-10 text-center`}
            >
                Що таке ХАКАТОН?
            </h1>

            <div
                className="
          z-10
          max-w-2xl
          bg-black/80
          text-white
          rounded-xl
          p-6
          text-center
          border border-hack-green
        "
            >
                <p className="text-lg lg:text-xl">
                    Hackathon – це захід, на який збираються розробники, дизайнери, інженери,
                    щоб за обмежений час в режимі інтенсиву та командної роботи, створити
                    та презентувати свій проєкт.
                </p>
            </div>
        </section>
    );
}
