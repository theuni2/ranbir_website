// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function WhatsappSection() {
//   return (
//     <section className="bg-[#0B1C2D] text-white py-24 px-6">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//         {/* Left Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-3xl md:text-5xl font-bold leading-tight">
//             Join Our <span className="text-green-400">WhatsApp Community</span>
//           </h2>

//           <p className="mt-6 text-gray-300 max-w-lg">
//             Get real-time sports updates, verified opportunities, and
//             connect with students sharing information across India.
//           </p>

//           <ul className="mt-8 space-y-3 text-gray-300">
//             <li>✔ Instant opportunity alerts</li>
//             <li>✔ Student-driven information sharing</li>
//             <li>✔ Never miss deadlines</li>
//             <li>✔ Free to join</li>
//           </ul>

//           <a
//             href="#"
//             className="inline-block mt-10 bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-xl font-semibold transition shadow-lg"
//           >
//             Join WhatsApp Now
//           </a>
//         </motion.div>

//         {/* Right Image */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="flex justify-center"
//         >
//           <img
//             src="https://www.oceankidshealth.com.au/wp-content/uploads/2024/02/OKH-Team-Sport-Kids.png"
//             alt="WhatsApp Community"
//             width={350}
//             height={500}
//             className="object-contain"
//           />
//         </motion.div>

//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function 
WhatsappSection() {
  return (
    <section className="relative overflow-hidden py-28 px-6 bg-gradient-to-br from-[#0B1C2D] via-black to-[#0F3D2E] text-white">
      
    
      <div className="absolute w-72 h-72 bg-green-500/20 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Join the <span className="text-green-400">WhatsApp</span><br />
            Sports Community
          </h2>

          <p className="mt-6 text-gray-300 max-w-xl text-lg">
            Real-time sports trials, tournaments, scholarships and updates —
            shared by students, verified for trust.
          </p>

          <div className="mt-8 space-y-3 text-gray-300">
            <p>⚡ Instant alerts</p>
            <p>🤝 Student collaboration</p>
            <p>🎯 Never miss deadlines</p>
            <p>🆓 Completely free</p>
          </div>

          <a
            href="https://chat.whatsapp.com/IYl7JyHezfXCGOp1N3mRSs?mode=gi_t"
            className="inline-block mt-10 bg-green-500 hover:bg-green-600 text-black px-10 py-4 rounded-2xl font-semibold transition shadow-xl"
          >
            Join WhatsApp Now
          </a>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 shadow-2xl">
            <Image
              src="/community.png"
              alt="WhatsApp Community"
              width={320}
              height={500}
              className="object-contain"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
