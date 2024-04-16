"use client";

import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import React from "react";
import ThemeSwitcher from "../../../components/theme/theme-switcher";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const t = useTranslations("Navbar");

  const Logo = dynamic(() => import("./logo").then((module) => module.Logo), {
    ssr: false,
  });

  const menuItems = [
    { name: `${t("about")}`, link: "#about" },
    { name: `${t("education")}`, link: "#education" },
    { name: `${t("skills")}`, link: "#skills" },
    { name: `${t("projects")}`, link: "#projects" },
    { name: `${t("contact")}`, link: "#conect" },
  ];

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="shadow-sm"
    >
      <NavbarContent className="!flex-grow-0">
        <NavbarItem className="z-10 size-10">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="navbarCollapseMin:hidden"
          />
        </NavbarItem>
        <NavbarItem>
          <NavbarBrand className="navbarCollapseMax:hidden ">
            <Logo />
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="navbarCollapseMin:hidden w-full !justify-center">
        <NavbarItem>
          <NavbarBrand className="!justify-center">
            <Logo />
          </NavbarBrand>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex navbarCollapseMax:hidden gap-4"
        justify="center"
      >
        <NavbarItem isActive>
          <motion.div>
            <Link
              className="text-lg navbarCollapseMax:text-sm"
              color="foreground"
              href="#about"
            >
              {t("about")}
            </Link>
          </motion.div>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-lg navbarCollapseMax:text-sm"
            color="foreground"
            href="#education"
          >
            {t("education")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-lg navbarCollapseMax:text-sm"
            color="foreground"
            href="#skills"
          >
            {t("skills")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-lg navbarCollapseMax:text-sm"
            color="foreground"
            href="#projects"
          >
            {t("projects")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-lg navbarCollapseMax:text-sm"
            color="foreground"
            href="#conect"
          >
            {t("contact")}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="flex items-center justify-center gap-0  !flex-grow-0">
        <NavbarItem>
          <ThemeSwitcher></ThemeSwitcher>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full dark:text-dark-text text-light-text font-semibold text-xl text-center"
              href={item.link}
              size="lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
