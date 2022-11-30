import React from "react";
import Link from "next/link";

import { navLinks, socialLinks } from "../constants/data";

export default function Navbar() {
  const router = {
    pathname: "/",
  };

  return (
    <div className="bg-gray-900 text-white py-6 border-b border-b-gray-300">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/">
          <div className="flex flex-col items-start">
            <h1 className="text-3xl font-bold">Thirunavukkarasu</h1>
            <h4 className="text-lg">Developer & Architect</h4>
          </div>
        </Link>
        <div>
          <ul className="flex space-x-4">
            {navLinks.map((navLink, idx) => (
              <li
                key={idx}
                className={
                  router?.pathname === navLink.link
                    ? "text-indigo-400"
                    : "hover:text-indigo-500"
                }
              >
                <Link href={navLink.link}>{navLink.title}</Link>
              </li>
            ))}
            <li className="hover:text-indigo-500">
              <a href="https://blog.thirunavukkarasu.com">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-row items-center space-x-4">
            {socialLinks.map((socialLink, idx) => (
              <li key={idx}>
                <a href={socialLink.url} className="text-base font-normal">
                  {socialLink.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
