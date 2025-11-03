import Footer from "@/components/footer/page";
import FaQs from "@/components/Homepage/FaQs/page";
import TuGer1 from "@/components/TopUnis/TopUniversityGer/TuGer1/page";
import TuGer2 from "@/components/TopUnis/TopUniversityGer/TuGer2/page";
import TuGer3 from "@/components/TopUnis/TopUniversityGer/TuGer3/page";

export default function TopUniversityGer () {
    return (
    <div className="pt-21">
        <TuGer1 />
        <TuGer2 />
        <TuGer3 />
        <FaQs />
        <Footer />
    </div>
    )
}