"use client";
import {press_start} from "@/app/fonts";
import {Cross1Icon} from "@radix-ui/react-icons";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect} from "react";
import * as Dialog from "@radix-ui/react-dialog";
import useSmoothScrollTo from "@/hooks/useSmothScrollTo";

interface DrawerProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
    navigation: MenuItem[];
}

type MenuItem = {
    name: string;
    href: string;
};

export default function Drawer({
                                   setMobileMenuOpen,
                                   navigation,
                                   mobileMenuOpen,
                               }: DrawerProps) {
    const handleScrollClick = useSmoothScrollTo();

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [mobileMenuOpen]);

    return (
        <Dialog.Portal>
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.2}}
                            className="fixed inset-0 z-50 backdrop-blur-sm"
                            onClick={() => setMobileMenuOpen(false)}
                        />

                        <motion.div
                            initial={{x: "100%"}}
                            animate={{x: "0%"}}
                            exit={{x: "100%"}}
                            transition={{duration: 0.2}}
                            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-200/10"
                        >
                            <div>
                                {/* Close Button */}
                                <div className="flex items-center justify-between">
                                    <button
                                        type="button"
                                        className="-m-2.5 rounded-md p-2.5 text-gray-200"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Закрити меню</span>
                                        <Cross1Icon className="h-6 w-6" aria-hidden="true"/>
                                    </button>
                                </div>

                                {/* Навігація */}
                                <div className="mt-6 flow-root">
                                    <div className="-my-6 divide-y divide-gray-500/10">
                                        <div className="space-y-4 py-6 flex flex-col items-center">
                                            {navigation.map((item) => (
                                                <span
                                                    onClick={() => {
                                                        setMobileMenuOpen(false);
                                                        handleScrollClick(item.href);
                                                    }}
                                                    key={item.name}
                                                    className={`${press_start.className} cursor-pointer transition-all -mx-3 block px-3 py-2 text-lg text-center font-semibold leading-7 text-white hover:text-hack-green rounded`}
                                                >
                          {item.name}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-center">
                                    <button
                                        onClick={() =>
                                            window.open("https://t.me/HACKath0n_2025_bot", "_blank")
                                        }
                                        className={`
                      ${press_start.className}
                      text-black bg-[#5AFF36]
                      px-6 sm:px-8 py-3 sm:py-4
                      text-[15px]
                      rounded-3xl
                      hover:scale-105 transition-transform
                      text-lg font-bold
                    `}
                                    >
                                        Зареєструватися
                                    </button>
                                </div>

                                <div className="mt-6 flex justify-center">
                                    <button
                                        onClick={() => {
                                            handleScrollClick("#contacts")
                                            setMobileMenuOpen(false)
                                        }}
                                        className={`
                      ${press_start.className}
                      text-black bg-[#5AFF36]
                      px-6 sm:px-8 py-3 sm:py-4
                      text-[15px]
                      rounded-3xl
                      hover:scale-105 transition-transform
                      text-lg font-bold
                    `}
                                    >
                                        Стати партнером
                                    </button>

                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </Dialog.Portal>
    );
}
