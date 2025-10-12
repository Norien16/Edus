import AiPage1 from "@/components/AiAssistant/AiPage1/page";
import AiPage2 from "@/components/AiAssistant/AiPage2/page";
import Footer from "@/components/footer/page";

export default function AiAssistant () {
    return (
        <div className="pt-21">
            <AiPage1 />
            <AiPage2 />
            <Footer />
        </div>
    )
}