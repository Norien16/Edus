import Footer from "@/components/footer/page";
import TU111 from "@/components/TopUnis/TopUniversityAus/TopUni11Aus/TU111/page";
import TU112 from "@/components/TopUnis/TopUniversityAus/TopUni11Aus/TU112/page";
import TU113 from "@/components/TopUnis/TopUniversityAus/TopUni11Aus/TU113/page";
import TU114 from "@/components/TopUnis/TopUniversityAus/TopUni11Aus/TU114/page";
import TU115 from "@/components/TopUnis/TopUniversityAus/TopUni11Aus/TU115/page";

export default function Aus11Uni () {
    return (
        <div className="pt-21">
            <TU111 />
            <TU112 />
            <TU113 />
            <TU114 />
            <TU115 />
            <Footer />
        </div>
    )
}