import ContactUsPage from "@/components/ContactUs/page";
import ContactUsPageMobile from "@/components/ContatUsMobile/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function ContactUs () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <ContactUsPage />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <ContactUsPageMobile />
            </main>
        </div>
        </>
    )
}