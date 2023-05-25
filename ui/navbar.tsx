import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-5xl">
      <div className="flex justify-between py-10">
        <div className="text-base font-semibold uppercase tracking-wider text-pink-400">
          <Link href="/">Thiru</Link>
        </div>
        <ul className="flex flex-row space-x-10">
          <li className="cursor-pointer text-sm font-medium uppercase tracking-wider">
            <Link href="/blog">Blog</Link>
          </li>
          <li className="cursor-pointer text-sm font-medium uppercase tracking-wider">
            <Link href="/about">About</Link>
          </li>
          <li className="cursor-pointer text-sm font-medium uppercase tracking-wider">
            Guestbook
          </li>
        </ul>
      </div>
    </nav>
  )
}
