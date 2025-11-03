import AiTest1 from "@/components/ContactUs/AiAssistant/AiTest/AiTest1/page";
import AiTest2 from "@/components/ContactUs/AiAssistant/AiTest/AiTest2/page";
import AiTest1M from "@/components/ContatUsMobile/AiAssistantMobile/AiTestMobile/AiTest1M/page";
import Footer from "@/components/footer/page";
import Mheader from "@/components/HomePageMobile/Mheader/page";

export default function AiTest () {
    return (
        <>
        <div className="pt-21 hidden md:block">
            <AiTest1 />
            <AiTest2 />
            <Footer />
        </div>
        <div className="block md:hidden overflow-x-hidden">
            <Mheader />
            <main className="pt-21">
                <AiTest1M />
            </main>
        </div>
        </>
    )
}