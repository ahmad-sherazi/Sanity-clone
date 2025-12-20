"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import ThreeColSection from "@/components/ThreeColSection";
import { motion } from "framer-motion";


export default function ApproachPage() {
  return (
    <div className="dark:bg-[#151617] bg-white  min-h-screen">
      {/* ✅ Navbar */}
      <Navbar />

      {/* ✅ Approach Section */}
     <section className="dark:bg-[#151617] bg-white dark:text-white text-black py-0 md:mt-0 md:-pt-32 pt-20 md:py-16 px-4 md:px-8 ml-0 md:ml-0 lg:ml-26">

        {/* Top Text */}
        {/* <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-5xl font-normal leading-snug">
              Outcomes, not tokens.
              <br />
              Inside your boundary.
            </h2>
          </div>
          <div>
            <p className="text-[#BBBBBB] leading-relaxed">
              <span className="font-semibold text-white">
                Forward Deployed Research Engineers
              </span>{" "}
              embed with your teams to design, build, and operate intelligence
              where your software work actually happens.
            </p>
          </div>
        </div> */}
{/* Diagram Heading & Description */}
<div className="max-w-4xl mx-auto text-left mb-8">
  <h3 className="md:text-5xl text-3xl font-normal dark:text-white text-black mb-2 mt-0 md:mt-16"> Outcomes, not tokens.
              <br />
              Inside your boundary.</h3>
     <p className="dark:text-[#BBBBBB] text-gray-600 leading-relaxed mt-0 md:mt-20 md:text-2xl text-md">
              <span className="font-semibold  dark:text-white text-black">
                Forward Deployed Research Engineers
              </span>{" "}
              embed with your teams to design,<br /> build, and operate intelligence
              where your software work actually happens.
            </p>
</div>

{/* Diagram Box */}
<div className="max-w-4xl mx-auto border dark:border-white border-black p-0 md:p-6 mb-0 md:mb-12 flex items-center justify-center">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 300"
            className="w-full h-[400px] object-contain"
          >
            <rect x="1" y="1" width="798" height="298" fill="none" stroke="none" />
            <g
              stroke="#999"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 3"
              strokeLinecap="round"
            >
              <line x1="80" y1="150" x2="720" y2="150" />
              <line x1="80" y1="90" x2="720" y2="90" />
              <line x1="80" y1="210" x2="720" y2="210" />
            </g>

            <g stroke="#999" strokeWidth="1.5" fill="none">
              <polygon points="80,90 100,120 80,150 60,120" />
              <polygon points="80,150 100,180 80,210 60,180" />
              <polygon points="80,210 100,240 80,270 60,240" />
              <polygon points="180,60 260,150 180,240 100,150" />
              <polygon points="320,60 400,150 320,240 240,150" />
              <polygon points="460,60 540,150 460,240 380,150" />
              <polygon points="600,60 680,150 600,240 520,150" />
            </g>

            <g stroke="#999" strokeWidth="1" fill="none" strokeDasharray="5 4">
              <ellipse cx="180" cy="150" rx="20" ry="45" />
              <ellipse cx="320" cy="150" rx="20" ry="45" />
              <ellipse cx="460" cy="150" rx="20" ry="45" />
              <ellipse cx="600" cy="150" rx="20" ry="45" />
            </g>
          </svg>
        </div>

        {/* Bottom Text Columns */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-10 text-md md:mt-0 mt-4 dark:text-[#AAAAAA] text-gray-500">
          <div>
            <h3 className="font-semibold dark:text-gray-100 text-black mb-2">Outcome ownership</h3>
            <p>
              We don't hand off models. We take joint responsibility for outcomes,
              adoption and measurable, long-lasting business impact.
            </p>
          </div>

          <div>
            <h3 className="font-semibold dark:text-gray-100 text-black mb-2">
              Inside your security boundary
            </h3>
            <p>
              Deploy on-prem, in your VPC or on workstations (defense only). Your
              data never leaves your control. Role-based access control for humans
              and agents by default.
            </p>
          </div>

          <div>
            <h3 className="font-semibold dark:text-gray-100 text-black mb-2">
              Built for complex environments
            </h3>
            <p>
              We work across heterogeneous environments: multi-cloud, legacy systems
              and air-gapped networks. No rip-and-replace.
            </p>
          </div>

          <div>
            <h3 className="font-semibold dark:text-gray-100 text-black mb-2">
              Executive-grade governance
            </h3>
            <p>
              Risk controls and auditability as a feature, co-designed in the
              toughest environments. All aligned to enterprise review boards and
              CISO requirements.
            </p>
          </div>
        </div>
      </section>


<div className="mt-2 w-full">
  <ThreeColSection />
</div>




{/* ✅ Animated Underline Row (visible & positioned) */}
<div className="flex justify-between gap-10 mt-6 md:mt-12 ml-0 md:ml-0 lg:ml-28 px-4 lg:px-[10vw] md:px-[4vw]  max-w-[1500px] mx-auto relative z-20">
  {/* Left underline */}
  <motion.div
    className="relative w-full h-[2px] dark:bg-[#1a1b1c] bg-white overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="absolute right-0 top-0 h-[1px] dark:bg-white bg-black"
      initial={{ width: "0%" }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
    />
  </motion.div>

  {/* Right underline */}
  <motion.div
    className="relative w-full h-[2px] dark:bg-[#1a1b1c] bg-white overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="absolute right-0 top-0 h-[1px] dark:bg-white bg-black"
      initial={{ width: "0%" }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
  </motion.div>
</div>









{/* ✅ Speak to Us + Form + FAQs Section (aligned with circle section width) */}
<section className="px-4 lg:px-[10vw] md:px-[4vw] ml-0 md:ml-0 lg:ml-28 py-0 md:py-20 md:mt-0 mt-20 dark:text-white text-black dark:bg-[#151617] bg-white grid md:grid-cols-2 gap-20 max-w-[1500px] mx-auto">
  {/* LEFT SIDE — Text */}
  <div className="flex flex-col justify-start gap-6">
    <div>
      <h2 className="text-3xl font-normal leading-snug">
        Speak to us about <br /> becoming an AI Company
      </h2>
      <p className="dark:text-[#BBBBBB] text-gray-600 text-base max-w-sm mt-3">
        Ideal for highly regulated spaces like Financial Services, Defense,
        and Industrial.
      </p>
    </div>
  </div>

  {/* RIGHT SIDE — Form + FAQ */}
  <div className="flex flex-col gap-12">
    {/* Form */}
    <form className="flex flex-col gap-8 text-base max-w-lg">
      <div>
        <label className="block dark:text-[#BBBBBB] text-gray-700 mb-2 tracking-wider text-sm uppercase">
          ### Your Name
        </label>
        <input
          type="text"
          placeholder="Your full name"
          className="w-full border-b-3 dark:bg-[#333333] bg-stone-200 dark:border-gray-300 border-gray-400 py-3 text-md focus:outline-none dark:focus:border-b-cyan-100  focus:border-b-purple-600 transition-all dark:placeholder-[#BBBBBB]"
        />
      </div>

      <div>
        <label className="block dark:text-[#BBBBBB] text-gray-700 mb-2 tracking-wider text-sm uppercase">
          ### Your Company Email
        </label>
        <input
          type="email"
          placeholder="you@company.com"
          className="w-full border-b-3 dark:bg-[#333333] bg-stone-200 dark:border-gray-300 border-gray-400 py-3 text-md focus:outline-none dark:focus:border-b-cyan-100  focus:border-b-purple-600 transition-all dark:placeholder-[#BBBBBB]"
        />
      </div>

      {/* Checkbox + Button Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
        <div className="flex items-center gap-2">
          <label className="relative flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="peer appearance-none w-5 h-5 border dark:border-gray-500 border-gray-600 rounded-sm transition-colors cursor-pointer dark:checked:bg-cyan-100 checked:bg-purple-500 dark:checked:border-cyan-100 checked:border-purple-500 focus:outline-none"
            />
          </label>
          <span className="dark:text-gray-300 text-gray-600 text-sm">
            I agree to the{" "}
            <span className="dark:text-cyan-100 text-purple-600 underline cursor-pointer">
              Privacy Policy
            </span>
          </span>
        </div>

        <button
          type="submit"
          className="dark:bg-[#333333] bg-purple-400  dark:hover:bg-cyan-100 hover:bg-purple-500 dark:hover:text-black hover:text-white dark:text-[#BBBBBB] text-white text-base py-2 px-6 rounded transition-all"
        >
          ↑ Submit
        </button>
      </div>
    </form>
</div>
</section>




  {/* ✅ Footer */}
        <div className="flex justify-center items-center min-h-[40vh] ml-0 lg:ml-12 md:ml-0 dark:bg-[#151617] bg-white">
          <h1
            className="text-[100px] md:text-[160px] font-extrabold text-transparent uppercase tracking-wide"
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
    














    {/* Divider Line */}
    {/* <motion.div
      className="border border-white  w-full"
      initial={{ scaleX: 0, originX: 1 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    /> */}



    </div>
  );
}
