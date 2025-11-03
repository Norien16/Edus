import Footer from "@/components/footer/page";
import FaQs from "@/components/Homepage/FaQs/page";
import TuUsa1 from "@/components/TopUnis/TopUniversityUsa/TuUsa1/page";
import TuUsa2 from "@/components/TopUnis/TopUniversityUsa/TuUsa2/page";
import TuUsa3 from "@/components/TopUnis/TopUniversityUsa/TuUsa3/page";

export default function TopUniversityUsa() {
    return (
        <div className="pt-21">
            <TuUsa1 />
            <TuUsa2 />
            <TuUsa3 />
            <FaQs />
            <Footer />
        </div>
    )
}