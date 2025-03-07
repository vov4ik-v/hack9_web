"use client";
import Image from "next/image";
import {press_start} from "@/app/fonts";

export default function CategoriesSection() {
    return (
        <section
            id="categories"
            className="
                relative
                min-h-screen
                w-full
                px-6
                py-10
            "
        >
            <h2
                className={`${press_start.className}
                    text-center
                    text-2xl
                    lg:text-4xl
                    text-white
                    font-bold
                    my-10
                `}
            >
                Категорії
            </h2>

            <div
                className="
                    max-w-6xl
                    mx-auto
                    flex
                    flex-col
                    gap-8
                    lg:gap-10
                "
            >
                {/* Блок "Soft" */}
                <div
                    className="
                        flex-1
                        bg-[#F1F1F1]
                        text-black
                        rounded-[40px]
                        p-8
                        flex
                        flex-col
                        lg:flex-row
                        items-center
                        gap-8
                    "
                >
                    <div className="lg:w-1/2 p-10 hidden lg:block">
                        <img
                            src="/categories/soft.jpeg"
                            alt="Soft category"
                            className="w-full h-auto rounded-[30px] object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h3
                            className={`
    ${press_start.className}
    text-2xl
    lg:text-3xl
    text-center
    lg:text-start
    mb-4

    bg-[#5AFF36]
    py-1
    rounded-2xl
    font-bold

    lg:bg-transparent
    lg:py-0
    lg:rounded-none
    lg:font-normal
  `}
                        >
                            Soft
                        </h3>
                        <p className="leading-relaxed font-bold text-base mb-6">
                            Учасникам потрібно розробити програму в якій основний фокус на ідеї та задуми,
                            клікабельний візуальний частині програми, а також самій логіці побудови користування
                            програмою.
                        </p>
                        <p className="leading-relaxed text-base mb-6">
                            Прикладом такого завдання може бути масштабна екосистема, яка поєднує штучний інтелект,
                            краудсорсинг даних і гейміфікацію для відстеження, аналізу та відновлення екологічного
                            балансу планети.
                            Вона об’єднує користувачів, організації, науковців і уряди для моніторингу змін клімату,
                            боротьби зі сміттям, збереження біорізноманіття.
                        </p>
                    </div>
                </div>

                {/* Блок "Hard" */}
                <div
                    className="
                        flex-1
                        bg-[#F1F1F1]
                        text-black
                        rounded-[40px]
                        p-8
                        flex
                        flex-col
                        lg:flex-row-reverse
                        items-center
                        gap-8
                    "
                >
                    <div className="lg:w-1/2 hidden lg:block">
                        <img
                            src="/categories/hard.jpeg"
                            alt="Hard category"
                            className="w-full h-auto rounded-[30px] object-cover"
                        />
                    </div>
                    <div className="lg:w-1/2">
                        <h3 className={`
                            ${press_start.className}
                              text-2xl
    lg:text-3xl
    text-center
    lg:text-start
    mb-4

    // Стилі до lg
    bg-[#5AFF36]
    py-1
    rounded-2xl
    font-bold

    // Скасовуємо стилі після lg
    lg:bg-transparent
    lg:py-0
    lg:rounded-none
    lg:font-normal
                        `}
                        >
                            Hard
                        </h3>
                        <p className="leading-relaxed text-base font-bold mb-6">
                            Категорія орієнтована на створення глибинної логіки й алгоритмів,
                            а також реалізацію інтегральних рішень на базі AI, Data Science або ML.
                            Основний фокус — це складні обчислення, аналітика та обробка великих масивів даних.
                        </p>
                        <p className="leading-relaxed text-base mb-6">
                            Учасники можуть розробляти моделі для прогнозування, класифікації,
                            виявлення аномалій, пошуку оптимальних рішень тощо. Завдяки таким підходам
                            можна формувати ефективні механізми автоматизації та аналітики,
                            які вирішують масштабні або нестандартні завдання.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
