"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
    name: "Work",
    href: "/work",
  },
  {
    name: "Uses",
    href: "/uses",
  },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <header className="mb-16 tracking-tight flex items-center justify-between space-x-12 mt-10">
      <Link href="/" className="flex-1">
        <Image
          src="https://avatars.githubusercontent.com/u/3192747?v=4"
          alt="Thiru's avatar"
          width={100}
          height={100}
          className="rounded-full w-12 h-12"
        />
      </Link>
      <nav
        className="flex-1 flex justify-center border rounded-3xl shadow-lg py-2"
        id="nav"
      >
        <ul className="flex flex-row space-x-6 pr-10">
          {navLinks.map((link) => {
            const isActive = pathName === link.href;
            return (
              <li key={link.href} className="cursor-pointer text-base">
                <Link
                  href={link.href}
                  className={isActive ? "text-orange-700" : "text-black"}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/*Theme Toggle*/}
      <div className="flex justify-end md:flex-1">
        <div className="pointer-events-auto">
          <button
            type="button"
            aria-label="Switch to light theme"
            className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 5v14m0 0l-7-7m7 7l7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
