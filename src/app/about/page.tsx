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
import { useEffect, useState } from "react";


export default function About () {

    const [isMobile, setIsMobile] = useState(false);
    
      useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    return (
        <div>
             {isMobile ? 
             <div>
        <Mheader/>
        <main className="pt-21">
            <Mabout1 />
            <Mabout2 />
            <Mabout3 />
            <Mabout4 />
          <Mfooter />
        </main>
      </div>
      :
      <div>
            <About1 />
            <About2 />
            <About3 />
            <About4 />
            <Footer />
        </div>}
        </div>
    )
}