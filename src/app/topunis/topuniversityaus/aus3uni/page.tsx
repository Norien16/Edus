import Footer from "@/components/footer/page";
import TU31 from "@/components/TopUnis/TopUniversityAus/TopUni3Aus/TU31/page";
import TU32 from "@/components/TopUnis/TopUniversityAus/TopUni3Aus/TU32/page";
import TU33 from "@/components/TopUnis/TopUniversityAus/TopUni3Aus/TU33/page";
import TU34 from "@/components/TopUnis/TopUniversityAus/TopUni3Aus/TU34/page";
import TU35 from "@/components/TopUnis/TopUniversityAus/TopUni3Aus/TU35/page";
import TU36 from "@/components/TopUnis/TopUniversityAus/TopUni3Aus/TU36/page";
import TU37 from "@/components/TopUnis/TopUniversityAus/TopUni3Aus/TU37/page";
import TU38 from "@/components/TopUnis/TopUniversityAus/TopUni3Aus/TU38/page";

export default function Aus3Uni () {
    return (
        <div className="pt-21">
            <TU31 />
            <TU32 />
            <TU33 />
            <TU34 />
            <TU35 />
            <TU36 />
            <TU37 />
            <TU38 />
            <Footer />
        </div>
    )
}