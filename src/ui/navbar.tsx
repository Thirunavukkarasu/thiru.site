import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-5xl">
      <div className="flex items-center justify-between py-4">
        <ul className="flex flex-row space-x-10">
          <li className="cursor-pointer text-base">
            <Link href="/">home</Link>
          </li>
          <li className="cursor-pointer text-base">
            <Link href="/work">work</Link>
          </li>
          <li className="cursor-pointer text-base">
            <Link href="/blog">blog</Link>
          </li>
          <li className="cursor-pointer text-base">
            <Link href="/guestbook">guestbook</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
