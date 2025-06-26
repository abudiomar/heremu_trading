'use client';

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeremuLogo from "./HeremuLogo";

const menuItems = [
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function HeroNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const handleAnchorClick = (href: string) => {
    // Force close the menu by setting state and triggering the change
    setIsMenuOpen(false);
    // Also manually trigger the onMenuOpenChange to ensure HeroUI syncs
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <Navbar 
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-white/80 backdrop-blur-md shadow-sm"
      maxWidth="2xl"
      position="sticky"
    >
      {/* Brand */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="flex items-center space-x-3">
            <HeremuLogo className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">Heremu</h1>
              <p className="text-xs text-blue-600 font-medium">CHEMICALS</p>
            </div>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        {menuItems.map((item) => (
          <NavbarItem key={item.name} isActive={pathname === item.href}>
            <Link
              href={item.href}
              className={`text-gray-600 hover:text-blue-600 transition-colors ${
                pathname === item.href ? "text-blue-600 font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* CTA Button */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden sm:flex">
          <Link href="#contact">
            <Button color="primary" variant="solid" size="md">
              Get Quote
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu className="bg-white/95 backdrop-blur-md">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            {item.href.startsWith('#') ? (
              <button
                className={`w-full text-lg text-left ${
                  pathname === item.href 
                    ? "text-blue-600 font-semibold" 
                    : "text-gray-600"
                } hover:text-blue-600 transition-colors`}
                onClick={() => {
                  console.log('Anchor button clicked:', item.href);
                  handleAnchorClick(item.href);
                }}
              >
                {item.name}
              </button>
            ) : (
              <Link
                className={`w-full text-lg ${
                  pathname === item.href 
                    ? "text-blue-600 font-semibold" 
                    : "text-gray-600"
                } hover:text-blue-600 transition-colors`}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            )}
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Button 
            color="primary" 
            variant="solid" 
            size="lg" 
            className="w-full mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Quote
          </Button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
} 