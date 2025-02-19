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
        bg-gradient-to-r
        from-black
        to-green-900
        px-6
        py-10
      "
        >
            <h2
                className="
          text-center
          text-3xl
          md:text-5xl
          text-white
          font-bold
          mb-10
        "
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
          md:gap-10
        "
            >
                <div
                    className="
            flex-1
            bg-[#F1F1F1]
            text-black
            border
            border-black
            rounded-[100px]
            p-8
            flex
            flex-col
            md:flex-row
            items-center
            gap-8
          "
                >
                    <div className="md:w-1/2 p-10">
                        <img
                            src="/MentorTheme.png"
                            alt="Soft category"
                            className="w-full h-auto rounded-[100px] object-cover"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className={`
          ${press_start.className} text-3xl font-bold mb-4`}>Soft</h3>
                        <p className="leading-relaxed font-bold text-base md:text-lg mb-6">
                            Учасникам потрібно розробити програму в якій основний фокус на ідеї та задуми,
                            клікабельний візуальний частині програми, а також самій логіці побудови користування
                            програмою.
                        </p>
                        <p className="leading-relaxed text-base md:text-lg mb-6">
                            Прикладом такого завдання може бути масштабна екосистема, яка поєднує штучний інтелект,
                            краудсорсинг даних і гейміфікацію для відстеження, аналізу та відновлення екологічного
                            балансу планети.
                            Вона об’єднує користувачів, організації, науковців і уряди для моніторингу змін клімату,
                            боротьби зі сміттям, збереження біорізноманіття.
                        </p>
                    </div>
                </div>
                <div
                    className="
            flex-1
            bg-[#F1F1F1]
            text-black
            border
            border-black
            rounded-[100px]
            p-8
            flex
            flex-col
            md:flex-row-reverse
            items-center
            gap-8
          "
                >
                    <div className="md:w-1/2">
                        <img
                            src="/Gallery1.png"
                            alt="Hard category"
                            className="w-full h-auto rounded-[100px] object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 p-10">
                        <h3 className={`
          ${press_start.className} text-3xl font-bold mb-4`}>Hard</h3>
                        <p className="leading-relaxed text-base font-bold md:text-lg mb-6">
                            Категорія орієнтована на створення глибинної логіки й алгоритмів,
                            а також реалізацію інтегральних рішень на базі AI, Data Science або ML.
                            Основний фокус — це складні обчислення, аналітика та обробка великих масивів даних.
                        </p>
                        <p className="leading-relaxed text-base md:text-lg mb-6">
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
