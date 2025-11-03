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
import ExtraComponent from "@/components/ExtraComponent/page";

import Mheader from "@/components/HomePageMobile/Mheader/page";
import MbelowHeader from "@/components/HomePageMobile/MbelowHeader/page";
import MphotoRoom from "@/components/HomePageMobile/MphotoRoom/page";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import MfaQs from "@/components/HomePageMobile/Mfaqs/page";
import Mbar from "@/components/HomePageMobile/Mbar/page";

export default function Home() {
  return (
    <div>
      {/* ---------- 💻 Desktop View (md and up) ---------- */}
      <div className="hidden md:block">
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
          <Footer />
        </main>
      </div>

      {/* ---------- 📱 Mobile View (below md) ---------- */}
      <div className="block md:hidden overflow-x-hidden">
        <Mheader />
        <main className="pt-21">
          <MbelowHeader />
          <div
            style={{
              marginTop: 400,
              position: "relative",
              zIndex: 99,
              borderTopLeftRadius: "50px",
              borderTopRightRadius: "50px",
              boxShadow: "0 -4px 21px rgba(0, 4, 21, 0.1)",
              overflow: "hidden",
            }}
          >
            <MphotoRoom />
            <Mfooter />
          </div>
        </main>
      </div>
    </div>
  );
}
