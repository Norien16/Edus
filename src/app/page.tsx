"use client";
import Bar from "@/components/Homepage/Bar/page";
import BelowHeader from "@/components/Homepage/BelowHeader/page";
import Card from "@/components/Homepage/Card/page";
import CommunitySection from "@/components/Homepage/CommunitySection/page";
import EduApp from "@/components/Homepage/EduApp/page";
import FaQs from "@/components/Homepage/FaQs/page";
import FlyImage from "@/components/Homepage/FlyImage/page";
import Footer from "@/components/footer/page";
import Header from "@/components/header/page";
import HeroSlider from "@/components/Homepage/HeroSlider/page";
import MultipleImg from "@/components/Homepage/MultipleImg/page";
import WhyChooseUs from "@/components/Homepage/WhyChooseUs/page";
// import Image from "next/image";
import ExtraComponent from "@/components/ExtraComponent/page";
import { useEffect, useState } from "react";
import Mheader from "@/components/HomePageMobile/Mheader/page";
import Mbar from "@/components/HomePageMobile/Mbar/page";
import MbelowHeader from "@/components/HomePageMobile/MbelowHeader/page";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";

export default function Home() {

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
          <MbelowHeader />
          <Mfooter />
        </main>
      </div>
        : 
        <div>
      <Header />
      <main className="pt-21">
      <BelowHeader />
      <Bar />
      <EduApp />
      <FlyImage />
      <Card />
      <MultipleImg />
      <WhyChooseUs />
      <CommunitySection />
      <HeroSlider />
      <FaQs />
      <ExtraComponent />
      </main>
      </div>
       }
    </div>
  );
}