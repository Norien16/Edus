import Footer from "@/components/footer/page";
import FaQs from "@/components/Homepage/FaQs/page";
import TuCan1 from "@/components/TopUnis/TopUniversityCan/TuCan1/page";
import TuCan2 from "@/components/TopUnis/TopUniversityCan/TuCan2/page";
import TuCan3 from "@/components/TopUnis/TopUniversityCan/TuCan3/page";
import TuCan4 from "@/components/TopUnis/TopUniversityCan/TuCan4/page";

export default function TopUniversityCan() {
    return (
        <div className="pt-21">
            <TuCan1 />
            <TuCan2 />
            <TuCan3 />
            <TuCan4 />
            <Footer />
        </div>
    )
}