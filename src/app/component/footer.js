"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold">
            Sport<span className="text-green-400">Hub</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            A student-led platform helping young athletes across India
            discover verified sports opportunities and stay informed.
          </p>
        </motion.div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/" className="hover:text-green-400">Home</Link></li>
            <li><Link href="/opportunities" className="hover:text-green-400">Opportunities</Link></li>
            <li><Link href="/articles" className="hover:text-green-400">Articles</Link></li>
            <li><Link href="/about" className="hover:text-green-400">About</Link></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Community</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/join-whatsapp" className="hover:text-green-400">Join WhatsApp</Link></li>
            <li><Link href="/submit" className="hover:text-green-400">Submit Opportunity</Link></li>
            <li><Link href="/contact" className="hover:text-green-400">Contact</Link></li>
          </ul>
        </div>

        {/* CTA */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
          <p className="text-gray-400 text-sm">
            Get real-time sports alerts and community updates.
          </p>

          <a
            href="#"
            className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-xl font-semibold transition"
          >
            Join WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-14 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} SportHub. All rights reserved.
      </div>
    </footer>
  );
}
