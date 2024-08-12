import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <nav
        className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
        id="nav"
      >
        <div className="flex items-center justify-between py-4">
          <ul className="flex flex-row space-x-6 pr-10">
            <li className="cursor-pointer text-base">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer text-base">
              <Link href="/work">Work</Link>
            </li>
            <li className="cursor-pointer text-base">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="cursor-pointer text-base">
              <Link href="/guestbook">Guestbook</Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  );
}
