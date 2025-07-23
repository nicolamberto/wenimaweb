import Image from "next/image";
import NavBar from "./components/navbar/NavBar";
import Scroll from "./components/scroll/Scroll";
import Participants from "./components/participants/Participants";
import Header from "./components/header/Header";
import TextCarousel from "./components/text-carousel/TextCarousel";
import { ScrollServices } from "./components/scroll/ScrollServices";
import { Projects } from "./components/projects/Projects";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center pb-40 relative z-20 bg-[#f1eaf0] bg-[url('/images/bg/bgrugoso.png')] bg-repeat">
      <NavBar />
      <Header />
      <Participants />
      <div className="w-full bg-[#0b153a]">
        <TextCarousel />
        <ScrollServices />
      </div>
      <Projects />
    </div>
  );
}
