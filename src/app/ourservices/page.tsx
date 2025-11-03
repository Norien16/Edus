import OurServices from "@/components/OurServices/page";
import OS1 from "@/components/OurServicesMobile/OS1/page";

export default function OurService () {
  return (
    <>
    <div className="hidden md:block">
      <OurServices />
    </div>
    <div className="block md:hidden overflow-x-hidden">
      <OS1 />
    </div>
    </>
  )
}