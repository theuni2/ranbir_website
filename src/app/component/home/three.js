"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const articles = [
  {
    title: "Report on Volunteering Experience at Oscar Foundation Event",
    desc: "The Annual Football Day was organized by the Oscar Foundation in Mumbai, commencing from 6:30 a.m. onwards.",
    img: "/blog/img_1.png",
    tag: "Guide",
    slug:"oscar_blog"
  },
  {
    title: "Upcoming Sports Events in 2026",
    desc: "A comprehensive list of major sports events happening across India in 2026 for young athletes.",
    img: "/blog/img_2.png",
    tag: "Journey",
    slug:"second_blog"
  },
  {
    title: "Preparing for State Trials: Checklist",
    desc: "Everything you need before appearing for sports trials in any state.",
    img: "/blog/img_3.png",
    tag: "Tips",
  },
];

export default function FeaturedArticles() {
  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold"
        >
          Featured <span className="text-green-400">Articles</span>
        </motion.h2>

        <p className="mt-4 text-gray-400">
          Insights, athlete stories and practical guidance for young sports enthusiasts.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {articles.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#0B1C2D] rounded-2xl overflow-hidden border border-white/10 hover:border-green-400/40 transition"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
                  {item.tag}
                </span>

                <h3 className="mt-4 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                  {item.desc}
                </p>
<a href={`/blogs/${item.slug}`} >
                <button className="mt-5 w-full bg-green-500 hover:bg-green-600 text-black py-2 rounded-lg font-semibold transition">
                  Read More
                </button>
</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
