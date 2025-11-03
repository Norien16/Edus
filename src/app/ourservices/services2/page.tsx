import ExtraComponent from "@/components/ExtraComponent/page";
import Footer from "@/components/footer/page";
import Slide3Page0 from "@/components/OurServices/Services2/Slide3Page0/page";
import Slide3Page1 from "@/components/OurServices/Services2/Slide3Page1/page";
import Slide3Page2 from "@/components/OurServices/Services2/Slide3Page2/page";
import Slide3Page3 from "@/components/OurServices/Services2/Slide3Page3/page";

export default function Services2 () {
    return (
        <div className="pt-21">
            <Slide3Page0 />
            <Slide3Page1 />
            <Slide3Page2 />
            <Slide3Page3 />
            <Footer />
        </div>
    )
}