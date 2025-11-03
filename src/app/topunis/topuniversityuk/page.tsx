import Footer from "@/components/footer/page";
import FaQs from "@/components/Homepage/FaQs/page";
import TuUk1 from "@/components/TopUnis/TopUniversityUk/TuUk1/page";
import TuUk2 from "@/components/TopUnis/TopUniversityUk/TuUk2/page";
import TuUk3 from "@/components/TopUnis/TopUniversityUk/TuUk3/page";

export default function TopUniversityNz() {
    return (
        <div className="pt-21">
            <TuUk1 />
            <TuUk2 />
            <TuUk3 />
            <FaQs />
            <Footer />
        </div>
    )
}