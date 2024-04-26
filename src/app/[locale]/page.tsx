import About from "@/app/[locale]/about-me/about";
import Contact from "@/app/[locale]/contact/page";
import Education from "@/app/[locale]/education/page";
import NavbarComponent from "@/app/[locale]/navbar";
import Presentation from "@/app/[locale]/presentation/page";
import Project from "@/app/[locale]/project/page";
import Skills from "@/app/[locale]/skills/page";

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
