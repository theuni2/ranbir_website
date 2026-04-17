// "use client";

// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <motion.nav
//       initial={{ y: -60, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.6 }}
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-[#0B1C2D]/90 backdrop-blur-md shadow-lg"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-white">
        
//         {/* Logo */}
//         <Link href="/" className="text-2xl font-bold tracking-wide">
//           <span className="text-orange-400">One</span> Play <span className="text-green-400">India</span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center gap-8 text-sm">
//           <Link href="/" className="hover:text-green-400 transition">Home</Link>
//           <Link href="/opportunities" className="hover:text-green-400 transition">Opportunities</Link>
//           <Link href="/articles" className="hover:text-green-400 transition">Articles</Link>
//           <Link href="/about" className="hover:text-green-400 transition">About</Link>

//           {/* <Link
//             href="/join-whatsapp"
//             className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-lg font-semibold transition"
//           >
//             Join WhatsApp
//           </Link> */}
//         </div>

//         {/* Mobile Button */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="md:hidden bg-black text-white px-6 pb-6"
//         >
//           <div className="flex flex-col gap-4">
//             <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
//             <Link href="/opportunities" onClick={() => setMenuOpen(false)}>Opportunities</Link>
//             <Link href="/articles" onClick={() => setMenuOpen(false)}>Articles</Link>
//             <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>

//             <Link
//               href="/https://chat.whatsapp.com/IYl7JyHezfXCGOp1N3mRSs?mode=gi_t"
//               onClick={() => setMenuOpen(false)}
//               className="bg-green-500 text-black px-4 py-2 rounded-lg text-center font-semibold"
//             >
//               Join WhatsApp
//             </Link>
//           </div>
//         </motion.div>
//       )}
//     </motion.nav>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react"; // Optional: Install lucide-react for icons

const articles = [
  { title: "Volunteering Experience at Oscar Foundation Event", href: "/blogs/oscar-foundation-event" },
  // { title: "Gaming Guides", href: "/articles/guides" },
  // { title: "Industry Insights", href: "/articles/insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
          <span className="text-orange-400">One</span> Play <span className="text-green-400">India</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className="hover:text-green-400 transition">Home</Link>
          <Link href="/blogs/opportunity" className="hover:text-green-400 transition">Opportunities</Link>
          
          {/* Dropdown Menu */}
          <div 
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-green-400 transition py-2">
              Articles <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 mt-2 w-48 bg-[#0B1C2D] border border-gray-700 rounded-lg shadow-xl overflow-hidden"
                >
                  {articles.map((art, i) => (
                    <Link 
                      key={i} 
                      href={art.href}
                      className="block px-4 py-3 hover:bg-green-500 hover:text-black transition text-xs border-b border-gray-800 last:border-0"
                    >
                      {art.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link href="/about" className="hover:text-green-400 transition">About</Link>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0B1C2D] text-white px-6 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-4 mt-4">
              <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link href="/opportunities" onClick={() => setMenuOpen(false)}>Opportunities</Link>
              
              {/* Mobile Submenu */}
              <div className="flex flex-col gap-2">
                <span className="text-gray-400 text-xs uppercase tracking-widest">Articles</span>
                {articles.map((art, i) => (
                  <Link 
                    key={i} 
                    href={art.href} 
                    className="pl-4 text-green-400"
                    onClick={() => setMenuOpen(false)}
                  >
                    — {art.title}
                  </Link>
                ))}
              </div>

              <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
              <Link
                href="https://chat.whatsapp.com/..."
                className="bg-green-500 text-black px-4 py-2 rounded-lg text-center font-semibold"
              >
                Join WhatsApp
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}