"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Domains",
    href: "/domains",
  },
  {
    name: "Uses",
    href: "/uses",
  },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <header className="py-8">
      <nav className="flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold nav-link">
          Thirunavukkarasu
        </Link>

        <div className="flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "font-medium" : ""}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
