"use client";
// import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import { usePathname } from "next/navigation";

// DM Sans
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // pick the weights you need
});

// Space Grotesk
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// export const metadata: Metadata = {
//   title: "Edulinks",
//   description: "",
// };

export default function RootLayout({
  
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const pathname = usePathname();

  // // 👇 Define pages where you don’t want footer
  // const hideFooterOn = ["/ourservices"];

  // const shouldHideFooter = hideFooterOn.includes(pathname);
  
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${spaceGrotesk.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        {/* {!shouldHideFooter && <Footer />} 👈 Conditional */}
      </body>
    </html>
  );
}
