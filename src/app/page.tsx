"use client";
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from "next-themes";
import Connect from './contact/page';
import Education from './education/page';
import NavbarComponent from './navbar/page';
import Presentation from './presentation/page';
import Project from './project/page';
import Skills from './skills/page';


export default function Home() {
  return (
<NextUIProvider className="">
      <NextThemesProvider attribute="class" defaultTheme="dark">
    <NavbarComponent></NavbarComponent>
    <Presentation></Presentation>
    {/* <About></About> */}
    <Education></Education>
    <Skills></Skills>
    <Project></Project>
    <Connect></Connect>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
