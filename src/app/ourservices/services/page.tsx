import ExtraComponent from "@/components/ExtraComponent/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";
import Slide0 from "@/components/OurServices/Services/Slide0/page";
import Slide1 from "@/components/OurServices/Services/Slide1/page";
import Slide2 from "@/components/OurServices/Services/Slide2/page";
import Slide3 from "@/components/OurServices/Services/Slide3/page";
import Slide0M from "@/components/OurServicesMobile/ServicesMobile/Slide0M/page";

export default function Services () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <Slide0 />
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <Slide0M />
            </main>
        </div>
        </>
    )
}