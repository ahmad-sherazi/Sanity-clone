'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useThemeToggle } from "@/app/theme-provider";
 
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
    const toggleTheme = useThemeToggle();
     useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)"); // lg breakpoint

    const handleChange = () => {
      if (media.matches) {
        setMenuOpen(false);
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

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
      {/* <aside className="hidden md:flex w-32 h-screen fixed left-0 top-0 flex-col items-start justify-start mt-12 gap-3 pl-8 ml-8 dark:text-white text-black text-sm font-mono tracking-wider bg-white dark:bg-[#151617]"> */}
      {/* Desktop Sidebar (lg and up) */}
<aside className="hidden lg:flex w-32 h-screen fixed left-0 top-0 flex-col items-start justify-start mt-12 gap-3 pl-8 ml-8 dark:text-white text-black text-sm font-mono tracking-wider bg-white dark:bg-[#151617]">

        {/* Logo */}
        <div className="flex items-center gap-2  dark:hover:bg-cyan-100 hover:bg-purple-500 ">
         <Link href="/"><span className="dark:text-cyan-100 text-purple-600 dark:hover:text-black hover:text-white  font-semibold">SANITY</span></Link>
        </div>

        {/* Links */}
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.href}
            className={` dark:hover:bg-cyan-100 hover:bg-purple-500 dark:hover:text-black hover:text-white transition-colors cursor-pointer ${
              link.name === "PLATFORM" ? "dark:text-white text-black" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}


        <button
  onClick={toggleTheme}
  className="mt-4 dark:text-cyan-100 text-purple-600 dark:hover:bg-cyan-100 hover:bg-purple-500 dark:hover:text-black hover:text-white border dark:border-cyan-100 border-purple-600 px-1 py-1 rounded text-xs transition"
>
  Toggle Theme
</button>

      </aside>

      {/* ✅ Mobile Top Navbar */}
      {/* <div className="md:hidden fixed top-0 left-0 w-full bg-white dark:bg-[#151617] flex justify-between items-center px-6 py-4 z-50 dark:text-white text-black font-mono tracking-wider border-b dark:border-gray-900 border-gray-200"> */}
      {/* Mobile + md Top Navbar */}
<div className="lg:hidden fixed top-0 left-0 w-full bg-white dark:bg-[#151617] flex justify-between items-center px-6 py-4 z-50 dark:text-white text-black font-mono tracking-wider border-b dark:border-gray-900 border-gray-200">

        <Link href="/"><span className="dark:text-cyan-100 text-purple-600 font-semibold">SANITY</span></Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="dark:text-gray-300 text-gray-500"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {menuOpen && (
          <div className="absolute top-14 left-0 w-full bg-white dark:bg-[#151617] flex flex-col gap-3 py-4 px-8 text-sm border-t dark:border-gray-800 border-gray-200">
            {links.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`dark:hover:text-cyan-100 hover:text-purple-600  transition-colors ${
                  link.name === "PLATFORM" ? "dark:text-gray-300 text-gray-600" : "dark:text-gray-300 text-gray-600"
                }`}
              >
                {link.name}
              </Link>
            ))}


        <button
  onClick={toggleTheme}
  className="mt-4 dark:text-cyan-100 text-purple-600 dark:hover:bg-cyan-100 hover:bg-purple-500 dark:hover:text-black hover:text-white border dark:border-cyan-100 border-purple-600 px-1 py-1 rounded text-xs transition"
>
  Toggle Theme
</button>


          </div>
        )}
      </div>
    </>
  );
}
