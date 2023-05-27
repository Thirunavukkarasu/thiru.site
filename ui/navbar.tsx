import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-5xl">
      <div className="flex items-center justify-between py-4">
        <div className="text-lg font-bold text-gray-600">
          <Link href="/">Thiru</Link>
        </div>
        <ul className="flex flex-row space-x-10">
          <li className="cursor-pointer text-base">
            <Link href="/blog">blog</Link>
          </li>
          <li className="cursor-pointer text-base">
            <Link href="/about">about</Link>
          </li>
          <li className="cursor-pointer text-base">guestbook</li>
        </ul>
      </div>
    </nav>
  )
}
