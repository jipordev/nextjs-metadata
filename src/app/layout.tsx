'use client'
import type { Metadata } from "next";
import { Inter, Kantumruy_Pro, Khmer, Konkhmer_Sleokchher, Poppins } from "next/font/google";
import "./globals.css";
import NextUILayout from "./NextUIProvider";
import NavbarComponent from "@/components/layouts/NavbarComponent";
import { Suspense } from "react";
import LoadingComponent from "./loading";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  style: ["italic", "normal"],
  variable: "--font-poppins",
});

const kantumruy_pro = Kantumruy_Pro({
  subsets: ["khmer"],
  display: "swap",
  variable: "--font-kantumruy-pro",
});

const khmer_font = Khmer({
  subsets: ["khmer"],
  display: "swap",
  style: "normal",
  variable: "--font-khmer-font",
  weight: "400"
})

const metadata: Metadata = {
  icons: {
    icon: "/assets/pic.jpg",
  },
  title: {
    template: "%s - MyShop",
    default: "MyShop"
  },
  description: "This is home page",
  keywords: ['shop', 'ecommerce', 'sell'],
  openGraph: {
    title: {
      template: "%s - MyShop",
      default: "MyShop"
    },
    description: "Generated by create next app",
    images:[
      "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg"
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${kantumruy_pro.className}`}>
        <NextUILayout>
          <NavbarComponent />
            <Suspense fallback={<LoadingComponent/>}>
                {children}
            </Suspense>
        </NextUILayout>
      </body>
    </html>
  );
}
