import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const navLinks = [{
  title: "About",
  link: "/about"
}, {
  title: "Projects",
  link: "/projects"
}, {
  title: "Experience",
  link: "/experience"
}, {
  title: "Contact",
  link: "/contact"
}];

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="bg-gray-100 py-6 border-b border-b-gray-300">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/">
          <a>
            <div className="flex flex-col items-start">
              <h1 className="text-3xl font-bold">Thirunavukkarasu</h1>
              <h4 className="text-lg">Developer & Architect</h4>
            </div>
          </a>
        </Link>
        <div>
          <ul className="flex space-x-4">
            {navLinks.map((navLink, idx) => (
              <li key={idx} className={router?.pathname === navLink.link ? "text-indigo-400" : "hover:text-indigo-500"}>
                <Link href={navLink.link}>
                  <a>{navLink.title}</a>
                </Link>
              </li>
            ))}
            <li className="hover:text-indigo-500">
              <a href="https://blog.thirunavukkarasu.com">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-row items-center space-x-4">
            <li>
              <a href="/" className="text-base font-normal text-gray-600">
                <FaInstagram />
              </a>
            </li>
            <li><a href="/" className="text-base font-normal text-gray-600"><FaLinkedin /></a></li>
            <li><a href="/" className="text-base font-normal text-gray-600"><FaTwitter /></a></li>
          </ul>
        </div>
      </div>
    </div >
  );
}
