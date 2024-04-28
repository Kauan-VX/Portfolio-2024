"use client";

import React from "react";

import { FloatingNav } from "@/components/ui/floating-navbar";
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
    { name: `${t("contact")}`, link: "#contact" },
  ];

  return <FloatingNav navItems={menuItems} />;
}
