import Hero from "../components/Hero";
import About from "../components/about/About.";
import Tools from "../components/tools/Tools";
import Projects from "../components/projects/Projects";
import CallToAction from "../components/CallToAction";
import Contact from "../components/Contact";
import Testimonials from "../components/testimonials/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Testimonials />
      <Contact />
      <CallToAction />
    </main>
  );
}
