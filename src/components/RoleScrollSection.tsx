"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const people = [
  { name: "Fenia & Teodor", desc: "On keeping a model from collapsing—and what it means to build stability at scale.", img: "/p.jpg" },
  { name: "Kabeer & Nan", desc: "On experimentation as a mindset, not a phase—and why good code is rarely comfortable.", img: "/pi.jpg" },
  { name: "José & Al", desc: "On culture, creativity, and what it means to build something worth caring about.", img: "/pix.jpg" },
  { name: "Nikolay & Pengming", desc: "On precision, iteration, and using agents to push research forward.", img: "/p.jpg" },
  { name: "Maya & Leo", desc: "On teamwork, empathy, and solving complex challenges together.", img: "/pix.jpg" },
  { name: "Sara & Ahmed", desc: "On bridging design and engineering for seamless collaboration.", img: "/beauty.jpg" },
  { name: "Hana & Omar", desc: "On building the right tools to help others build better things.", img: "/beauty1.jpg" },
];

export default function RoleScrollSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => setScrollPos(container.scrollLeft);
    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const cardWidth = 220; // includes padding/gap visually
  const stepSize = 40; // vertical offset per card (height drop)
  const baseHeight = 320;
  const heightDrop = 40; // amount each next image reduces in height

  const getDynamicProps = (index: number) => {
    const offset = scrollPos / cardWidth; // how much we scrolled in "cards"
    const relativeIndex = index - offset; // where the card is visually
    const height = Math.max(100, baseHeight - relativeIndex * heightDrop);
    const topOffset = Math.max(0, relativeIndex * stepSize);
    return { height, topOffset };
  };

  return (
    <section className="dark:bg-[#151617] bg-white dark:text-white text-black py-16 overflow-hidden">
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-thin dark:scrollbar-thumb-gray-600 scrollbar-thumb-gray-900 dark:scrollbar-track-gray-800 scrollbar-track-black scroll-smooth"
      >
        <div className="flex gap-6 px-10 min-w-max pb-8 items-end">
          {people.map((person, index) => {
            const { height, topOffset } = getDynamicProps(index);

            return (
              <div
                key={index}
                className="flex-shrink-0 w-[200px] group flex flex-col items-center"
                style={{ height: 360, position: "relative" }}
              >
                {/* Animated Image Box (height + top margin dynamic) */}
                <div
                  className="relative w-full border dark:border-white border-black overflow-hidden transition-[height,margin-top] duration-300 ease-[cubic-bezier(0.33,1,0.68,1)]"
                  style={{
                    height: `${height}px`,
                    marginTop: `${topOffset}px`,
                  }}
                >
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    className="object-cover transition-opacity duration-500 group-hover:opacity-90"
                  />
                </div>

                {/* Text (fixed bottom alignment) */}
                <div className="mt-3 text-center w-full">
                  <h3 className="font-semibold text-base">{person.name}</h3>
                  <p className="dark:text-gray-300 text-gray-600 text-sm mt-1 leading-snug">
                    {person.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
