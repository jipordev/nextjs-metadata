import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/layouts/NavbarComponent";
import { Suspense } from "react";
import LoadingComponent from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUILayout>
          <NavbarComponent />
         {children}
        </NextUILayout>
      </body>
    </html>
  );
}
