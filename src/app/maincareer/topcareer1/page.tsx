import TC1Page0 from "@/components/Career/TopCareer1/TC1Page0/page";
import TC1Page1 from "@/components/Career/TopCareer1/TC1Page1/page";
import TC1Page2 from "@/components/Career/TopCareer1/TC1Page2/page";
import Tc1Mpage0 from "@/components/CareerMobile/TopCareer1Mobile/Tc1Mpage0/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function TopCareer () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <TC1Page0 />
            <TC1Page1 />
            <TC1Page2 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <Tc1Mpage0 />
            </main>
        </div>
        </>
    )
}