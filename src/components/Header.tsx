"use client";

import { useEffect, useState, useRef } from "react";
import { press_start } from "@/app/fonts";
import * as Dialog from "@radix-ui/react-dialog";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import Image from "next/image";
import Drawer from "./Drawer";
import useSmoothScrollTo from "@/hooks/useSmothScrollTo";

type MenuItem = {
  name: string;
  href: string;
};

const navigation: MenuItem[] = [
  { name: "Про нас", href: "#about_us" },
  { name: "Партнери", href: "#partners" },
  { name: "Організатори", href: "#team" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isFirstOrSecondSectionVisible, setIsFirstOrSecondSectionVisible] = useState(true);
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  const firstSectionRef = useRef<HTMLDivElement | null>(null);
  const secondSectionRef = useRef<HTMLDivElement | null>(null);
  const handleScrollClick = useSmoothScrollTo();

  useEffect(() => {
    const observer = new IntersectionObserver(
        (entries) => {
          const isVisible = entries.some((entry) => entry.isIntersecting);
          setIsFirstOrSecondSectionVisible(isVisible);
        },
        { threshold: 0.5 }
    );

    if (firstSectionRef.current) observer.observe(firstSectionRef.current);
    if (secondSectionRef.current) observer.observe(secondSectionRef.current);

    return () => {
      if (firstSectionRef.current) observer.unobserve(firstSectionRef.current);
      if (secondSectionRef.current) observer.unobserve(secondSectionRef.current);
    };
  }, []);

  useEffect(() => {
    const bgObserver = new IntersectionObserver(
        (entries) => {
          const darkSectionVisible = entries.some(
              (entry) =>
                  entry.isIntersecting &&
                  entry.target.getAttribute("data-bg") === "dark"
          );
          setIsDarkBackground(darkSectionVisible);
        },
        { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("[data-bg]");
    sections.forEach((section) => bgObserver.observe(section));

    return () => {
      sections.forEach((section) => bgObserver.unobserve(section));
    };
  }, []);

  return (
      <>
        <div ref={firstSectionRef} id="top" className="absolute top-0 w-full h-1" />
        <div ref={secondSectionRef} id="second" className="absolute top-[100vh] w-full h-1" />

        <motion.header
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="z-50 w-full fixed top-0 bg-black/50"
        >
          <div className="container mx-auto px-4 md:px-8 py-[1.5vw] flex justify-between items-center transition-colors duration-300">
            <div
                onClick={() => handleScrollClick("#top")}
                className="logo cursor-pointer relative z-20 flex align-middle gap-3 md:top-0 top-[0.8vw]"
            >
              <Image src="/HackLogo.svg" alt="logo" height={108} width={108} className="lg:w-16 w-12" />
            </div>

            <div className="hidden lg:flex gap-8 xl:gap-20 leading-none">
              {navigation.map((item, index) => (
                  <span
                      key={index}
                      onClick={() => handleScrollClick(item.href)}
                      className={`${press_start.className} cursor-pointer hover:scale-105 transition-all duration-500 text-l text-white`}
                  >
                {item.name}
              </span>
              ))}
            </div>

            <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <div className="flex lg:hidden relative">
                <Dialog.Trigger asChild>
                  <button
                      type="button"
                      className="relative z-10 inline-flex items-center justify-center rounded-md p-3 text-gray-200"
                      onClick={() => setMobileMenuOpen(true)}
                  >
                    <HamburgerMenuIcon className="h-10 w-10" aria-hidden="true" />
                  </button>
                </Dialog.Trigger>
              </div>
              <Drawer setMobileMenuOpen={setMobileMenuOpen} navigation={navigation} mobileMenuOpen={mobileMenuOpen} />
            </Dialog.Root>
          </div>
        </motion.header>
      </>
  );
}
