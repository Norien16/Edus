"use client";

import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { usePathname } from "next/navigation";
import Mheader from "@/components/HomePageMobile/Mheader/page";

// Fonts
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const pathname = usePathname();
  // const hideFooterOn = ["/ourservices"];
  // const shouldHideFooter = hideFooterOn.includes(pathname);

  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {/* 👇 Show mobile header on small screens, desktop header on larger screens */}
        <div className="block md:hidden">
          <Mheader />
        </div>
        <div className="hidden md:block">
          <Header />
        </div>

        <main>{children}</main>

        {/* {!shouldHideFooter && <Footer />} */}
      </body>
    </html>
  );
}
