import Footer from "@/components/footer/page";
import FaQs from "@/components/Homepage/FaQs/page";
import TuNz1 from "@/components/TopUnis/TopUniversityNz/TuNz1/page";
import TuNz2 from "@/components/TopUnis/TopUniversityNz/TuNz2/page";
import TuNz3 from "@/components/TopUnis/TopUniversityNz/TuNz3/page";

export default function TopUniversityNz () {
    return (
        <div className="pt-21">
            <TuNz1 />
            <TuNz2 />
            <TuNz3 />
            <FaQs />
            <Footer />
        </div>
    )
}