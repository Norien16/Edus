import Page0 from "@/components/CountryPage/Page0/page";
import Page1 from "@/components/CountryPage/Page1/page";
import Page15 from "@/components/CountryPage/Page15/page";
import Page2 from "@/components/CountryPage/Page2/page";
import Page4 from "@/components/CountryPage/Page4/page";
import Page5 from "@/components/CountryPage/Page5/page";
import Page6 from "@/components/CountryPage/Page6/page";
import Page7 from "@/components/CountryPage/Page7/page";
import Page0M from "@/components/CountryPageMobile/Page0M/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function CountryPage1 () {
    return (
        <>
        <div className="pt-23 hidden md:block">
            <Page0 />
            <Page1 />
            <Page2 />
            <Page15 />
            <Page4 />
            <Page5 />
            <Page6 />
            <Page7 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <Page0M />
            </main>
        </div>
        </>
    )
}