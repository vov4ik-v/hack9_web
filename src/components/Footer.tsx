"use client";

import Image from "next/image";

export default function Footer() {
  return (
      <footer className="w-full bg-black text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          <div className="flex gap-4">
            <a
                href="https://www.facebook.com/BEST.Lviv/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
            >
              <img
                  src="/footer/facebook.svg"
                  alt="Facebook"
                  className="h-6 w-6 md:h-8 md:w-8"
              />
            </a>
            <a
                href="https://www.instagram.com/best_lviv/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
            >
              <img
                  src="/footer/instagram.svg"
                  alt="Instagram"
                  className="h-6 w-6 md:h-8 md:w-8"
              />
            </a>
            <a
                href="https://t.me/bestlviv"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
            >
              <img
                  src="/footer/telegram.svg"
                  alt="Telegram"
                  className="h-6 w-6 md:h-8 md:w-8"
              />
            </a>
            <a
                href="https://www.linkedin.com/company/bestlviv/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-110"
            >
              <img
                  src="/footer/linkedin.svg"
                  alt="LinkedIn"
                  className="h-6 w-6 md:h-8 md:w-8"
              />
            </a>
          </div>

          <div className="flex-shrink-0">
            <Image
                src="/BestLogo.svg"
                width={120}
                height={50}
                alt="BEST Logo"
                className="h-12 w-auto"
            />
          </div>

          <div>
          <span className="text-sm sm:text-lg md:text-xl font-bold">
            2025
          </span>
          </div>
        </div>
      </footer>
  );
}
