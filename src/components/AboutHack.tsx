import Image from 'next/image';
import { press_start } from '@/app/fonts'; // ваш кастомний шрифт

export default function AboutHack() {
    return (
        <section
            id="about"
            className="
        relative
        min-h-[50vh]
        w-full
        flex flex-col
        items-center
        justify-center
        px-6
        py-10
        text-white
      "
        >
            {/* Контейнер з обмеженням ширини */}
            <div className="max-w-5xl w-full relative">
                {/* Заголовок */}
                <h2
                    className={`
            ${press_start.className}
            text-center
            text-3xl
            sm:text-5xl
            tracking-wider
            mb-12
          `}
                >
                    Що таке ХАКАТОН?
                </h2>

                {/* Обгортка з «зеленою дужкою» */}
                <div
                    className="
            relative
            w-full
            border-[25px]
            sm:border-[35px]
            border-[#5AFF36]
            rounded-[70px]
            p-6
            md:p-10
          "
                >
                    <p className="text-lg sm:text-xl leading-relaxed sm:pr-20">
                        <span className="text-[#5AFF36] font-bold">Hackathon</span> — це захід,
                        на який збираються розробники, дизайнери, інженери, щоб за обмежений
                        час в режимі інтенсиву та командної роботи створити та презентувати
                        свій проєкт.
                    </p>

                    <div className="hidden sm:block absolute right-[-5rem] bottom-[-5rem] w-[250px] h-[250px]">
                        <Image
                            src="/about_hack/mascot.svg"
                            alt="Hackathon Mascot"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
