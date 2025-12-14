"use client";

import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function NewsroomPage() {
  const latestNews = [
    {
      title: "TBPN: poolside launches Horizon AI Campus",
      date: "2025-10-16",
      type: "WATCH",
      image: "/new1.png",
    },
    {
      title:
        "CNBC: CoreWeave deal to develop one of the largest AI data centers in the U.S.",
      date: "2025-10-16",
      type: "WATCH",
      image: "/new1.png",
    },
    {
      title:
        "CNBC: CoreWeave deal to develop one of the largest AI data centers in the U.S.",
      date: "2025-10-16",
      type: "WATCH",
      image: "/new1.png",
    },
    {
      title:
        "CNBC: CoreWeave deal to develop one of the largest AI data centers in the U.S.",
      date: "2025-10-16",
      type: "WATCH",
      image: "/new1.png",
    },
    {
      title:
        "CNBC: CoreWeave deal to develop one of the largest AI data centers in the U.S.",
      date: "2025-10-16",
      type: "WATCH",
      image: "/new1.png",
    },
  ];

  return (
    <div className="flex dark:bg-[#151617] bg-white dark:text-white text-black min-h-screen">
      {/* ✅ Sidebar Navbar */}
      <Navbar />

      {/* ✅ Main Content */}
      <main className="lg:ml-44 max-lg:ml-0 flex-1 px-4 sm:px-8 md:px-16 py-8 w-full md:mt-0 mt-12">
        {/* ✅ Featured News Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12 mb-20 w-full">
          {/* Left Column */}
          <div className="flex-1 w-full">
            <h1 className="text-3xl sm:text-4xl font-normal leading-tight mb-6">
              WSJ: A Giant New AI Data Center Is Coming to the Epicenter of
              America’s Fracking Boom
            </h1>

            <p className="dark:text-gray-300 text-gray-600 text-md leading-relaxed mb-6">
              An Nvidia-backed AI startup is planning to build a massive
              data-center complex with CoreWeave that is capable of generating
              its own power on a site that is two-thirds the size of Central
              Park.
            </p>

            <div className="flex items-center gap-3 text-sm">
              <span className="dark:text-gray-400 text-gray-500 tracking-widest">2025-10-15</span>
              <a
                href="#"
                className="dark:text-cyan-100 text-purple-600 font-semibold uppercase tracking-wide dark:hover:bg-cyan-100 hover:bg-purple-500 dark:hover:text-black hover:text-white transition flex items-center gap-1"
              >
                Read <span className="text-[13px]">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1 w-full">
            <Image
              src="/new1.png"
              alt="The Wall Street Journal"
              width={800}
              height={500}
              className="w-full h-auto object-cover grayscale rounded-sm"
            />
          </div>
        </section>

        {/* ✅ Latest Section */}
        <section className="w-full">
          <h2 className="text-2xl font-normal">Latest</h2>
          <div className="flex justify-center">
            <div className="border-b dark:border-gray-100 border-black my-12 w-full md:w-[965px]"></div>
          </div>

          {/* ✅ Responsive two-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
            {latestNews.map((news, index) => (
              <div key={index} className="w-full">
                {/* Image with play icon */}
                <div className="relative w-full h-[240px] sm:h-[280px] md:h-[300px] mb-4">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover grayscale rounded-sm"
                  />
                  {/* Play icon (triangle) */}
                  <div className="absolute top-2 left-2 dark:bg-cyan-100 bg-purple-500 w-6 h-6 flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] dark:border-l-black border-l-white border-b-[6px] border-b-transparent"></div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-normal mb-3">{news.title}</h3>

                {/* Date + Watch link */}
                <div className="flex items-center gap-2 text-sm flex-wrap">
                  <span className="dark:text-gray-400 text-gray-500 tracking-widest">
                    {news.date},
                  </span>
                  <a
                    href="#"
                    className="dark:text-cyan-100 text-purple-600 font-semibold uppercase tracking-wide dark:hover:bg-cyan-100 hover:bg-purple-500 dark:hover:text-black hover:text-white transition flex items-center gap-1"
                  >
                    {news.type} <span className="text-[13px]">↗</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ✅ Footer */}
        <div className="flex justify-center items-center min-h-[40vh] lg:ml-0 max-lg:ml-0 mt-12 dark:bg-[#151617] bg-white w-full">
          <h1
            className="text-[100px] sm:text-[100px] md:text-[140px] lg:text-[160px]  font-extrabold text-transparent uppercase tracking-wide"
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
      </main>
    </div>
  );
}
