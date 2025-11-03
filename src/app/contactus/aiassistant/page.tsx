import AiPage1 from "@/components/ContactUs/AiAssistant/AiPage1/page";
import AiPage2 from "@/components/ContactUs/AiAssistant/AiPage2/page";
import AiMpage1 from "@/components/ContatUsMobile/AiAssistantMobile/AiMpage1/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function AiAssistant () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <AiPage1 />
            <AiPage2 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <AiMpage1 />
            </main>
        </div>
        </>
    )
}