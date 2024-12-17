"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/70 backdrop-blur-lg py-2 px-4 shadow-lg"
          : "bg-black/40 py-4 px-6"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <p className="text-3xl font-bold text-white">Thumbnail AI</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <Link href="#" className="text-white hover:text-gray-400">
            Pricing
          </Link>
          <Link href="#" className="text-white hover:text-gray-400">
            Reviews
          </Link>
          <Link href="#" className="text-white hover:text-gray-400">
            Showcase
          </Link>
          <Link href="#" className="text-white hover:text-gray-400">
            Blogs
          </Link>
          <Link href="#" className="text-white hover:text-gray-400">
            About Us
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="flex flex-col items-center mt-4 space-y-2 bg-black/80 p-4 rounded-lg md:hidden">
          <Link href="#" className="text-white hover:text-gray-400">
            Pricing
          </Link>
          <Link href="#" className="text-white hover:text-gray-400">
            Reviews
          </Link>
          <Link href="#" className="text-white hover:text-gray-400">
            Showcase
          </Link>
          <Link href="#" className="text-white hover:text-gray-400">
            Blogs
          </Link>
          <Link href="#" className="text-white hover:text-gray-400">
            About Us
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
