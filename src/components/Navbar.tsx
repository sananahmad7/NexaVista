import Link from "next/link";

import React from 'react'

const Navbar = () => {
  return (
     <nav className="flex gap-4 p-4 bg-gray-200">
          <Link href="/">Home</Link>
          <Link href="/About">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
  )
}

export default Navbar