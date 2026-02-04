"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1C2D]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Sport<span className="text-green-400">Hub</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className="hover:text-green-400 transition">Home</Link>
          <Link href="/opportunities" className="hover:text-green-400 transition">Opportunities</Link>
          <Link href="/articles" className="hover:text-green-400 transition">Articles</Link>
          <Link href="/about" className="hover:text-green-400 transition">About</Link>

          <Link
            href="/join-whatsapp"
            className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-lg font-semibold transition"
          >
            Join WhatsApp
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black text-white px-6 pb-6"
        >
          <div className="flex flex-col gap-4">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/opportunities" onClick={() => setMenuOpen(false)}>Opportunities</Link>
            <Link href="/articles" onClick={() => setMenuOpen(false)}>Articles</Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>

            <Link
              href="/join-whatsapp"
              onClick={() => setMenuOpen(false)}
              className="bg-green-500 text-black px-4 py-2 rounded-lg text-center font-semibold"
            >
              Join WhatsApp
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
