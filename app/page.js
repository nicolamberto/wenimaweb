import Image from "next/image";
import NavBar from "./components/navbar/NavBar";
import Participants from "./components/participants/Participants";
import Header from "./components/header/Header";
import TextCarousel from "./components/text-carousel/TextCarousel";
import { ScrollServices } from "./components/scroll/ScrollServices";
import { Projects } from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (

    <div className="flex flex-col justify-start items-center relative z-10 ">
      <NavBar />
      <Header />
      <div className="bg-[#f1eaf0] bg-[url('/images/bg/bgrugoso.png')] bg-repeat w-full h-full z-0">
        <Participants />
        <div className="w-full bg-[#080a00]">
          <TextCarousel />
          <ScrollServices />
        </div>
        <Projects />
        <Contact />
        {/*        <TypewriterText
          text="Bienvenidos a mi sitio"
          typeSpeed={60}  
          delay={1000}
          className="text-[40px]"
          once={true} // o false si querés que se repita al hacer scroll
        /> */}
      </div>
    </div>
  );
}
