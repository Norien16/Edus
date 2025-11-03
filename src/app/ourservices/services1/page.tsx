import ExtraComponent from "@/components/ExtraComponent/page";
import Footer from "@/components/footer/page";
import Slide2Page0 from "@/components/OurServices/Services1/Slide2Page0/page";
import Slide2Page1 from "@/components/OurServices/Services1/Slide2Page1/page";
import Slide2Page2 from "@/components/OurServices/Services1/Slide2Page2/page";
import Slide2Page3 from "@/components/OurServices/Services1/Slide2Page3/page";

export default function Services () {
    return (
        <div className="pt-21">
            <Slide2Page0 />
            <Slide2Page1 />
            <Slide2Page2 />
            <Slide2Page3 />
            <Footer />
        </div>
    )
}