'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'top-0 bg-[#0A0A0A]/70 backdrop-blur-lg shadow-lg py-2 px-6'
          : 'top-0 bg-transparent py-4 px-8'
          }`}
      >
        <motion.div
          className="flex justify-between items-center relative z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo */}
          <Link href="/" className="flex gap-2 text-xl font-bold text-white ml-4 md:ml-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 3738 3236">
              <path fill="#fff" fillRule="evenodd"
                d="M2530.44 1145.64 1869 0 475.379 2413.82c131.695 51.95 260.914 81.02 384.699 81.61 245.352 1.17 513.692-109.55 774.302-492.04 271.17-397.97 579.18-672.62 896.06-857.75Zm235.57 408.02c-260.46 152.82-514.92 381.09-742.39 714.95-331.66 486.76-735.71 699.86-1165.784 697.82-214.975-1.03-423.92-55.96-619.932-141.29L.982 3235.5H3737.02l-971.01-1681.84Z"
                clipRule="evenodd"></path>
            </svg>
            BuildFast
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-white hover:text-gray-300">
              Pricing
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              Features
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              About
            </Link>
            <Link href="#" className="text-white hover:text-gray-300">
              Blog
            </Link>
          </nav>

          {/* Right Section */}
          <aside className="flex items-center gap-4">
            <Link
              href="/sign-in"
              className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Get Started
              </span>
            </Link>
            {/* Mobile Menu Icon */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </aside>
        </motion.div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-[#0A0A0A] text-white p-4 rounded-b-lg shadow-lg md:hidden"
          >
            <ul className="flex flex-col space-y-4 text-center">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </motion.header>
    </>
  )
}
