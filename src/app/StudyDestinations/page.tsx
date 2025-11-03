import ExtraComponent from "@/components/ExtraComponent/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";
import BelowHeaderSD from "@/components/Study_Destinations/BelowHeaderSD/page";
import ExploreDestination from "@/components/Study_Destinations/ExploreDestination/page";
import WhyStudyAbroad from "@/components/Study_Destinations/WhyStudyAbroad/page";
import BelowHeaderSdM from "@/components/StudyDestinationsMobile/BElowHeaderSdM/page";

export default function StudyDestinations () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <BelowHeaderSD />
            <ExploreDestination />
            <WhyStudyAbroad />
            <ExtraComponent />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <BelowHeaderSdM />
            </main>
        </div>
        </>
    )
}