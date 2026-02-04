"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Join WhatsApp Channel",
    desc: "Get instant updates about trials, tournaments and sports news shared by the community.",
    icon: "📱",
  },
  {
    title: "Explore Opportunities",
    desc: "Visit the website anytime to view verified listings and full details.",
    icon: "🏆",
  },
  {
    title: "Never Miss Updates",
    desc: "Stay informed and act fast before deadlines close.",
    icon: "⏰",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0B1C2D] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          How This <span className="text-green-400">Platform Works</span>
        </motion.h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Simple steps to discover sports opportunities across India without missing deadlines.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-white/10 p-8 rounded-2xl hover:border-green-400/40 transition backdrop-blur-sm"
            >
              <div className="text-4xl">{step.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
