"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { useTranslations } from "next-intl";

export default function NavbarComponent() {
  const t = useTranslations("Navbar");

  const menuItems = [
    { name: `${t("about")}`, link: "#about" },
    { name: `${t("education")}`, link: "#education" },
    { name: `${t("skills")}`, link: "#skills" },
    { name: `${t("projects")}`, link: "#projects" },
    { name: `${t("contact")}`, link: "#contact" },
  ];

  return <FloatingNav navItems={menuItems} />;
}
