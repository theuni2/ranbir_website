"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B1C2D] via-black to-[#0F3D2E] text-white overflow-hidden">
      
      {/* Background Blur Circles */}
      <div className="absolute w-72 h-72 bg-green-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      <div className="relative z-10 max-w-4xl text-center px-6">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Discover Sports <span className="text-green-400">Opportunities</span>  
          Across India
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-gray-300"
        >
          Trials, tournaments, scholarships and training programs —  
          all in one trusted platform for young athletes.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="/opportunity"
            className="px-8 py-3 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-xl transition shadow-lg"
          >
            Explore Opportunities
          </a>

          <a
            href="https://chat.whatsapp.com/IYl7JyHezfXCGOp1N3mRSs?mode=gi_t"
            className="px-8 py-3 border border-white/30 hover:bg-white/10 rounded-xl transition"
          >
            Join WhatsApp Channel
          </a>
        </motion.div>
      </div>
    </section>
  );
}
