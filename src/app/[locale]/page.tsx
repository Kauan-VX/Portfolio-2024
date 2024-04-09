import About from "./about-me/about";
import Connect from "./contact/page";
import Education from "./education/page";
import NavbarComponent from "./navbar";
import Presentation from "./presentation/page";
import Project from "./project/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <Presentation />
      <About />
      <Education />
      <Skills />
      <Project />
      <Connect />
    </>
  );
}
