import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

import Header from "@/components/header";

const lato = Lato({ 
    subsets: ['latin'],
    weight: ['400', '700']
});

export const metadata: Metadata = {
    title: 'Salamander',
    description: 'Generated by create next app',
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="pt-br">
            <body className={lato.className}>
                <Header />
                { children }
                <footer className="">
                    footer
                </footer>
            </body>
        </html>
    );
}