import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "BEST::HACKath0n 2025 | Lviv | Offline",
    description: "BEST::HACKath0n (Хакатон) – це безкоштовні ІТ-змагання для студентів, де протягом 24 годин учасники командно працюють над вирішенням проблеми або створенням нового продукту.\n" +
        "Розробники, дизайнери та інженери об'єднують зусилля, щоб розробити та презентувати свій проєкт.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${inter.className} bg-center bg-cover bg-fixed`}
            style={{
                backgroundImage: 'url("/fon.png")',
            }}
        >
        {children}
        </body>
        </html>
    );
}
