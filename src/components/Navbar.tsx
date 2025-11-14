'use client';

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "PLATFORM", href: "/platform" },
    { name: "APPROACH", href: "/approach" },
    { name: "VISION", href: "/vision" },
    // { name: "CAREERS", href: "/careers" },
    { name: "BLOG", href: "/blog" },
    { name: "NEWSROOM", href: "/newsroom" },
  ];

  return (
    <>
      {/* ✅ Desktop Sidebar */}
      <aside className="hidden md:flex w-32 h-screen fixed left-0 top-0 flex-col items-start justify-start mt-12 gap-3 pl-8 ml-8 text-white text-sm font-mono tracking-wider bg-[#151617]">
        {/* Logo */}
        <div className="flex items-center gap-2  hover:bg-cyan-100 ">
         <Link href="/"><span className="text-cyan-100 hover:text-black  font-semibold">SANITY</span></Link>
        </div>

        {/* Links */}
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={` hover:bg-cyan-100 hover:text-black transition-colors cursor-pointer ${
              link.name === "PLATFORM" ? "text-white" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </aside>

      {/* ✅ Mobile Top Navbar */}
      <div className="md:hidden fixed top-0 left-0 w-full bg-black flex justify-between items-center px-6 py-4 z-50 text-white font-mono tracking-wider border-b border-gray-900">
        <Link href="/"><span className="text-cyan-100 font-semibold">SANITY</span></Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-300"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {menuOpen && (
          <div className="absolute top-14 left-0 w-full bg-black flex flex-col gap-3 py-4 px-8 text-sm border-t border-gray-800">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`hover:text-white transition-colors ${
                  link.name === "PLATFORM" ? "text-gray-300" : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
