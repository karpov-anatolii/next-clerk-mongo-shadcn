import type { Metadata } from "next";
import { Poppins, Raleway } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  weight: ["400", "700"],
  display: "swap", //  гарантирует, что шрифт отображается немедленно (с резервным шрифтом при необходимости)
  subsets: ["latin"], // указывает, что следует включить только латинский набор символов
  variable: "--font-poppins",
});

const raleway = Raleway({
  weight: ["300", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata: Metadata = {
  title: "Responsive Homepage Tailwind",
  description: "Responsive Homepage with Tailwind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            "min-h-screen bg-background font-raleway font-poppins antialiased",

            raleway.variable,
            poppins.variable
          )}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
