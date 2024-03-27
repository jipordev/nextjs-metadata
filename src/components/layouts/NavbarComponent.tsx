"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Corrected import
import { NavbarMenu } from "./navbar/Navbar";
import Link from "next/link";

export default function NavbarComponent() {
  const menu = NavbarMenu; // Assuming NavbarMenu is an array
  const pathname = usePathname();

  if (pathname === "/dashboard") return null; // Corrected condition

  return (
    <Navbar className="bg-blue-200">
      <NavbarBrand>
        <Image width={40} className="mr-4 rounded-full" height={40} src={"/assets/pic.jpg"} alt={""} />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menu.map((item, index) => ( // Corrected mapping function syntax
          <NavbarItem key={index}>
            <Link
              color="foreground"
              href={item.path}
              className={`${pathname === "/" && "font-bold text-blue-800"}`}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        
        <NavbarItem>
          <Button as={Link} color="primary" href="/dashboard" variant="flat">
            Dashboard
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
