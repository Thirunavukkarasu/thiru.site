"use client";

import React from "react";
import { usePathname } from "next/navigation";

import { navLinks, socialLinks } from "../constants/data";
import Link from "next/link";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="bg-gray-800 text-white py-6 border-b-2 border-gray-800 sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-medium">
              <span className="text-green-300">Thiru</span>
              <span className="text-gray-300">navukkarasu</span>
            </h1>
          </div>
        </Link>
        <div>
          <ul className="flex space-x-4">
            {navLinks.map((navLink, idx) => (
              <li
                key={idx}
                className={
                  pathName === navLink.link
                    ? "text-green-400"
                    : "hover:text-green-300"
                }
              >
                <Link href={navLink.link}>
                  {pathName === navLink.link
                    ? `< ${navLink.title} >`
                    : navLink.title}
                </Link>
              </li>
            ))}
            <li className="hover:text-green-300">
              <a href="https://blog.thirunavukkarasu.com" target="_blank">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-row items-center space-x-4">
            {socialLinks.map((socialLink, idx) => (
              <li key={idx}>
                <a
                  href={socialLink.url}
                  target="_blank"
                  className="text-base font-normal flex flex-row items-center space-x-2"
                >
                  <span>{socialLink.icon}</span>
                  <span>{socialLink.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
