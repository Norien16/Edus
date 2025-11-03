import Footer from "@/components/footer/page";
import FaQs from "@/components/Homepage/FaQs/page";
import MbelowHeader from "@/components/HomePageMobile/MbelowHeader/page";
import Mfooter from "@/components/HomePageMobile/Mfooter/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";
import TuAus1 from "@/components/TopUnis/TopUniversityAus/TuAus1/page";
import TuAus2 from "@/components/TopUnis/TopUniversityAus/TuAus2/page";
import TuAus3 from "@/components/TopUnis/TopUniversityAus/TuAus3/page";
import TuAus4 from "@/components/TopUnis/TopUniversityAus/TuAus4/page";
import TuAus1M from "@/components/TopUniversityMobile/TopUniversityAusMobile/TuAus1M/page";

export default function TopUniversityAus () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <TuAus1 />
            <TuAus2 />
            <TuAus3 />
            <TuAus4 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <TuAus1M />
            </main>
        </div>
        </>
    )
}