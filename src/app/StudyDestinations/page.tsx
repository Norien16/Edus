import ExtraComponent from "@/components/ExtraComponent/page";
import BelowHeaderSD from "@/components/Study_Destinations/BelowHeaderSD/page";
import ExploreDestination from "@/components/Study_Destinations/ExploreDestination/page";
import WhyStudyAbroad from "@/components/Study_Destinations/WhyStudyAbroad/page";

export default function StudyDestinations () {
    return (
        <div className="pt-21">
            <BelowHeaderSD />
            <ExploreDestination />
            <WhyStudyAbroad />
            <ExtraComponent />
        </div>
    )
}