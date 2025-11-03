"use client";
import About1 from "@/components/AboutPage/About1/page";
import About2 from "@/components/AboutPage/About2/page";
import About3 from "@/components/AboutPage/About3/page";
import About4 from "@/components/AboutPage/About4/About4";
import Mabout1 from "@/components/AboutPageMobile/Mabout1/page";
import Mabout2 from "@/components/AboutPageMobile/Mabout2/page";
import Mabout3 from "@/components/AboutPageMobile/Mabout3/page";
import Mabout4 from "@/components/AboutPageMobile/Mabout4/page";
import Footer from "@/components/footer/page";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function About() {
  return (
    <div>
      {/* ✅ Mobile version */}
      <div className="block md:hidden">
        <Mheader />
        <main className="pt-21">
          <Mabout1 />
          <Mabout2 />
          <Mabout3 />
          <Mabout4 />
          <Mfooter />
        </main>
      </div>

      {/* ✅ Desktop version */}
      <div className="hidden md:block overflow-x-hidden">
        <About1 />
        <About2 />
        <About3 />
        <About4 />
        <Footer />
      </div>
    </div>
  );
}
