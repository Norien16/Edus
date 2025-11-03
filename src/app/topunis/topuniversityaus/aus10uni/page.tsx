import Footer from "@/components/footer/page";
import TU101 from "@/components/TopUnis/TopUniversityAus/TopUni10Aus/TU101/page";
import TU102 from "@/components/TopUnis/TopUniversityAus/TopUni10Aus/TU102/page";
import TU103 from "@/components/TopUnis/TopUniversityAus/TopUni10Aus/TU103/page";
import TU104 from "@/components/TopUnis/TopUniversityAus/TopUni10Aus/Tu104/page";
import TU105 from "@/components/TopUnis/TopUniversityAus/TopUni10Aus/TU105/page";
import TU106 from "@/components/TopUnis/TopUniversityAus/TopUni10Aus/TU106/page";
import TU107 from "@/components/TopUnis/TopUniversityAus/TopUni10Aus/TU107/page";
import TU108 from "@/components/TopUnis/TopUniversityAus/TopUni10Aus/TU108/page";

export default function Aus10Uni () {
    return (
        <div className="pt-21">
            <TU101 />
            <TU102 />
            <TU103 />
            <TU104 />
            <TU105 />
            <TU106 />
            <TU107 />
            <TU108 />
            <Footer />
        </div>
    )
}