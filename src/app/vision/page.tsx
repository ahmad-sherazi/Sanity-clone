// "use client";

// import { useRef, useState } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { Timeline } from "@/components/ui/timeline"; // ✅ using working timeline component

// // ---------- DATA ----------
// const PEOPLE = [
//   { src: "/beauty.jpg", name: "Alex Rivera", role: "Research Engineer" },
//   { src: "/p.jpg", name: "Maya Chen", role: "ML Engineer" },
//   { src: "/b.jpg", name: "Samir Khan", role: "Infra Engineer" },
//   { src: "/pix.jpg", name: "Olivia Park", role: "Product Engineer" },
// ];

// const JOB_CATEGORIES = [
//   {
//     title: "Data Center",
//     jobs: [
//       "Construction Manager - East Texas Campus",
//       "Director of Network Infrastructure and Capacity",
//       "Procurement Officer - Data Center Equipment",
//       "Talent Acquisition & People Operations Lead",
//     ],
//   },
//   { title: "G&A", jobs: ["Talent Acquisition Manager"] },
//   { title: "Product", jobs: ["Technical Program Manager"] },
//   { title: "Production Engineering", jobs: ["Head of Application Engineering"] },
// ];

// export default function VisionPage() {
//   const letters = ["R", "o", "l", "e", "s"];

//   return (
//     <div className="bg-black text-white flex min-h-screen">
//       {/* ---------- LEFT SIDEBAR ---------- */}
//       <aside className="w-48 h-screen fixed left-0 top-0 flex flex-col items-start justify-start gap-6 pt-20 pl-6 text-gray-300 text-sm tracking-wide">
//         <span className="hover:text-white cursor-pointer">
//           <Link href="/">Platform</Link>
//         </span>
//         <span className="hover:text-white cursor-pointer text-[#61dafb]">
//           PLATFORM
//         </span>
//         <span className="hover:text-white cursor-pointer">
//           <Link href="/approach">Approach</Link>
//         </span>
//         <span className="hover:text-white cursor-pointer">VISION</span>
//         <span className="hover:text-white cursor-pointer">CAREERS</span>
//         <span className="hover:text-white cursor-pointer">BLOG</span>
//         <span className="hover:text-white cursor-pointer">NEWSROOM</span>
//       </aside>

//       {/* ---------- MAIN CONTENT ---------- */}
//       <main className="ml-48 w-full overflow-y-auto px-6 md:px-20 py-16">
//         {/* ---------- ROLES ---------- */}
//         <section className="flex justify-center gap-8 mb-16">
//           {letters.map((char, i) => (
//             <TiltLetter key={i} letter={char} index={i} />
//           ))}
//         </section>

//         {/* ---------- Intro ---------- */}
//         <section className="max-w-3xl mx-auto mb-12 text-center px-6">
//           <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
//             Join our mission as pioneers and world-class engineers — at the
//             forefront of applied research and engineering at scale.
//           </p>
//         </section>

//         <div className="w-full border-b border-neutral-800 mb-12" />

//         {/* ---------- People Strip ---------- */}
//         <section className="mb-12">
//           <div
//             className="flex gap-6 overflow-x-auto hide-scrollbar py-4"
//             style={{ WebkitOverflowScrolling: "touch" }}
//           >
//             {PEOPLE.map((p, idx) => (
//               <motion.div
//                 key={idx}
//                 className="flex-shrink-0 w-44"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.45, delay: idx * 0.08 }}
//                 viewport={{ once: true }}
//               >
//                 <TiltImageCard src={p.src} alt={p.name} />
//                 <h4 className="mt-3 text-sm font-semibold">{p.name}</h4>
//                 <p className="text-xs opacity-70">{p.role}</p>
//               </motion.div>
//             ))}
//           </div>
//         </section>

//         <div className="w-full border-b border-neutral-800 mb-12" />

//         {/* ---------- Job Categories ----------
//         <section className="max-w-4xl mx-auto space-y-12">
//           {JOB_CATEGORIES.map((cat, i) => (
//             <div key={i}>
//               <h3 className="text-xl font-semibold mb-6">{cat.title}</h3>
//               <div className="space-y-2">
//                 {cat.jobs.map((job, j) => (
//                   <motion.div
//                     key={j}
//                     whileHover={{ backgroundColor: "rgba(6,182,212,0.12)" }}
//                     className="py-4 border-b border-neutral-800 cursor-pointer transition"
//                   >
//                     <span className="text-sm group-hover:text-cyan-200">
//                       {job}
//                     </span>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </section> */}

//         {/* ---------- Timeline Section ----------
//         <section className="max-w-6xl mx-auto mt-24">
//           <TimelineDemo />
//         </section> */}


//         {/* ---------- Jobs Timeline Section ---------- */}
// <section className="max-w-6xl mx-auto mt-24">
//   <TimelineJobsDemo />
// </section>


//         {/* ---------- Footer ---------- */}
//         <footer className="flex justify-center items-center min-h-[40vh] bg-black mt-24">
//           <h1
//             className="text-[120px] md:text-[160px] font-extrabold text-transparent uppercase tracking-wide"
//             style={{
//               backgroundImage:
//                 "repeating-linear-gradient(0deg, #ccc 0, #ccc 2px, transparent 2px, transparent 8px)",
//               WebkitBackgroundClip: "text",
//               backgroundClip: "text",
//             }}
//           >
//             sanity
//           </h1>
//         </footer>
//       </main>
//     </div>
//   );
// }

// /* ----------------- TiltLetter ----------------- */
// function TiltLetter({ letter, index }: { letter: string; index: number }) {
//   const ref = useRef<HTMLDivElement | null>(null);
//   const [style, setStyle] = useState<Record<string, any>>({
//     transform: "perspective(900px) translateZ(0px)",
//   });

//   function handleMove(e: React.MouseEvent) {
//     const el = ref.current;
//     if (!el) return;
//     const r = el.getBoundingClientRect();
//     const px = (e.clientX - r.left) / r.width;
//     const py = (e.clientY - r.top) / r.height;
//     const rotateY = (px - 0.5) * 18;
//     const rotateX = (0.5 - py) * 12;
//     setStyle({
//       transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`,
//       transition: "transform 120ms linear",
//       boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
//     });
//   }

//   function handleLeave() {
//     setStyle({
//       transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
//       transition: "transform 400ms cubic-bezier(.2,.9,.3,1)",
//       boxShadow: "none",
//     });
//   }

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMove}
//       onMouseLeave={handleLeave}
//       initial={{ rotate: -18, opacity: 0, y: 40 }}
//       whileInView={{ rotate: 0, opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, delay: index * 0.12 }}
//       viewport={{ once: true }}
//       className="w-36 md:w-44 h-48 md:h-56 flex items-center justify-center border border-neutral-700 bg-black/50 rounded-xl"
//       style={style}
//     >
//       <span className="text-6xl md:text-7xl font-extrabold select-none">
//         {letter}
//       </span>
//     </motion.div>
//   );
// }

// /* ----------------- TiltImageCard ----------------- */
// function TiltImageCard({ src, alt }: { src: string; alt: string }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.03, y: -6 }}
//       transition={{ type: "spring", stiffness: 220, damping: 18 }}
//       className="relative w-full h-44 rounded-lg overflow-hidden bg-neutral-800"
//     >
//       <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
//     </motion.div>
//   );
// }

// // /* ----------------- TimelineDemo ----------------- */
// // function TimelineDemo() {
// //   const data = [
// //     {
// //       title: "2024",
// //       content: (
// //         <div>
// //           <p className="mb-8 text-xs font-normal text-neutral-300 md:text-sm">
// //             Built and launched Aceternity UI and Aceternity UI Pro from scratch
// //           </p>
// //           <div className="grid grid-cols-2 gap-4">
// //             {[1, 2].map((i) => (
// //               <img
// //                 key={i}
// //                 src={`https://assets.aceternity.com/templates/startup-${i}.webp`}
// //                 alt={`startup-${i}`}
// //                 className="h-24 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       ),
// //     },
// //     {
// //       title: "Early 2023",
// //       content: (
// //         <div>
// //           <p className="mb-6 text-xs font-normal text-neutral-300 md:text-sm">
// //             Expanded into multi-component design systems, integrating motion and
// //             real-time interactions for enterprises.
// //           </p>
// //           <div className="grid grid-cols-2 gap-4">
// //             <img
// //               src="https://assets.aceternity.com/features-section.png"
// //               alt="features"
// //               className="h-24 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
// //             />
// //             <img
// //               src="https://assets.aceternity.com/cards.png"
// //               alt="cards"
// //               className="h-24 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
// //             />
// //           </div>
// //         </div>
// //       ),
// //     },
// //     {
// //       title: "Changelog",
// //       content: (
// //         <div>
// //           <p className="mb-4 text-xs font-normal text-neutral-300 md:text-sm">
// //             Deployed new motion-enabled components and refined engineering
// //             practices.
// //           </p>
// //           <ul className="list-disc pl-6 mb-6 text-xs md:text-sm text-neutral-400">
// //             <li>✨ Added Bento Grid system</li>
// //             <li>⚙️ Improved dark/light mode transitions</li>
// //             <li>🧠 Enhanced 3D motion responsiveness</li>
// //           </ul>
// //           <img
// //             src="https://assets.aceternity.com/pro/hero-sections.png"
// //             alt="hero"
// //             className="h-24 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
// //           />
// //         </div>
// //       ),
// //     },
// //   ];

// //   return (
// //     <div className="relative w-full overflow-clip">
// //       <Timeline data={data} />
// //     </div>
// //   );
// // }


// /* ----------------- TimelineJobsDemo ----------------- */
// /* ----------------- TimelineJobsDemo ----------------- */
// function TimelineJobsDemo() {
//   const data = JOB_CATEGORIES.map((cat, catIndex) => ({
//     title: cat.title,
//     content: (
//       <div className="space-y-3">
//         {/* ---- JOB LINKS ---- */}
//         {cat.jobs.map((job, i) => (
//           <Link key={i} href={`/careers/${encodeURIComponent(job)}`}>
//             <motion.div
//               whileHover={{ x: 8 }}
//               transition={{ type: "spring", stiffness: 220, damping: 20 }}
//               className="p-3 border border-neutral-800 rounded-lg cursor-pointer transition-colors duration-200 group"
//             >
//               <span className="text-sm md:text-base text-cyan-200 group-hover:text-black group-hover:bg-cyan-200 px-2 py-1 rounded-md transition-colors duration-200 inline-block">
//                 {job}
//               </span>
//             </motion.div>
//           </Link>
//         ))}

//         {/* ---- ANIMATED LINE UNDER CATEGORY ---- */}
//         <motion.div
//           className="border border-white my-6 w-full"
//           initial={{ scaleX: 0, originX: 1 }}
//           whileInView={{ scaleX: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 1, ease: "easeOut", delay: catIndex * 0.2 }}
//         />
//       </div>
//     ),
//   }));

//   return (
//     <div className="relative w-full overflow-clip">
//       <Timeline data={data} />
//     </div>
//   );
// }







// 'use client'
// import { useState } from "react";
// import { motion } from "framer-motion";
// import Navbar from "@/components/Navbar";
// import RoleScrollSection from "@/components/RoleScrollSection"; // ✅ new import
// import DataCenterSection from "@/components/DataCenterSection"; // ✅ new import
// // import PinnedJobSection from "@/components/PinnedJobSection";


// const boxes = [
//   { letter: "R", height: "h-[480px]", offsetTop: "mt-2", offsetBottom: "mb-4" },
//   { letter: "o", height: "h-[360px]", offsetTop: "mt-4", offsetBottom: "mb-10" },
//   { letter: "l", height: "h-[520px]", offsetTop: "mt-20", offsetBottom: "mb-6" },
//   { letter: "e", height: "h-[400px]", offsetTop: "mt-8", offsetBottom: "mb-12" },
//   { letter: "s", height: "h-[460px]", offsetTop: "mt-16", offsetBottom: "mb-2" },
// ];

// export default function VisionPage() {
//   return (
//     <div className="flex bg-[#151617]  min-h-screen overflow-x-hidden">
//       {/* ✅ Fixed Sidebar */}
//       <Navbar />

//       {/* ✅ Scrollable Right Section */}
//       <section className="flex-1 overflow-y-auto max-w-5xl mx-auto px-4 ml-48 flex flex-col items-center justify-start bg-[#151617]  mt-0 pt-0 pb-8">
        
//         {/* Boxes Row */}
//         <div className="flex flex-wrap justify-center items-end gap-4 md:gap-5 ml-7 w-full ">
//           {boxes.map((box, i) => (
//             <TiltLetter key={i} {...box} />
//           ))}
//         </div>

//         {/* Description Text */}
//         <p className="max-w-2xl text-left text-gray-200 mt-4 text-sm md:text-base leading-relaxed px-4 md:px-0 ">
//           Join our mission at poolside and work alongside some of the world's top talent,
//           at the forefront of applied research and engineering at scale.
//         </p>
// <div className="flex justify-center">
//   <div className="border-b border-gray-100 my-12 ml-4 w-[950px]"></div>
// </div>


//         {/* ✅ Add the scrollable image animation section */}
//         <div className="mt-2  w-full">
//           <RoleScrollSection />
//         </div>

//         {/* ✅ Data Center Section */}
// <div className="mt-2 w-full">
//   <DataCenterSection />
// </div>




//       {/* ✅ Full-width Footer */}
//       <footer className="w-full flex justify-center items-center min-h-[40vh]  bg-[#151617] mt-8 -mb-8 overflow-x-hidden">
//         <h1
//           className="text-[100px] md:text-[160px] font-extrabold text-transparent mr-24 uppercase tracking-wide"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(0deg, #ccc 0, #ccc 2px, transparent 2px, transparent 8px)",
//             WebkitBackgroundClip: "text",
//             backgroundClip: "text",
//           }}
//         >
//           SANITY
//         </h1>
//       </footer>




//       </section>
      
//     </div>



         




//   );
// }

// /* 🎯 Custom letter component with 3D tilt text only */
// function TiltLetter({
//   letter,
//   height,
//   offsetTop,
//   offsetBottom,
// }: {
//   letter: string;
//   height: string;
//   offsetTop: string;
//   offsetBottom: string;
// }) {
//   const [rotate, setRotate] = useState({ x: 0, y: 0 });

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - left;
//     const y = e.clientY - top;
//     const rotateX = ((y - height / 2) / height) * -20;
//     const rotateY = ((x - width / 2) / width) * 20;
//     setRotate({ x: rotateX, y: rotateY });
//   };

//   const resetRotate = () => setRotate({ x: 0, y: 0 });

//   return (
//     <div
//       onMouseMove={handleMouseMove}
//       onMouseLeave={resetRotate}
//       className={`relative border border-white w-[120px] md:w-[160px] lg:w-[175px] ${height} ${offsetTop} ${offsetBottom} flex items-center justify-center perspective-[800px]`}
//     >
//       <motion.span
//         className="font-extrabold text-[#151617] select-none"
//         style={{
//           fontSize: "clamp(8rem, 16vw, 16rem)",
//           WebkitTextStroke: "1px #fff",
//           textShadow: "2px 2px 4px rgba(255,255,255,0.25)",
//         }}
//         animate={{
//           rotateX: rotate.x,
//           rotateY: rotate.y,
//         }}
//         transition={{ type: "spring", stiffness: 200, damping: 15 }}
//       >
//         {letter}
//       </motion.span>
//     </div>
//   );
// }

 


'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import RoleScrollSection from "@/components/RoleScrollSection";
import DataCenterSection from "@/components/DataCenterSection";

// ⭐ MOBILE-ONLY HEIGHTS ADDED (desktop values untouched)
const boxes = [
  { letter: "R", height: "h-[260px] sm:h-[400px] md:h-[480px]", offsetTop: "mt-2", offsetBottom: "mb-4" },
  { letter: "o", height: "h-[220px] sm:h-[300px] md:h-[360px]", offsetTop: "mt-4", offsetBottom: "mb-10" },
  { letter: "l", height: "h-[280px] sm:h-[420px] md:h-[520px]", offsetTop: "mt-10 md:mt-20", offsetBottom: "mb-6" },
  { letter: "e", height: "h-[230px] sm:h-[320px] md:h-[400px]", offsetTop: "mt-6 md:mt-8", offsetBottom: "mb-12" },
  { letter: "s", height: "h-[250px] sm:h-[360px] md:h-[460px]", offsetTop: "mt-8 md:mt-16", offsetBottom: "mb-2" },
];

export default function VisionPage() {
  return (
    <div className="bg-[#151617] min-h-screen overflow-x-hidden w-full">     {/* ⭐ MOBILE FULL WIDTH FIX */}
      
      <div className="flex flex-col md:flex-row">
        <Navbar />

        <section className="flex-1 overflow-y-auto w-full px-2 sm:px-4 md:ml-48 max-w-6xl mx-auto flex flex-col items-center justify-start bg-[#151617] mt-8 md:mt-0   pt-0 pb-8">
          {/* ⭐ REPLACED -ml-40 mr-96 WITH MOBILE-SAFE ml-0 mr-0 */}
          <div
            className="
              flex flex-wrap justify-center items-center gap-4 md:gap-5 mt-4
              ml-0 mr-0
              md:ml-48
              lg:ml-0 lg:mr-0
            "
          >
            {boxes.map((box, i) => (
              <TiltLetter key={i} {...box} />
            ))}
          </div>

          {/* ⭐ MOBILE FULL WIDTH TEXT */}
          <p className="w-full sm:max-w-2xl text-left text-gray-200 mt-4 text-sm md:text-base leading-relaxed px-3 md:px-0">
            Join our mission at poolside and work alongside some of the world's top talent,
            at the forefront of applied research and engineering at scale.
          </p>

          <div className="flex justify-center w-full ">
            <div className="border-b border-gray-100 my-8 w-3/4 md:w-[970px]"></div>
          </div>

          <div className="mt-2 px-0 w-full">
            <RoleScrollSection />
          </div>

          <div className="p-2 m-0 w-full [&_*]:!px-0 [&_*]:!mx-0">
  <div className="py-6 space-y-4">
    <DataCenterSection />
  </div>
</div>


        


       


          <footer className="w-full flex justify-center items-center min-h-[40vh] bg-[#151617] mt-8 md:-mb-8">
            {/* ⭐ MOBILE FONT SIZE FIX */}
            <h1
              className="text-[100px] sm:text-[100px] md:text-[140px] lg:text-[160px] lg:mr-28 font-extrabold text-transparent uppercase tracking-wide text-center"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, #ccc 0, #ccc 2px, transparent 2px, transparent 8px)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              SANITY
            </h1>
          </footer>
        </section>
      </div>
    </div>
  );
}

/* 🎯 Letter Component (unchanged except responsive heights above) */
function TiltLetter({
  letter,
  height,
  offsetTop,
  offsetBottom,
}: {
  letter: string;
  height: string;
  offsetTop: string;
  offsetBottom: string;
}) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateX = ((y - height / 2) / height) * -20;
    const rotateY = ((x - width / 2) / width) * 20;
    setRotate({ x: rotateX, y: rotateY });
  };

  const resetRotate = () => setRotate({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotate}
      className={`relative border border-white w-[78px] sm:w-[120px] md:w-[160px] lg:w-[175px] ${height} ${offsetTop} ${offsetBottom} flex items-center justify-center perspective-[800px]`}
    >
      <motion.span
        className="font-extrabold text-[#151617] select-none"
        style={{
          fontSize: "clamp(5rem, 12vw, 16rem)",
          WebkitTextStroke: "1px #fff",
          textShadow: "2px 2px 4px rgba(255,255,255,0.25)",
        }}
        animate={{
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        {letter}
      </motion.span>
    </div>
  );
}
