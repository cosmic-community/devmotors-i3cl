'use client'

import Link from 'next/link'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/testimonials', label: 'Testimonials' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 text-xl font-extrabold text-brand-700">
          <span className="text-2xl">🔧</span>
          Devmotors
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <div className="container-page py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-gray-700 hover:text-brand-700"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}