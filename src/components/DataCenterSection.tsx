// "use client";
// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// export default function DataCenterSection() {
//   const jobs = [
//     { title: "Construction Manager – West Texas Campus", href: "#" },
//     { title: "Director of Network Infrastructure and Capacity", href: "#" },
//     { title: "Procurement Officer – Data Center Equipment", href: "#" },
//     { title: "Talent Acquisition & People Operations Lead", href: "#" },
//     { title: "Talent Acquisition & People Operations Lead", href: "#" },
//     { title: "Talent Acquisition & People Operations Lead", href: "#" },
   
   
   
//   ];a

//   const containerRef = useRef<HTMLDivElement>(null);
//   const [isPinned, setIsPinned] = useState(true);
//   const [hasMounted, setHasMounted] = useState(false);

//   useEffect(() => setHasMounted(true), []);

//   useEffect(() => {
//     if (!hasMounted) return;
//     const container = containerRef.current;
//     if (!container) return;

//     const observer = new IntersectionObserver(
//       ([entry]) => setIsPinned(entry.isIntersecting),
//       { root: null, threshold: 0, rootMargin: "0px 0px -90% 0px" }
//     );

//     observer.observe(container);
//     return () => observer.disconnect();
//   }, [hasMounted]);

//   const AnimatedLine = ({ delay = 0 }: { delay?: number }) => (
//     <div className="flex justify-between gap-6 w-full">
//       {/* Left half */}
//       <motion.div
//         className="relative w-full h-[2px] bg-transparent overflow-hidden"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.1 }}
//       >
//         <motion.div
//           className="absolute right-0 top-0 h-[1px] bg-white"
//           initial={{ width: "0%" }}
//           whileInView={{ width: "100%" }}
//           viewport={{ once: true }}
//           transition={{ duration: 1.2, ease: "easeInOut", delay }}
//         />
//       </motion.div>

//       {/* Right half */}
//       <motion.div
//         className="relative w-full h-[1px] bg-transparent overflow-hidden"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.1 }}
//       >
//         <motion.div
//           className="absolute right-0 top-0 h-[1px] bg-white"
//           initial={{ width: "0%" }}
//           whileInView={{ width: "100%" }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeInOut", delay }}
//         />
//       </motion.div>
//     </div>
//   );

//   return (
//     <section className="bg-[#151617] text-white w-full px-10 py-10 overflow-hidden">
//       {/* 🟦 Top Animated Line */}
//       <AnimatedLine delay={0.5} />

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
//         {/* LEFT COLUMN (Sticky Heading) */}
//         <div className="relative ">
//           <div
//             className={`${
//               isPinned ? "sticky top-72" : "relative"
//             } transition-all duration-1000`}
//           >
//             <h2 className="text-3xl font-normal mt-8">Data Center</h2>
//           </div>
//         </div>

//         {/* RIGHT COLUMN (Job Links) */}
//         <div className="flex flex-col" ref={containerRef}>
//           {jobs.map((job, index) => (
//             <div
//               key={index}
//               className={`group transition-colors duration-200 ${
//                 index !== jobs.length - 1 ? "border-b border-[#888888]" : ""
//               }`}
//             >
//              <Link
//   href={job.href}
//   className="flex items-center justify-between w-full py-4 px-0 md:px-0 md:py-10 hover:bg-cyan-100"
// >
//   <span className="text-cyan-100 group-hover:text-black transition-colors duration-200 text-md whitespace-nowrap">
//     {job.title}
//   </span>
//   <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity duration-200">
//     →
//   </span>
// </Link>

//             </div>
//           ))}
//         </div>
//       </div>





      

//       {/* 🟦 Bottom Animated Line */}
//       <div className="mt-3">
//         <AnimatedLine delay={1} />
//       </div>

      
//     </section>
//   );
// }








"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DataCenterSection() {
  const jobs = [
    { title: "Construction Manager – West Texas Campus", href: "#" },
    { title: "Director of Network Infrastructure and Capacity", href: "#" },
    { title: "Procurement Officer – Data Center Equipment", href: "#" },
    { title: "Talent Acquisition & People Operations Lead", href: "#" },
    { title: "Talent Acquisition & People Operations Lead", href: "#" },
    { title: "Talent Acquisition & People Operations Lead", href: "#" },
  ];

  const containerRef = useRef(null);
  const [isPinned, setIsPinned] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => setHasMounted(true), []);

  useEffect(() => {
    if (!hasMounted) return;
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsPinned(entry.isIntersecting),
      { root: null, threshold: 0, rootMargin: "0px 0px -90% 0px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [hasMounted]);

  const AnimatedLine = ({ delay = 0 }) => (
    <div className="flex justify-between gap-6 w-full">
      {/* Left half */}
      <motion.div
        className="relative w-full h-[2px] bg-transparent overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.1 }}
      >
        <motion.div
          className="absolute right-0 top-0 h-[1px] bg-white"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeInOut", delay }}
        />
      </motion.div>

      {/* Right half */}
      <motion.div
        className="relative w-full h-[1px] bg-transparent overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.1 }}
      >
        <motion.div
          className="absolute right-0 top-0 h-[1px] bg-white"
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeInOut", delay }}
        />
      </motion.div>
    </div>
  );

  return (
    <section className="bg-[#151617] text-white w-full  px-8 sm:px-6 md:px-10 py-0 md:py-10 overflow-hidden">
      {/* 🟦 Top Animated Line */}
      <AnimatedLine delay={0.5} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 relative mt-8">
        {/* LEFT COLUMN (Sticky Heading) */}
        <div className="relative">
          <div
            className={`${
              isPinned ? "md:sticky md:top-72" : "relative"
            } transition-all duration-1000`}
          >
            <h2 className="text-2xl sm:text-3xl font-normal mt-8 text-center md:text-left">
              Data Center
            </h2>
          </div>
        </div>

        {/* RIGHT COLUMN (Job Links) */}
        <div className="flex flex-col w-full" ref={containerRef}>
          {jobs.map((job, index) => (
            <div
              key={index}
              className={`group transition-colors duration-200 ${
                index !== jobs.length - 1 ? "border-b border-[#888888]" : ""
              }`}
            >
              <Link
                href={job.href}
                className="flex items-center justify-between w-full py-4 sm:py-6 md:py-10 hover:bg-cyan-100 px-0"
              >
                <span className="text-cyan-100 group-hover:text-black transition-colors duration-200 text-sm sm:text-md whitespace-normal sm:whitespace-nowrap text-left">
                  {job.title}
                </span>
                <span className="text-black opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-lg">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* 🟦 Bottom Animated Line */}
      <div className="mt-6">
        <AnimatedLine delay={1} />
      </div>
    </section>
  );
}
