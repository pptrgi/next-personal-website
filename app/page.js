import Image from "next/image";
import Hero from "./components/Hero";
import About from "./components/About.";
import Tools from "./components/tools/Tools";
import Projects from "./components/projects/Projects";
import CallToAction from "./components/CallToAction";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Contact />
      <CallToAction />
    </main>
  );
}
