import Image from "next/image";
import Hero from "@/components/Hero/Hero";
import EndCard from "@/components/EndCard/EndCard";
import AboutMe from "@/components/AboutMe/AboutMe";
import Skill from "@/components/Skill/Skill";
import Navbar from "@/components/Navbar/Navbar";
import Portofolio from "@/components/Portofolio/Portofolio";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skill />
      <Portofolio />
      <AboutMe />
      <EndCard />
    </div>
  );
}
