
"use client";
import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import ThemeSwitcher from "../theme-switcher";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="dark:text-dark-text text-light-text font-medium flex z-40 w-full h-auto items-center p-2 justify-center data-[menu-open=true]:border-none sticky top-0 inset-x-0 backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70"
    >
      <NavbarContent className="sm:hidden flex justify-between "  >
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <Image width={48} height={48} src="/logo/kx.svg" alt="Logo"></Image>
       
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="navbar-itens hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          
        <Image width={48} height={48} alt="Logo" className="w-full max-w-[4rem]" src="/logo/kx.svg"></Image>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Apresentação
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Educação
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
           Experiência
          </Link>
        </NavbarItem>  <NavbarItem>
          <Link color="foreground" href="#">
          Skills
          </Link>
        </NavbarItem>  <NavbarItem>
          <Link color="foreground" href="#">
         Projetos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
       Contato
          </Link>
        </NavbarItem>
        <NavbarItem>
          
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
     <ThemeSwitcher></ThemeSwitcher>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}