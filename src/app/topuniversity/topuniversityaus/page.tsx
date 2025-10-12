import Footer from "@/components/footer/page";
import TuAus1 from "@/components/TopUniversity/TopUniversityAus/TuAus1/page";
import TuAus2 from "@/components/TopUniversity/TopUniversityAus/TuAus2/page";
import TuAus3 from "@/components/TopUniversity/TopUniversityAus/TuAus3/page";
import TuAus4 from "@/components/TopUniversity/TopUniversityAus/TuAus4/page";

export default function TopUniversityAus () {
    return (
        <div className="pt-21">
            <TuAus1 />
            <TuAus2 />
            <TuAus3 />
            <TuAus4 />
            <Footer />
        </div>
    )
}