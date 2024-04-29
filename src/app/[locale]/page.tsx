import dynamic from "next/dynamic";
import "./globals.scss";

const NavbarComponent = dynamic(() => import("./navbar"));

const Skills = dynamic(() => import("./skills/page"));

const Project = dynamic(() => import("./project/page"));

const Presentation = dynamic(() => import("./presentation/page"));

const Education = dynamic(() => import("./education/page"));

const Contact = dynamic(() => import("./contact/page"));

const About = dynamic(() => import("./about-me/page"));

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <Presentation />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}
