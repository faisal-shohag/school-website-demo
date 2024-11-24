import GlimpseOfActivities from "@/components/common/activities";
import Footer from "@/components/common/footer";
import Marquee from "@/components/common/marquee";
import NewsAndActivities from "@/components/common/news-activities";
import { AutoSliderCarousel } from "@/components/common/slider";
import AnimatedStats from "@/components/common/stats";
import { WelcomeSection } from "@/components/common/welcome";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <div className="section">
      <Marquee/>
      <AutoSliderCarousel/>
      <AnimatedStats/>
      <WelcomeSection/>
      <GlimpseOfActivities/>
      <NewsAndActivities/>
  
      </div>
      <Footer/>
    </div>
  );
}
