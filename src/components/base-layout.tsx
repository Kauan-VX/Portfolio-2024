import About from "@/app/[locale]/about-me/about";
import Contact from "@/app/[locale]/contact/page";
import Education from "@/app/[locale]/education/page";
import NavbarComponent from "@/app/[locale]/navbar";
import Presentation from "@/app/[locale]/presentation/page";
import Project from "@/app/[locale]/project/page";
import Skills from "@/app/[locale]/skills/page";
import { ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}
export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <>
      <NavbarComponent />
      <Presentation />
      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
      {children}
    </>
  );
}
