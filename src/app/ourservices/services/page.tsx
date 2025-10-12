import ExtraComponent from "@/components/ExtraComponent/page";
import Slide0 from "@/components/Services/Slide0/page";
import Slide1 from "@/components/Services/Slide1/page";
import Slide2 from "@/components/Services/Slide2/page";
import Slide3 from "@/components/Services/Slide3/page";

export default function Services () {
    return (
        <div className="pt-21">
            <Slide0 />
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <ExtraComponent />
        </div>
    )
}