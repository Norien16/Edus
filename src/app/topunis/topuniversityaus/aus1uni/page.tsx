import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";
import TU1 from "@/components/TopUnis/TopUniversityAus/TopUni1Aus/TU1/page";
import TU2 from "@/components/TopUnis/TopUniversityAus/TopUni1Aus/TU2/page";
import TU3 from "@/components/TopUnis/TopUniversityAus/TopUni1Aus/TU3/page";
import TU4 from "@/components/TopUnis/TopUniversityAus/TopUni1Aus/TU4/page";
import TU5 from "@/components/TopUnis/TopUniversityAus/TopUni1Aus/TU5/page";
import TU6 from "@/components/TopUnis/TopUniversityAus/TopUni1Aus/TU6/page";
import TU8 from "@/components/TopUnis/TopUniversityAus/TopUni1Aus/TU8/page";
import Tu1M from "@/components/TopUniversityMobile/TopUniversityAusMobile/TopUni1M/Tu1M/page";

export default function Aus1Uni() {
    return (
        <>
        <div className="pt-40 hidden md:block">
            <TU1 />
            <TU2 />
            <TU8 />
            <TU3 />
            <TU4 />
            <TU5 />
            <TU6 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <Tu1M />
            </main>
        </div>
        </>
    )
}