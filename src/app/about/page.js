// app/about/page.jsx
"use client";


import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../component/nav";
import Footer from "../component/footer";

export default function AboutPage() {
  return (
    <section>
        <Navbar/>
    <main className="min-h-screen bg-gradient-to-br from-[#0B1A3A] via-[#0F2A5F] to-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-green-400">
            <Image
              src="/blog/about.jpeg"   // put image in public folder
              alt="Ranbir Goel"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white text-gray-800 rounded-2xl shadow-2xl p-8 md:p-10 space-y-6"
        >
          <h1 className="text-3xl md:text-4xl font-bold">
            About <span className="text-green-600">Ranbir</span>
          </h1>

          <p className="leading-relaxed">
            Hello! I’m <span className="font-semibold text-[#0B1A3A]">Ranbir Goel</span>, 
            a Grade 11 student passionate about football and social impact. 
            I believe sports are powerful tools that build confidence, discipline, 
            teamwork, and leadership.
          </p>

          <p className="leading-relaxed">
            Through volunteering and fundraising initiatives, I’ve actively 
            supported children who lack access to sports resources and raised 
            funds to create better opportunities for them.
          </p>

          <p className="leading-relaxed">
            I am also building a 
            <span className="font-semibold text-green-600">
              {" "}student-led digital sports platform
            </span>{" "}
            that helps young athletes across India discover trials, tournaments, 
            scholarships, and training programs in one reliable space.
          </p>

          <p className="leading-relaxed">
            My mission is to empower students through sports and information, 
            ensuring talent is never lost due to lack of awareness.
          </p>
        </motion.div>

      </div>

      {/* Bottom Accent */}
      <div className="w-40 h-1 bg-green-400 mx-auto mt-14 rounded-full"></div>
    </main>
    <Footer/>
    </section>
  );
}
