"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
import { Menu, X } from "lucide-react";
import { useState } from "react";



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
      <div className={`${inter.className} min-h-screen bg-[#151617] text-white flex`}>
        {/* ---------- DESKTOP SIDEBAR ---------- */}
        <aside className="hidden md:flex w-32 h-screen fixed left-0 top-0 flex-col items-start justify-start mt-12 gap-3 pl-8 ml-8 text-white text-sm font-mono tracking-wider bg-[#151617]">
          <div className="flex items-center gap-2 hover:bg-cyan-100 ">
            <Link href="/">
              <span className="text-cyan-100 hover:text-black font-semibold">POOLSIDE</span>
            </Link>
          </div>
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="hover:text-black hover:bg-cyan-100 transition-colors cursor-pointer text-white"
            >
              {link.name}
            </Link>
          ))}
        </aside>

        {/* ---------- MOBILE NAVBAR ---------- */}
        <div className="md:hidden fixed top-0 left-0 w-full bg-black flex justify-between items-center px-6 py-4 z-50 text-white font-mono tracking-wider border-b border-gray-900">
          <span className="text-cyan-100 font-semibold">POOLSIDE</span>
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
                  className="hover:text-white transition-colors text-gray-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* ---------- MAIN CONTENT ---------- */}
        <main className="flex-1 md:ml-28 flex flex-col items-center mt-16 md:mt-0 px-4 sm:px-6">
          {/* HERO SECTION */}
          <section className="relative w-full max-w-4xl h-[350px]  md:h-[420px] border border-gray-300 flex flex-col justify-between px-6 md:px-16 py-10 md:py-16 mt-6 md:mt-12 text-left md:text-left">
            <div>
              <h1
                className="text-[28px] sm:text-[36px] md:text-[44px] leading-tight font-light text-white"
                style={{
                  fontFamily:
                    "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 500,
                }}
              >
                We build the models.
                <br />
                You build the future.
              </h1>
            </div>
            <div className="mt-6 md:mt-0 text-center md:text-right self-center md:self-end">
              <p
                className="text-base sm:text-lg text-gray-300 font-normal"
                style={{
                  fontFamily:
                    "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                AGI for the enterprise—starting with software agents.
              </p>
            </div>
          </section>





        {/* FEATURES GRID SECTION */}
<section className="w-full bg-[#151617] px-0 sm:px-8 lg:px-8 mt-20 py-16">
  <div className="mx-auto w-full md:max-w-4xl">
    {/* Responsive Grid: 1 col on mobile, 2 cols on md+ */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
      
      {/* Top Left - Foundational AI */}
      <div className="border border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
        <h3 className="text-white text-2xl font-mono mb-4">
          Foundational AI, built and battle-hardened for enterprise.
        </h3>
      </div>

      {/* Top Right - Agentic and Multi-Agent */}
      <div className="border border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
        <svg
          className="w-full h-56 md:h-96 mt-4 mb-6"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#666" strokeWidth="1" fill="none">
            <circle cx="100" cy="100" r="60" />
            <ellipse cx="100" cy="100" rx="60" ry="20" />
            <path d="M 100 40 Q 140 100 100 160 Q 60 100 100 40" />
            <circle cx="100" cy="40" r="4" fill="#666" />
            <circle cx="160" cy="100" r="4" fill="#666" />
            <circle cx="100" cy="160" r="4" fill="#666" />
            <circle cx="40" cy="100" r="4" fill="#666" />
          </g>
        </svg>
        <div>
          <h3 className="text-gray-100 text-md font-bold mb-2">
            Agentic and Multi-Agent Orchestration
          </h3>
          <p className="text-[#BBBBBB] text-sm leading-relaxed">
            Single and multi-agent workflows that can plan, take action, and reason.
            Build anything from simple agents to complex, multi-step systems.
          </p>
        </div>
      </div>

      {/* Middle Left - Developer Ecosystem */}
      <div className="border border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
        <svg
          className="w-full h-56 md:h-96 mt-4 mb-6"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#666" strokeWidth="1" fill="none">
            <rect x="40" y="30" width="120" height="140" rx="8" />
            <rect x="50" y="40" width="100" height="100" />
            <line x1="50" y1="55" x2="150" y2="55" />
            <line x1="50" y1="70" x2="150" y2="70" />
            <line x1="50" y1="85" x2="150" y2="85" />
            <line x1="50" y1="100" x2="150" y2="100" />
            <line x1="50" y1="115" x2="150" y2="115" />
            <circle cx="100" cy="165" r="5" />
          </g>
        </svg>
        <div>
          <h3 className="text-gray-100 text-md font-bold mb-2">Developer Ecosystem</h3>
          <p className="text-[#BBBBBB] text-sm leading-relaxed">
            Full integrations, libraries, and SDKs across your development workflow.
          </p>
        </div>
      </div>

      {/* Middle Right - Data and Knowledge */}
      <div className="border border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
        <svg
          className="w-full h-56 md:h-96 mt-4 mb-6"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#666" strokeWidth="1" fill="none">
            <rect x="40" y="40" width="50" height="50" />
            <rect x="110" y="40" width="50" height="50" />
            <rect x="40" y="110" width="50" height="50" />
            <rect x="110" y="110" width="50" height="50" />
          </g>
        </svg>
        <div>
          <h3 className="text-gray-100 text-md font-bold mb-2">Data and Knowledge</h3>
          <p className="text-[#BBBBBB] text-sm leading-relaxed">
            Comprehensive data connectors, retrieval, and knowledge management.
          </p>
        </div>
      </div>

      {/* Bottom Left - Presentation Modules */}
      <div className="border border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
        <svg
          className="w-full h-56 md:h-96 mt-4 mb-6"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#666" strokeWidth="1" fill="none">
            <circle cx="100" cy="100" r="15" />
            <line x1="100" y1="100" x2="100" y2="30" />
            <line x1="100" y1="100" x2="170" y2="100" />
            <line x1="100" y1="100" x2="100" y2="170" />
            <line x1="100" y1="100" x2="30" y2="100" />
          </g>
        </svg>
        <div>
          <h3 className="text-gray-100 text-md font-bold mb-2">Presentation Modules</h3>
          <p className="text-[#BBBBBB] text-sm leading-relaxed">
            Prebuilt UI components designed in your environment. Structured agents built with you.
          </p>
        </div>
      </div>

      {/* Bottom Right - CTA Section */}
      <div className="border border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px] bg-[#151617]">
        <h2 className="text-gray-100 text-2xl font-semibold mb-6 leading-tight">
          Delivering intelligence across your development lifecycle—from IDE to terminal,
          agents to custom applications.
        </h2>
        <p className="text-[#BBBBBB] text-xl font-light ">
          Everywhere work gets done.
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-100 text-cyan-100 hover:bg-cyan-100 hover:text-black transition-colors font-mono text-sm">
          → THE POOLSIDE PLATFORM
        </button>
      </div>
    </div>
  </div>
</section>




          {/* SANITY TEXT */}
          <div className="flex justify-center items-center mt-20 sm:mt-32 md:mt-40 mb-20 sm:mb-32 md:mb-40 min-h-[30vh] md:min-h-[40vh] bg-[#151617] text-center">
            <h1
              className="text-[70px] sm:text-[100px] md:text-[160px] font-extrabold text-transparent uppercase tracking-wide transition-all duration-300"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #cffafe 0, #cffafe 2px, transparent 2px, transparent 8px)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Sanity
            </h1>
          </div>






{/* OUTCOMES SECTION */}
<section className="bg-[#151617] text-white py-16 px-0 md:px-8">
  <div className="max-w-4xl mx-auto">
    {/* Top Text */}
    <div className="grid md:grid-cols-2 gap-10 mb-12 text-left md:text-left">
      <h2 className="text-3xl font-semibold leading-snug">
        Outcomes, not tokens. <br /> Inside your boundary.
      </h2>
      <p className="text-[#BBBBBB] leading-relaxed">
        <span className="font-semibold text-white">
          Forward Deployed Research Engineers
        </span>{" "}
        embed with your teams to design, build, and operate intelligence where your work happens.
      </p>
    </div>

    {/* Diagram Box */}
    <div className="border border-white p-4 mb-12 overflow-hidden flex justify-center items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 300"
        className="w-full h-[260px] sm:h-[400px] object-contain"
      >
        <g stroke="#999" strokeWidth="1" fill="none" strokeDasharray="4 3" strokeLinecap="round">
          <line x1="80" y1="150" x2="720" y2="150" />
          <line x1="80" y1="90" x2="720" y2="90" />
          <line x1="80" y1="210" x2="720" y2="210" />
        </g>
        <g stroke="#999" strokeWidth="1.5" fill="none">
          <polygon points="180,60 260,150 180,240 100,150" />
          <polygon points="320,60 400,150 320,240 240,150" />
          <polygon points="460,60 540,150 460,240 380,150" />
          <polygon points="600,60 680,150 600,240 520,150" />
        </g>
      </svg>
    </div>

    {/* Bottom Text Columns */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left md:text-left text-md text-[#AAAAAA]">
      <div>
        <h3 className="font-semibold text-gray-100 mb-2">Outcome ownership</h3>
        <p>We take joint responsibility for outcomes and measurable business impact.</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-100 mb-2">Inside your boundary</h3>
        <p>Your data never leaves your control. Role-based access for humans and agents.</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-100 mb-2">Built for complexity</h3>
        <p>We work across multi-cloud, legacy systems, and air-gapped environments.</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-100 mb-2">Executive governance</h3>
        <p>Risk controls and auditability co-designed for enterprise security.</p>
      </div>
    </div>
  </div>
</section>







<section className="w-full bg-[#151617] px-0 sm:px-8 lg:px-8 py-24">
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

    {/* LEFT ILLUSTRATION with WHITE BORDER */}
    <div className="w-full flex justify-center">
      <div className="border border-white p-4 md:ml-4">
        <svg
          className="w-[420px] sm:w-[300px] h-[300px] sm:h-[600px]"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#666" strokeWidth="1.2" fill="none">
            {/* Pool outline */}
            <ellipse cx="150" cy="200" rx="100" ry="30" />
            <ellipse cx="150" cy="210" rx="100" ry="30" />
            <path d="M50 200 v40" />
            <path d="M250 200 v40" />

            {/* Ladder */}
            <path d="M70 180 v40" />
            <path d="M85 180 v40" />
            <line x1="70" y1="190" x2="85" y2="190" />
            <line x1="70" y1="200" x2="85" y2="200" />
            <line x1="70" y1="210" x2="85" y2="210" />

            {/* Umbrella */}
            <line x1="150" y1="80" x2="150" y2="160" />
            <polygon points="90,80 150,30 210,80 150,90" />
            <line x1="90" y1="80" x2="150" y2="90" />
            <line x1="210" y1="80" x2="150" y2="90" />

            {/* Tube */}
            <ellipse cx="200" cy="250" rx="25" ry="10" />
            <ellipse cx="200" cy="250" rx="15" ry="5" />
          </g>
        </svg>
      </div>
    </div>

    {/* RIGHT TEXT SECTION */}
    <div className="text-gray-100 space-y-4  md:space-y-2">
      <h2 className="text-xl sm:text-2xl md:text-4xl font-light leading-snug">
        <span className="text-[#AAAAAA] font-normal">Our </span>
        <span className="text-[#AAAAAA] font-normal">vision</span>
        <span className="text-gray-100">
          —the fastest path to AGI runs through software.
        </span>
      </h2>

      <p className="text-sm sm:text-base leading-relaxed text-gray-100 mt-6 md:mt-12">
        <span className="text-white font-semibold">Our mission is:</span> for artificial general
        intelligence to drive abundance for humanity.
      </p>

      <p className="text-sm sm:text-base leading-relaxed text-gray-100">
        We’ve chosen software engineering as our strategic beachhead because we believe it’s the
        fastest route to human-level intelligence.
      </p>

      <p className="text-sm sm:text-base leading-relaxed text-gray-100">
        Software development requires understanding the world, the ability to do multistep complex
        reasoning, and the ability to plan across long-horizon objectives. In other words, software
        development mirrors human reasoning. Humans learn by grokking the why as well as the what,
        and reinforcement learning allows foundation models to do the same.
      </p>

      <p className="text-sm sm:text-base leading-relaxed text-gray-100">
        By building models with these capabilities, we’re building toward a future where AI drives
        down costs of goods & services while accelerating scientific progress.
      </p>

      <p className="text-sm sm:text-base leading-relaxed text-gray-100">
        So we’re starting with the hardest problems first: high-consequence software for
        high-consequence applications, charting the path to human-level AI.
      </p>

      <div className="border-t border-cyan-100 pt-4">
        <a
          href="#"
          className="text-cyan-100 font-mono text-md flex items-center gap-2 hover:text-black hover:bg-cyan-100 transition-colors md:ml-60 justify-center ml-64 md:justify-start"
        >
          → OUR PATH TO AGI
        </a>
      </div>
    </div>
  </div>
</section>





          {/* CTA ROWS */}
          <section className="bg-[#151617] text-white py-16 md:py-24 px-0 sm:px-6">
            <div className="max-w-5xl mx-auto flex flex-col gap-12 md:gap-24">
              <div className="flex flex-col md:flex-row  md:justify-between gap-6 border-b border-cyan-100 pb-6 text-left md:text-left">
                <h2 className="text-2xl sm:text-3xl font-light leading-tight">
                  Is poolside right for your business?
                </h2>
                <a
                  href="#"
                  className="text-cyan-100 font-semibold uppercase tracking-wide text-sm flex items-center  ml-60 justify-center gap-2 hover:text-black hover:bg-cyan-100 transition"
                >
                  → Talk to us today
                </a>
              </div>

              <div className="flex flex-col md:flex-row  md:justify-between gap-6 border-b border-cyan-100 pb-6 text-left md:text-left">
                <h2 className="text-2xl sm:text-3xl font-light leading-tight">
                  Join the forefront of applied research and engineering.
                </h2>
                <a
                  href="#"
                  className="text-cyan-100 font-semibold uppercase tracking-wide text-sm flex items-center   justify-center gap-2 hover:text-black hover:bg-cyan-100 transition"
                >
                  → View roles
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>





      {/* ✅ Footer */}
      <div className="flex justify-center items-center min-h-[30vh] md:min-h-[40vh] bg-[#151617] text-center">
        <h1
          className="text-[70px] sm:text-[100px] md:text-[160px] font-extrabold text-transparent uppercase tracking-wide"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #ccc 0, #ccc 2px, transparent 2px, transparent 8px)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          SANITY
        </h1>
      </div>
    </>
  );
}
