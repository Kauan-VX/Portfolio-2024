'use client'



import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react'
import React from 'react'
import ThemeSwitcher from '../theme-switcher'

import { motion } from 'framer-motion'
import { Logo } from './logo'

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    'Sobre',
    'Educação',
    'Skills',
    'Projetos',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ]

 

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className='smMax:hidden'>
        <Logo/>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3 justify-center">
       <NavbarBrand>
     <Logo/>
       </NavbarBrand>
     </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
    
        <NavbarItem isActive>
          <motion.div>
          <Link className='text-lg' href="#" aria-current="page">
            Sobre
          </Link>
          </motion.div>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-lg' color="foreground" href="#">
            Educação
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-lg' color="foreground" href="#">
         Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-lg' color="foreground" href="#">
           Projetos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-lg' color="foreground" href="#">
     Conecte-se
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
   
        <NavbarItem>
        <ThemeSwitcher></ThemeSwitcher>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu  >
        {menuItems.map((item, index) => (
          <NavbarMenuItem  key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
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
