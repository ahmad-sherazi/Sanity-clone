// "use client";

// import { motion, useDragControls } from "framer-motion";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// //import { motion } from "framer-motion";
// import Image from "next/image";

// let globalZ = 20;

// export default function Home() {
//   const [isMobile, setIsMobile] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [mobileCardPositions, setMobileCardPositions] = useState<number[]>([]);

//   const mobileCards = [
//     { text: "We build the", width: 220, height: 120, fontSize: 18 },
//     { text: "models.", width: 220, height: 110, fontSize: 16 },
//     { text: "You build the future.", width: 260, height: 140, fontSize: 20, highlight: true, big: true },
//     { text: "AI for Software,", width: 240, height: 120, fontSize: 16 },
//     { text: "redefined.", width: 220, height: 100, fontSize: 16, big: true },
//   ];

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 640);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Calculate vertical stacking positions for mobile cards
//   useEffect(() => {
//     if (!isMobile) return;
//     const totalHeight = mobileCards.reduce((acc, card) => acc + card.height + 20, -20); // 20px gap
//     const startY = window.innerHeight / 2 - totalHeight / 2;
//     let currentY = startY;
//     const positions: number[] = [];
//     mobileCards.forEach((card) => {
//       positions.push(currentY);
//       currentY += card.height + 20; // gap between cards
//     });
//     setMobileCardPositions(positions);
//   }, [isMobile]);



//   const words = ["models.", "future.", "data."];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % words.length);
//     }, 2500); // change every 2.5s
//     return () => clearInterval(interval);
//   }, [words.length]);

//   return (
//     <main className="min-h-screen bg-black text-white relative overflow-hidden">
//       {/* Navbar */}
//       {!isMobile ? (
//         <nav className="relative z-20 flex justify-between items-center px-8 py-10 bg-black border-b border-gray-700">
//           <h1 className="text-lg font-bold tracking-tight">Poolside Clone</h1>
//           <ul className="flex gap-6 text-sm text-gray-300">
//             <li className="hover:text-white cursor-pointer">Home</li>
//             <li className="hover:text-white cursor-pointer"><Link href="/platform">Platform</Link></li>
//             <li className="hover:text-white cursor-pointer"><Link href="/approach">Approach</Link></li>
//           </ul>
//         </nav>
//       ) : (
//         <nav className="relative z-20 flex justify-between items-center px-4 py-4 bg-black border-b border-gray-700">
//           <h1 className="text-lg font-bold tracking-tight">Poolside Clone</h1>
//           <button className="bg-white text-black px-4 py-2 rounded">Talk</button>
//         </nav>
//       )}

//       {/* Mobile menu button */}
//       {isMobile && (
//         <>
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="fixed bottom-4 right-4 z-30 p-4 bg-gray-800 rounded-full shadow-lg text-xl"
//           >
//             ☰
//           </button>
//           {menuOpen && (
//             <div className="fixed bottom-16 right-4 z-30 bg-black text-white p-4 rounded-lg shadow-lg flex flex-col gap-2">
//               <span>Home</span>
//               <Link href="/platform">Platform</Link>
//               <Link href="/approach">Approach</Link>
//               <span>About</span>
//             </div>
//           )}
//         </>
//       )}

//       {/* Cards area */}
//       <div
//         className={`relative z-10 ${
//           isMobile
//             ? "pt-12 flex flex-col items-center"
//             : "w-full h-[calc(100vh-64px)] flex items-start justify-center pt-24"
//         }`}
//       >
//         {/* Dotted background → moved here so it's only behind draggable cards */}
//         <div
//           className="absolute inset-y-0 left-[6%] right-[6%] 
//           bg-[radial-gradient(circle,_white_1px,_transparent_1px)] 
//           [background-size:30px_30px] z-0"
//         />

//         {!isMobile ? (
//           <>
//             {/* Desktop layout - unchanged */}
//             <DraggableCard text="We build" x={-365} y={-35} width="250px" height="150px" />
//             <DraggableCard text="the" x={-180} y={-75} width="200px" height="190px" big />
//             <DraggableCard text="models." x={-10} y={-15} width="220px" height="130px" />
//             <DraggableCard
//               text="You build the future."
//               x={265}
//               y={110}
//               width="480px"
//               height="150px"
//               highlight
//               big
//               defaultZ={90}
//             />
//             <DraggableCard text="AI for" x={-180} y={250} width="200px" height="110px" />
//             <DraggableCard
//               text="Software,"
//               x={-20}
//               y={180}
//               width="210px"
//               height="260px"
//               defaultZ={25}
//             />
//             <DraggableCard text="redefined." x={240} y={250} width="360px" height="110px" big />
//           </>
//         ) : (
//           <>
//             {/* Mobile layout - centered, automatically stacked */}
//             {/* {mobileCards.map((card, index) => (
//               <DraggableCard
//                 key={index}
//                 text={card.text}
//                 x={0}
//                 y={mobileCardPositions[index] || 10}
//                 width={`${card.width}px`}
//                 height={`${card.height}px`}
//                 fontSize={`${card.fontSize}px`}
//                 highlight={card.highlight}
//                 big={card.big}
//               />
//             ))} */}
//           </>
//         )}
//       </div>





//       {/* ⭐ NEW SECTION: Everything text + animated line */}
//       <section className="relative w-full flex flex-col md:flex-row items-center md:items-center  sm:mt-48 justify-center bg-black px-8 py-12">
//         {/* Text */}
//         <motion.h2
//           // initial={{ opacity: 0, x: 50 }}
//           // whileInView={{ opacity: 1, x: 0 }}
//           // transition={{ duration: 1, delay: 0.5 }}
//           // viewport={{ once: true }}
//           className="text-4xl md:text-4xl font-bold text-white text-center md:text-left md:flex-1"
//         >
//           Everything begins <br /> with intelligence.
//         </motion.h2>

//         {/* Line */}
//         <motion.div
//           initial={{ width: 0, opacity: 0 }}
//           whileInView={{ width: "60%", opacity: 1 }}
//           transition={{ duration: 1.5, delay: 2 }}
//           viewport={{ once: true }}
//           className="h-[2px] bg-white mt-2 md:mt-0 md:ml-6 w-3/4 md:w-1/2 self-center md:self-auto"
//         />
//       </section>

//       {/* {-------------------------- FIRST TEXT ENDDDDDDDD----------------------} */}











//       {/* ⭐ NEW SECTION: AI Research Lab */}
// <section className="w-full bg-[#111] text-white px-8 py-20">
//   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
//     {/* Left Side (Text) */}
//     <div>
//       <h2 className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-gray-300 to-blue-500 bg-clip-text text-transparent mb-8">
//         We are software&apos;s leading AI research lab.
//       </h2>

//       {/* Paragraphs in two columns */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300 leading-relaxed text-sm">
//         <p>
//           We are a frontier lab focused on building the most capable models and systems to
//           support them. Our models are generally capable and are purpose-built specifically to
//           excel at software engineering.
//         </p>
//         <p>
//           We&apos;re creating our foundation models from the ground up, achieving breakthroughs
//           through original, first-principles research.
//         </p>
//         <p>
//           Our proprietary approach and techniques allow our models to learn like the best
//           developers through trial and error, navigating ambiguity to discover working
//           solutions.
//         </p>
//         <p>
//           Our intelligence understands your architecture, development processes, and how
//           software reflects your business itself—creating compound value that transforms how
//           enterprises operate at every level.
//         </p>
//       </div>
//     </div>

//     {/* Right Side (Image) */}
//     <div className="flex justify-center">
//       <img
//         src="/this.png" // place the image inside public/ folder as this.png
//         alt="AI research illustration"
//         className="w-full max-w-md object-contain"
//       />
//     </div>
//   </div>
// </section>













      

//       {/* ⭐ NEW SECTION: Everything text + animated line */}
//       <section className="relative w-full flex flex-col md:flex-row items-center md:items-center justify-center bg-black px-8 py-12">
//         {/* Text */}
//         <motion.h2
//           // initial={{ opacity: 0, x: 50 }}
//           // whileInView={{ opacity: 1, x: 0 }}
//           // transition={{ duration: 1, delay: 0.5 }}
//           // viewport={{ once: true }}
//           className="text-4xl md:text-4xl font-bold text-white text-center md:text-left md:flex-1"
//         >
//           Everything begins <br /> with intelligence.
//         </motion.h2>

//         {/* Line */}
//         <motion.div
//           initial={{ width: 0, opacity: 0 }}
//           whileInView={{ width: "60%", opacity: 1 }}
//           transition={{ duration: 1.5, delay: 2 }}
//           viewport={{ once: true }}
//           className="h-[2px] bg-white mt-2 md:mt-0 md:ml-6 w-3/4 md:w-1/2 self-center md:self-auto"
//         />
//       </section>

//       {/* {------------------------------------------------} */}









// <section className="relative w-full flex flex-col md:flex-row items-center justify-between min-h-screen bg-black px-8 py-16 gap-8">
//   {/* LEFT TEXT */}
//   <div className="flex-1 text-white space-y-4">
//     {[
//       "We're delivering intelligence that",
//       "integrates across your entire development",
//       "ecosystem—from IDE to terminal, agents to custom applications.",
//       "Powering software wherever, whenever.",
//     ].map((line, i) => (
//       <motion.p
//         key={i}
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: i * 0.6 }}
//         viewport={{ once: true }}
//         className="text-lg md:text-xl font-mono"
//       >
//         {i + 1}. {line}
//       </motion.p>
//     ))}
//   </div>

//   {/* RIGHT SIDE */}
//   <div className="flex-1 flex flex-col items-center md:items-start justify-center">
//     {/* IMAGES */}
//     <div className="relative w-full h-[400px]">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 1 }}
//         viewport={{ once: true }}
//         className="absolute top-0 left-8 w-64 md:w-80 shadow-lg"
//       >
//         <Image src="/use1.png" alt="API ASCII" width={320} height={200} className="rounded-lg" />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 1.5 }}
//         viewport={{ once: true }}
//         className="absolute top-16 right-0 w-64 md:w-80 shadow-lg"
//       >
//         <Image src="/use2.png" alt="Chat card" width={320} height={200} className="rounded-lg" />
//       </motion.div>

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 2 }}
//         viewport={{ once: true }}
//         className="absolute bottom-0 left-12 w-64 md:w-80 shadow-lg"
//       >
//         <Image src="/use3.png" alt="Terminal card" width={320} height={200} className="rounded-lg" />
//       </motion.div>
//     </div>

//     {/* GRADIENT TEXT - placed BELOW images */}
//     <h2 className="mt-36 text-2xl md:text-2xl font-bold bg-gradient-to-r from-gray-300 to-blue-500 bg-clip-text text-transparent text-left">
//       We are software&apos;s leading AI research lab.
//     </h2>
//   </div>
// </section>



// {/* { -------------------------------- MODEL  FUTURE  DATA  STARTS ------------------} */}

// <section className="relative w-full flex flex-col md:flex-row items-center justify-center bg-black px-8 py-12">
//       {/* TEXT */}
//       <div className="flex items-center text-4xl md:text-4xl font-bold text-center md:text-left md:flex-1">
//         <span className="text-white mr-3">your</span>

//         {/* Rotating words */}
//         <div className="relative h-[3rem] w-[`10rem] overflow-hidden flex items-center justify-center">
//           {words.map((word, i) => {
//             let position = i - index;
//             if (position < -1) position += words.length;
//             if (position > 1) position -= words.length;

//             return (
//               <motion.span
//                 key={i}
//                 animate={{
//                   y: position * 48, // adjust spacing between lines
//                   opacity: position === 0 ? 1 : 0.3,
//                   color: position === 0 ? "#ffffff" : "#9ca3af", // center = white, others grey
//                 }}
//                 transition={{ duration: 0.8 }}
//                 className="absolute"
//               >
//                 {word}
//               </motion.span>
//             );
//           })}
//         </div>
//       </div>

//       {/* LINE */}
//       <motion.div
//         initial={{ width: 0, opacity: 0 }}
//         whileInView={{ width: "60%", opacity: 1 }}
//         transition={{ duration: 1.5, delay: 2 }}
//         viewport={{ once: true }}
//         className="h-[2px] bg-white mt-3 md:mt-0 md:ml-8 w-3/4 md:w-1/2 self-center md:self-auto"
//       />
//     </section>

// {/* { -------------------------------- MODEL  FUTURE  DATA ENDS  ------------------} */}





// {/* {----------------------   AFTER MODEL SECTION STARTS --------------------------} */}

// <section className="relative w-full flex flex-col bg-black px-8 py-16">
//   {/* ROW 1 - Left Heading */}
//   <div className="flex flex-col md:flex-row items-start">
//     <h2 className="text-2xl md:text-3xl mb-6 font-bold bg-gradient-to-r from-gray-300 to-blue-500 bg-clip-text text-transparent">
//       Our Vision for AI
//     </h2>
//   </div>

//   {/* ROW 2 - Left text + middle image */}
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//     {/* Left text */}
//     <div className="text-white flex items-center">
//       <p className="text-sm md:text-base font-mono">
//         We are building models designed to understand code deeply. Our systems
//         learn through structured trial and error. We integrate intelligence
//         seamlessly into workflows. Our goal is to redefine how developers
//         interact with AI.
//       </p>
//     </div>

//     {/* Middle image */}
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, delay: 0.5 }}
//       viewport={{ once: true }}
//       className="flex justify-center mr-5"
//     >
//       <Image
//         src="/use4.png"
//         alt="Row 2"
//         width={800}
//         height={600}
//         className="rounded-lg w-full h-auto max-h-[350px] object-contain"
//       />
//     </motion.div>

//     <div />
//   </div>

//   {/* ROW 3 - middle image (shifted left) */}
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
//     <div />
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, delay: 1 }}
//       viewport={{ once: true }}
//       className="flex justify-start ml-20"
//     >
//       <Image
//         src="/use5.png"
//         alt="Row 3"
//         width={800}
//         height={600}
//         className="rounded-lg w-full h-auto max-h-[350px] object-contain"
//       />
//     </motion.div>
//     <div />
//   </div>

//   {/* ROW 4 - middle image + right text */}
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
//     <div />
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, delay: 1.5 }}
//       viewport={{ once: true }}
//       className="flex justify-end mr-10"
//     >
//       <Image
//         src="/use6.png"
//         alt="Row 4"
//         width={800}
//         height={600}
//         className="rounded-lg w-full h-auto max-h-[350px] object-contain"
//       />
//     </motion.div>

//     {/* Right text */}
//     <div className="text-white flex items-center">
//       <p className="text-sm md:text-base font-mono">
//         Our intelligence scales with enterprise demands. We align with how your
//         architecture evolves. Every deployment creates measurable business
//         value. AI designed to empower developers everywhere.
//       </p>
//     </div>
//   </div>

//   {/* ROW 5 - Right heading */}
//   <div className="flex flex-col md:flex-row justify-end">
//     <h2 className="text-2xl md:text-3xl mt-6 font-bold bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent">
//       The Future Starts Here
//     </h2>
//   </div>
// </section>






// {/* {----------------------   AFTER MODEL SECTION ENDS --------------------------} */}








//     </main>
//   );
// }

// function DraggableCard({
//   text,
//   width,
//   height,
//   highlight = false,
//   big = false,
//   x = 0,
//   y = 0,
//   defaultZ = 10,
//   fontSize,
// }: {
//   text: string;
//   width: string;
//   height: string;
//   highlight?: boolean;
//   big?: boolean;
//   x?: number;
//   y?: number;
//   defaultZ?: number;
//   fontSize?: string;
// }) {
//   const [zIndex, setZIndex] = useState(defaultZ);
//   const controls = useDragControls();

//   const bringToFront = () => {
//     globalZ += 1;
//     setZIndex(globalZ);
//   };

//   return (
//     <motion.div
//       drag
//       dragControls={controls}
//       dragListener={false}
//       dragElastic={0}
//       dragMomentum={false}
//       initial={{ x, y }}
//       style={{ width, height, zIndex }}
//       onPointerDown={bringToFront}
//       className={`absolute select-none
//         ${highlight
//           ? "bg-[radial-gradient(circle,_gray_3px,_transparent_2px)] [background-size:5px_5px]"
//           : "bg-black"}
//         border-2 border-[#c0c0c0e3]
//         ${text.includes("AI for") || text.includes("Software") || text === "redefined."
//           ? "border-r-[4px] border-b-[4px] border-[#c0c0c0e3] border-b-[#c0c0c0e3]"
//           : "border-r-[4px] border-b-[6px] border-r-[#c0c0c0e3] border-b-[#c0c0c0e3]"}
//         shadow-md flex flex-col`}
//     >
//       {/* Drag handle */}
//       <div
//         className="p-2 cursor-grab active:cursor-grabbing"
//         onPointerDown={(e) => {
//           bringToFront();
//           controls.start(e);
//         }}
//       >
//         <div className="grid grid-cols-3 gap-0.5 w-4 h-4">
//           {Array.from({ length: 9 }).map((_, i) => (
//             <span key={i} className="w-1 h-1 bg-gray-400 inline-block" />
//           ))}
//         </div>
//       </div>

//       {/* Text */}
//       <div
//         className={`flex-1 flex items-center justify-center p-4 text-center font-sans font-bold tracking-tight whitespace-nowrap
//           ${highlight
//             ? "bg-[radial-gradient(circle,_white_1px,)] [background-size:3px_3px] text-white"
//             : "bg-black text-white"}`}
//       >
//         <span style={{ fontSize: fontSize || (big ? "3rem" : "2.5rem") }} className="leading-snug">
//           {text}
//         </span>
//       </div>
//     </motion.div>
//   );
// }











// REAl CODE BELOW : _________________________________________--- 







// "use client";

// import Link from "next/link";
// import { Inter } from "next/font/google";
// import Navbar from "@/components/Navbar";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

 




// export default function Home() {

//  const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { name: "PLATFORM", href: "/platform" },
//     { name: "APPROACH", href: "/approach" },
//     { name: "VISION", href: "/vision" },
//     { name: "CAREERS", href: "/careers" },
//     { name: "BLOG", href: "/blog" },
//     { name: "NEWSROOM", href: "/newsroom" },
//   ];




//   return (
//     <>
//     <div className={`${inter.className} min-h-screen bg-[#151617] text-white flex`}>
      
//        {/* ---------- DESKTOP SIDEBAR ---------- */}
//       <aside className="hidden md:flex w-32 h-screen fixed left-0 top-0 flex-col items-start justify-start mt-12 gap-3 pl-8 ml-8 text-white text-sm font-mono tracking-wider bg-[#151617]">
//         <div className="flex items-center gap-2 hover:bg-cyan-100 ">
//           <Link href="/"><span className="text-cyan-100 hover:text-black font-semibold">POOLSIDE</span></Link>
//         </div>

//         {links.map((link, i) => (
//           <Link
//             key={i}
//             href={link.href}
//             className="hover:text-black hover:bg-cyan-100 transition-colors cursor-pointer text-white"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </aside>

//       {/* ---------- MOBILE NAVBAR ---------- */}
//       <div className="md:hidden fixed top-0 left-0 w-full bg-black flex justify-between items-center px-6 py-4 z-50 text-white font-mono tracking-wider border-b border-gray-900">
//         <span className="text-cyan-100 font-semibold">POOLSIDE</span>

//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="text-gray-300"
//           aria-label="Toggle menu"
//         >
//           {menuOpen ? <X size={22} /> : <Menu size={22} />}
//         </button>

//         {menuOpen && (
//           <div className="absolute top-14 left-0 w-full bg-black flex flex-col gap-3 py-4 px-8 text-sm border-t border-gray-800">
//             {links.map((link, i) => (
//               <Link
//                 key={i}
//                 href={link.href}
//                 onClick={() => setMenuOpen(false)}
//                 className="hover:text-white transition-colors text-gray-300"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* ---------- MAIN CONTENT ---------- */}
//       <main className="flex-1 ml-28 flex flex-col items-center">
//         {/* HERO SECTION */}
//         <section className="relative w-full max-w-4xl h-[450px] border border-grayy-300 flex flex-col justify-between px-16 py-16 mt-12">
//           <div className="">
//             <h1
//               className="text-[44px] leading-tight font-light text-white"
//               style={{
//                 fontFamily:
//                   "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
//                 fontWeight: 500,
//               }}
//             >
//               We build the models.<br />
//               You build the future.
//             </h1>
//           </div>

//           <div className="text-right self-end">
//             <p
//               className="text-lg text-gray-300 font-normal"
//               style={{
//                 fontFamily:
//                   "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
//               }}
//             >
//               AGI for the enterprise—starting with software agents.
//             </p>
//           </div>
//         </section>




// {/* FEATURES GRID SECTION */}
// <section className="w-full bg-[#151617] px-8 mt-20 py-16">
//   {/* Match hero box width and remove gap */}
//   <div className="max-w-4xl mx-auto">
//     <div className="grid grid-cols-2 gap-0">
//       {/* Top Left - Foundational AI */}
//       <div className="border border-[#BBBBBB] p-8 flex flex-col justify-between min-h-[400px]">
//         <div>
//           <h3 className="text-white text-2xl font-mono mb-4">
//             Foundational AI, built and battle-hardened for enterprise.
//           </h3>
//         </div>
//         {/* <svg
//           className="w-full h-48 mt-8"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g stroke="#666" strokeWidth="1" fill="none">
//             <line x1="50" y1="50" x2="150" y2="50" />
//             <line x1="150" y1="50" x2="150" y2="150" />
//             <line x1="150" y1="150" x2="50" y2="150" />
//             <line x1="50" y1="150" x2="50" y2="50" />
//             <line x1="50" y1="50" x2="100" y2="20" />
//             <line x1="150" y1="50" x2="100" y2="20" />
//             <line x1="150" y1="150" x2="100" y2="180" />
//             <line x1="50" y1="150" x2="100" y2="180" />
//             <line x1="100" y1="20" x2="100" y2="180" />
//             <circle cx="50" cy="50" r="3" fill="#666" />
//             <circle cx="150" cy="50" r="3" fill="#666" />
//             <circle cx="150" cy="150" r="3" fill="#666" />
//             <circle cx="50" cy="150" r="3" fill="#666" />
//             <circle cx="100" cy="20" r="3" fill="#666" />
//             <circle cx="100" cy="180" r="3" fill="#666" />
//           </g>
//         </svg> */}
//       </div>

//       {/* Top Right - Agentic and Multi-Agent */}
//       <div className="border border-[#BBBBBB] p-8 flex flex-col justify-between min-h-[400px]">

//          <svg
//           className="w-full h-96 mt-7"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g stroke="#666" strokeWidth="1" fill="none">
//             <circle cx="100" cy="100" r="60" />
//             <ellipse cx="100" cy="100" rx="60" ry="20" />
//             <path d="M 100 40 Q 140 100 100 160 Q 60 100 100 40" />
//             <circle cx="100" cy="40" r="4" fill="#666" />
//             <circle cx="160" cy="100" r="4" fill="#666" />
//             <circle cx="100" cy="160" r="4" fill="#666" />
//             <circle cx="40" cy="100" r="4" fill="#666" />
//           </g>
//         </svg>
//         <div>
//           <h3 className="text-gray-100 text-md font-bold ">
//             Agentic and Multi-Agent Orchestration
//           </h3>
//           <p className="text-[#BBBBBB] text-sm leading-relaxed">
//             Single and multi-agent workflows that can plan, take action, and reason.
//             Leverage our framework to build anything from simple agents to complex,
//             multi-step agentic systems.
//           </p>
//         </div>
       
//       </div>

//       {/* Middle Left - Developer Ecosystem */}
//       <div className="border border-[#BBBBBB] p-8 flex flex-col justify-between min-h-[400px]">
//          <svg
//           className="w-full h-96 mt-7"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g stroke="#666" strokeWidth="1" fill="none">
//             <rect x="40" y="30" width="120" height="140" rx="8" />
//             <rect x="50" y="40" width="100" height="100" />
//             <line x1="50" y1="55" x2="150" y2="55" />
//             <line x1="50" y1="70" x2="150" y2="70" />
//             <line x1="50" y1="85" x2="150" y2="85" />
//             <line x1="50" y1="100" x2="150" y2="100" />
//             <line x1="50" y1="115" x2="150" y2="115" />
//             <circle cx="100" cy="165" r="5" />
//           </g>
//         </svg>
//         <div>
//           <h3 className="text-gray-100 text-md font-bold ">
//             Developer Ecosystem
//           </h3>
//           <p className="text-[#BBBBBB] text-sm leading-relaxed">
//             Full integrations, libraries and SDKs across your entire development
//             workflow. Integrate more with your engineers.
//           </p>
//         </div>
       
//       </div>

//       {/* Middle Right - Data and Knowledge */}
//       <div className="border border-[#BBBBBB] p-8 flex flex-col justify-between min-h-[400px]">
//         <svg
//           className="w-full h-96 mt-7"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g stroke="#666" strokeWidth="1" fill="none">
//             <rect x="40" y="40" width="50" height="50" />
//             <rect x="110" y="40" width="50" height="50" />
//             <rect x="40" y="110" width="50" height="50" />
//             <rect x="110" y="110" width="50" height="50" />
//             <line x1="90" y1="65" x2="110" y2="65" />
//             <line x1="65" y1="90" x2="65" y2="110" />
//             <line x1="135" y1="90" x2="135" y2="110" />
//             <line x1="90" y1="135" x2="110" y2="135" />
//           </g>
//         </svg>
//         <div>
//           <h3 className="text-gray-100 text-md font-bold ">Data and Knowledge</h3>
//           <p className="text-[#BBBBBB] text-sm leading-relaxed">
//             Comprehensive data connectors, data retrieval, and knowledge
//             management. Connect to your data sources and proprietary information.
//           </p>
//         </div>
        
//       </div>

//       {/* Bottom Left - Presentation Modules */}
//       <div className="border border-[#BBBBBB] p-8 flex flex-col justify-between min-h-[550px]">

//         <svg
//           className="w-full h-96 mt-7"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g stroke="#666" strokeWidth="1" fill="none">
//             <circle cx="100" cy="100" r="15" />
//             <line x1="100" y1="100" x2="100" y2="30" />
//             <line x1="100" y1="100" x2="170" y2="100" />
//             <line x1="100" y1="100" x2="100" y2="170" />
//             <line x1="100" y1="100" x2="30" y2="100" />
//             <line x1="100" y1="100" x2="150" y2="50" />
//             <line x1="100" y1="100" x2="150" y2="150" />
//             <line x1="100" y1="100" x2="50" y2="150" />
//             <line x1="100" y1="100" x2="50" y2="50" />
//             <circle cx="100" cy="30" r="4" fill="#666" />
//             <circle cx="170" cy="100" r="4" fill="#666" />
//             <circle cx="100" cy="170" r="4" fill="#666" />
//             <circle cx="30" cy="100" r="4" fill="#666" />
//           </g>
//         </svg>
//         <div>
//           <h3 className="text-gray-100 text-md font-bold ">
//             Presentation Modules
//           </h3>
//           <p className="text-[#BBBBBB] text-sm leading-relaxed">
//             Prebuilt UI components designed in your environment. Structured agents
//             and agentic systems built together with you.
//           </p>
//         </div>
        
//       </div>

//       {/* Bottom Right - CTA Section */}
//       <div className="border border-[#BBBBBB] p-8 flex flex-col justify-between min-h-[300px] bg-[#151617] ">
//         <div>
//           <h2 className="text-gray-100 text-2xl font-semibold mb-6 leading-tight">
//             Delivering intelligence across your development lifecycle—from IDE to
//             terminal, agents to custom applications.
//           </h2>
//           <p className="text-[#BBBBBB] text-xl font-light mb-8">
//             Everywhere work gets done.
//           </p>
//           <button className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-100 text-cyan-100 hover:bg-cyan-100 hover:text-black transition-colors font-mono text-sm">
//             → THE POOLSIDE PLATFORM
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


// <div className="flex justify-center items-center mt-40 mb-40 min-h-[40vh] bg-[#151617]">
//   <h1
//     className="text-[160px] font-extrabold text-transparent uppercase tracking-wide transition-all duration-300"
//     style={{
//       backgroundImage:
//         "repeating-linear-gradient(0deg, #cffafe 0, #cffafe 2px, transparent 2px, transparent 8px)", // exact cyan-100 lines
//       WebkitBackgroundClip: "text",
//       backgroundClip: "text",
//       color: "transparent",
//     }}
//     onMouseEnter={(e) => {
//       (e.currentTarget as HTMLElement).style.backgroundImage =
//         "repeating-linear-gradient(0deg, #a5f3fc 0, #a5f3fc 2px, transparent 2px, transparent 8px)"; // hover cyan-200
//     }}
//     onMouseLeave={(e) => {
//       (e.currentTarget as HTMLElement).style.backgroundImage =
//         "repeating-linear-gradient(0deg, #cffafe 0, #cffafe 2px, transparent 2px, transparent 8px)"; // default cyan-100
//     }}
//   >
//     Sanity
//   </h1>
// </div>









//     {/* OUTCOMES SECTION */}



//  <section className="bg-[#151617] text-white py-16 px-8">
//       {/* Top Text */}
//       <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 mb-12">
//         <div>
//           <h2 className="text-3xl font-semibold leading-snug">
//             Outcomes, not tokens.
//             <br />
//             Inside your boundary.
//           </h2>
//         </div>
//         <div>
//           <p className="text-[#BBBBBB] leading-relaxed">
//             <span className="font-semibold text-white">
//               Forward Deployed Research Engineers
//             </span>{" "}
//             embed with your teams to design, build, and operate intelligence
//             where your software work actually happens.
//           </p>
//         </div>
//       </div>

//       {/* Diagram Box */}
//       <div className="max-w-4xl mx-auto border border-white p-6 mb-12 flex items-center justify-center">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 800 300"
//           className="w-full h-[400px] object-contain"
//         >
//           {/* Background grid lines (optional subtle effect) */}
//           <rect x="1" y="1" width="798" height="298" fill="none" stroke="none" />

//           {/* Main diagram lines */}
//           <g
//             stroke="#999"
//             strokeWidth="1"
//             fill="none"
//             strokeDasharray="4 3"
//             strokeLinecap="round"
//           >
//             {/* Horizontal connection lines */}
//             <line x1="80" y1="150" x2="720" y2="150" />
//             <line x1="80" y1="90" x2="720" y2="90" />
//             <line x1="80" y1="210" x2="720" y2="210" />
//           </g>

//           {/* Diamond shapes */}
//           <g stroke="#999" strokeWidth="1.5" fill="none">
//             {/* Left small diamonds */}
//             <polygon points="80,90 100,120 80,150 60,120" />
//             <polygon points="80,150 100,180 80,210 60,180" />
//             <polygon points="80,210 100,240 80,270 60,240" />

//             {/* Big diamonds */}
//             <polygon points="180,60 260,150 180,240 100,150" />
//             <polygon points="320,60 400,150 320,240 240,150" />
//             <polygon points="460,60 540,150 460,240 380,150" />
//             <polygon points="600,60 680,150 600,240 520,150" />
//           </g>

//           {/* Inner oval shapes (representing nodes) */}
//           <g stroke="#999" strokeWidth="1" fill="none" strokeDasharray="5 4">
//             <ellipse cx="180" cy="150" rx="20" ry="45" />
//             <ellipse cx="320" cy="150" rx="20" ry="45" />
//             <ellipse cx="460" cy="150" rx="20" ry="45" />
//             <ellipse cx="600" cy="150" rx="20" ry="45" />
//           </g>
//         </svg>
//       </div>

//       {/* Bottom 4 Text Columns */}
//       <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-10 text-md text-[#AAAAAA]">
//         <div>
//           <h3 className="font-semibold text-gray-100 mb-2">Outcome ownership</h3>
//           <p>
//             We don't hand off models. We take joint responsibility for outcomes,
//             adoption and measurable, long-lasting business impact.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-semibold text-gray-100 mb-2">
//             Inside your security boundary
//           </h3>
//           <p>
//             Deploy on-prem, in your VPC or on workstations (defense only). Your
//             data never leaves your control. Role-based access control for humans
//             and agents by default.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-semibold text-gray-100 mb-2">
//             Built for complex environments
//           </h3>
//           <p>
//             We work across heterogeneous environments: multi-cloud, legacy
//             systems and air-gapped networks. No rip-and-replace.
//           </p>
//         </div>

//         <div>
//           <h3 className="font-semibold text-gray-100 mb-2">
//             Executive-grade governance
//           </h3>
//           <p>
//             Risk controls and auditability as a feature, co-designed in the
//             toughest environments. All aligned to enterprise review boards and
//             CISO requirements.
//           </p>
//         </div>
//       </div>
//     </section>


        
      




// <section className="bg-[#151617] text-white py-24 px-6">
//   <div className="max-w-5xl mx-auto">
//     {/* First Row */}
//     <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-56 border-b border-cyan-100 pb-6">
//       <h2 className="text-3xl font-light leading-tight">
//         Is poolside right for your business?
//       </h2>
//       <a
//         href="#"
//         className="text-cyan-100 font-semibold uppercase tracking-wide text-sm flex items-center gap-2 hover:text-black hover:bg-cyan-100 transition"
//       >
//         → Talk to us today
//       </a>
//     </div>
//   </div>
// </section>














//      <section className="w-full bg-[#151617] px-8 py-24">
//   <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
    
//     {/* LEFT ILLUSTRATION with WHITE BORDER */}
//     <div className="w-full flex justify-center">
//       <div className="border border-white p-4 ml-4">
//         <svg
//           className="w-[300px] h-[600px]"
//           viewBox="0 0 300 300"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g stroke="#666" strokeWidth="1.2" fill="none">
//             {/* Pool outline */}
//             <ellipse cx="150" cy="200" rx="100" ry="30" />
//             <ellipse cx="150" cy="210" rx="100" ry="30" />
//             <path d="M50 200 v40" />
//             <path d="M250 200 v40" />

//             {/* Ladder */}
//             <path d="M70 180 v40" />
//             <path d="M85 180 v40" />
//             <line x1="70" y1="190" x2="85" y2="190" />
//             <line x1="70" y1="200" x2="85" y2="200" />
//             <line x1="70" y1="210" x2="85" y2="210" />

//             {/* Umbrella */}
//             <line x1="150" y1="80" x2="150" y2="160" />
//             <polygon points="90,80 150,30 210,80 150,90" />
//             <line x1="90" y1="80" x2="150" y2="90" />
//             <line x1="210" y1="80" x2="150" y2="90" />

//             {/* Tube */}
//             <ellipse cx="200" cy="250" rx="25" ry="10" />
//             <ellipse cx="200" cy="250" rx="15" ry="5" />
//           </g>
//         </svg>
//       </div>
//     </div>

//     {/* RIGHT TEXT SECTION */}
//     <div className="text-gray-100 space-y-2">
//       <h2 className="text-xl md:text-4xl font-light leading-snug">
//         <span className="text-[#AAAAAA] font-normal">Our </span>
//         <span className="text-[#AAAAAA] font-normal">vision</span>
//         <span className="text-gray-100">
//           —the fastest path to AGI runs through software.
//         </span>
//       </h2>

//       <p className="text-sm leading-relaxed text-gray-100 mt-12">
//         <span className="text-white font-semibold">Our mission is:</span> for artificial general
//         intelligence to drive abundance for humanity.
//       </p>

//       <p className="text-sm leading-relaxed text-gray-100">
//         We’ve chosen software engineering as our strategic beachhead because we believe it’s the
//         fastest route to human-level intelligence.
//       </p>

//       <p className="text-sm leading-relaxed text-gray-100">
//         Software development requires understanding the world, the ability to do multistep complex
//         reasoning, and the ability to plan across long-horizon objectives. In other words, software
//         development mirrors human reasoning. Humans learn by grokking the why as well as the what,
//         and reinforcement learning allows foundation models to do the same.
//       </p>

//       <p className="text-sm leading-relaxed text-gray-100">
//         By building models with these capabilities, we’re building toward a future where AI drives
//         down costs of goods & services while accelerating scientific progress.
//       </p>

//       <p className="text-sm leading-relaxed text-gray-100">
//         So we’re starting with the hardest problems first: high-consequence software for
//         high-consequence applications, charting the path to human-level AI.
//       </p>

//       <div className="border-t border-cyan-100 pt-4">
//         <a
//           href="#"
//           className="text-cyan-100  ml-60 font-mono text-md flex items-center gap-2 hover:text-black hover:bg-cyan-100 transition-colors"
//         >
//           → OUR PATH TO AGI
//         </a>
//       </div>
//     </div>
//   </div>
// </section>







// <section className="bg-[#151617] text-white py-24 px-6">
//       <div className="max-w-5xl mx-auto flex flex-col gap-24">
//         {/* First Row */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-cyan-100 pb-6">
//           <h2 className="text-3xl font-light leading-tight">
//             Is poolside right for your business?
//           </h2>
//           <a
//             href="#"
//             className="text-cyan-100 font-semibold uppercase tracking-wide text-sm flex items-center gap-2 hover:text-black hover:bg-cyan-100 transition"
//           >
//             → Talk to us today
//           </a>
//         </div>

//         {/* Second Row */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-cyan-100 pb-6">
//           <h2 className="text-3xl font-light leading-tight">
//             Join the forefront of applied research and engineering.
//           </h2>
//           <a
//             href="#"
//             className="text-cyan-100 font-semibold uppercase tracking-wide text-sm flex items-center gap-2 hover:text-black hover:bg-cyan-100 transition"
//           >
//             → View roles
//           </a>
//         </div>
//       </div>
//     </section>

//       </main>
//     </div>




//       {/* ✅ Footer */}
//         <div className="flex justify-center items-center min-h-[40vh] bg-[#151617]">
//           <h1
//             className="text-[100px] md:text-[160px] font-extrabold text-transparent ml-12 uppercase tracking-wide"
//             style={{
//               backgroundImage:
//                 "repeating-linear-gradient(0deg, #ccc 0, #ccc 2px, transparent 2px, transparent 8px)",
//               WebkitBackgroundClip: "text",
//               backgroundClip: "text",
//             }}
//           >
//             SANITY
//           </h1>
//         </div>
//     </>
//   );
// }












// RESPONSIB=VE  BELOW   ____________________________________________

// "use client";

// import Link from "next/link";
// import { Inter } from "next/font/google";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";



// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { name: "PLATFORM", href: "/platform" },
//     { name: "APPROACH", href: "/approach" },
//     { name: "VISION", href: "/vision" },
    
//     { name: "BLOG", href: "/blog" },
//     { name: "NEWSROOM", href: "/newsroom" },
//   ];

//   return (
//     <>
//       <div className={`${inter.className} min-h-screen bg-[#151617] text-white flex`}>
//         {/* ---------- DESKTOP SIDEBAR ---------- */}
//         <aside className="hidden md:flex w-32 h-screen fixed left-0 top-0 flex-col items-start justify-start mt-12 gap-3 pl-8 ml-8 text-white text-sm font-mono tracking-wider bg-[#151617]">
//           <div className="flex items-center gap-2 hover:bg-cyan-100 ">
//             <Link href="/">
//               <span className="text-cyan-100 hover:text-black font-semibold">SANITY</span>
//             </Link>
//           </div>
//           {links.map((link, i) => (
//             <Link
//               key={i}
//               href={link.href}
//               className="hover:text-black hover:bg-cyan-100 transition-colors cursor-pointer text-white"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </aside>

//         {/* ---------- MOBILE NAVBAR ---------- */}
//         <div className="md:hidden fixed top-0 left-0 w-full bg-black flex justify-between items-center px-6 py-4 z-50 text-white font-mono tracking-wider border-b border-gray-900">
//           <span className="text-cyan-100 font-semibold">SANITY</span>
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-gray-300"
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>

//           {menuOpen && (
//             <div className="absolute top-14 left-0 w-full bg-black flex flex-col gap-3 py-4 px-8 text-sm border-t border-gray-800">
//               {links.map((link, i) => (
//                 <Link
//                   key={i}
//                   href={link.href}
//                   onClick={() => setMenuOpen(false)}
//                   className="hover:text-white transition-colors text-gray-300"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* ---------- MAIN CONTENT ---------- */}
//         <main className="flex-1 md:ml-28 flex flex-col items-center mt-16 md:mt-0 px-4 sm:px-6">
//           {/* HERO SECTION */}
//           <section className="relative w-full max-w-4xl h-[350px]  md:h-[420px] border border-[var(--border)] flex flex-col justify-between px-6 md:px-16 py-10 md:py-16 mt-6 md:mt-12 text-left md:text-left">
//             <div>
//               <h1
//                 className="text-[28px] sm:text-[36px] md:text-[44px] leading-tight font-light text-white"
//                 style={{
//                   fontFamily:
//                     "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
//                   fontWeight: 500,
//                 }}
//               >
//                 We build the models.
//                 <br />
//                 You build the future.
//               </h1>
//             </div>
//             <div className="mt-6 md:mt-0 text-center md:text-right self-center md:self-end">
//               <p
//                 className="text-base sm:text-lg text-gray-300 font-normal"
//                 style={{
//                   fontFamily:
//                     "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
//                 }}
//               >
//                 AGI for the enterprise—starting with software agents.
//               </p>
//             </div>
//           </section>





//         {/* FEATURES GRID SECTION */}
// <section className="w-full bg-[#151617] px-0 sm:px-8 lg:px-8 mt-20 py-16">
//   <div className="mx-auto w-full md:max-w-4xl">
//     {/* Responsive Grid: 1 col on mobile, 2 cols on md+ */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
      
//       {/* Top Left - Foundational AI */}
//       <div className="border border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
//         <h3 className="text-white text-2xl font-mono mb-4">
//           Foundational AI, built and battle-hardened for enterprise.
//         </h3>
//       </div>

//       {/* Top Right - Agentic and Multi-Agent */}
//       <div className="border border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
//         <svg
//           className="w-full h-56 md:h-96 mt-4 mb-6"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g stroke="#666" strokeWidth="1" fill="none">
//             <circle cx="100" cy="100" r="60" />
//             <ellipse cx="100" cy="100" rx="60" ry="20" />
//             <path d="M 100 40 Q 140 100 100 160 Q 60 100 100 40" />
//             <circle cx="100" cy="40" r="4" fill="#666" />
//             <circle cx="160" cy="100" r="4" fill="#666" />
//             <circle cx="100" cy="160" r="4" fill="#666" />
//             <circle cx="40" cy="100" r="4" fill="#666" />
//           </g>
//         </svg>
//         <div>
//           <h3 className="text-gray-100 text-md font-bold mb-2">
//             Agentic and Multi-Agent Orchestration
//           </h3>
//           <p className="text-[#BBBBBB] text-sm leading-relaxed">
//             Single and multi-agent workflows that can plan, take action, and reason.
//             Build anything from simple agents to complex, multi-step systems.
//           </p>
//         </div>
//       </div>

//       {/* Middle Left - Developer Ecosystem */}
//       <div className="border border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
//         <svg
//           className="w-full h-56 md:h-96 mt-4 mb-6"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g stroke="#666" strokeWidth="1" fill="none">
//             <rect x="40" y="30" width="120" height="140" rx="8" />
//             <rect x="50" y="40" width="100" height="100" />
//             <line x1="50" y1="55" x2="150" y2="55" />
//             <line x1="50" y1="70" x2="150" y2="70" />
//             <line x1="50" y1="85" x2="150" y2="85" />
//             <line x1="50" y1="100" x2="150" y2="100" />
//             <line x1="50" y1="115" x2="150" y2="115" />
//             <circle cx="100" cy="165" r="5" />
//           </g>
//         </svg>
//         <div>
//           <h3 className="text-gray-100 text-md font-bold mb-2">Developer Ecosystem</h3>
//           <p className="text-[#BBBBBB] text-sm leading-relaxed">
//             Full integrations, libraries, and SDKs across your development workflow.
//           </p>
//         </div>
//       </div>

//       {/* Middle Right - Data and Knowledge */}
//       <div className="border border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
//         <svg
//           className="w-full h-56 md:h-96 mt-4 mb-6"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g stroke="#666" strokeWidth="1" fill="none">
//             <rect x="40" y="40" width="50" height="50" />
//             <rect x="110" y="40" width="50" height="50" />
//             <rect x="40" y="110" width="50" height="50" />
//             <rect x="110" y="110" width="50" height="50" />
//           </g>
//         </svg>
//         <div>
//           <h3 className="text-gray-100 text-md font-bold mb-2">Data and Knowledge</h3>
//           <p className="text-[#BBBBBB] text-sm leading-relaxed">
//             Comprehensive data connectors, retrieval, and knowledge management.
//           </p>
//         </div>
//       </div>

//       {/* Bottom Left - Presentation Modules */}
//       <div className="border border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
//         <svg
//           className="w-full h-56 md:h-96 mt-4 mb-6"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g stroke="#666" strokeWidth="1" fill="none">
//             <circle cx="100" cy="100" r="15" />
//             <line x1="100" y1="100" x2="100" y2="30" />
//             <line x1="100" y1="100" x2="170" y2="100" />
//             <line x1="100" y1="100" x2="100" y2="170" />
//             <line x1="100" y1="100" x2="30" y2="100" />
//           </g>
//         </svg>
//         <div>
//           <h3 className="text-gray-100 text-md font-bold mb-2">Presentation Modules</h3>
//           <p className="text-[#BBBBBB] text-sm leading-relaxed">
//             Prebuilt UI components designed in your environment. Structured agents built with you.
//           </p>
//         </div>
//       </div>

//       {/* Bottom Right - CTA Section */}
//       <div className="border border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px] bg-[#151617]">
//         <h2 className="text-gray-100 text-2xl font-semibold mb-6 leading-tight">
//           Delivering intelligence across your development lifecycle—from IDE to terminal,
//           agents to custom applications.
//         </h2>
//         <p className="text-[#BBBBBB] text-xl font-light ">
//           Everywhere work gets done.
//         </p>
//         <button className="inline-flex items-center gap-2 px-6 py-3 border border-cyan-100 text-[var(--accent)] hover:bg-cyan-100 hover:text-black transition-colors font-mono text-sm">
//           → THE POOLSIDE PLATFORM
//         </button>
//       </div>
//     </div>
//   </div>
// </section>




          // {/* SANITY TEXT */}
          // <div className="flex justify-center items-center mt-20 sm:mt-32 md:mt-40 mb-20 sm:mb-32 md:mb-40 min-h-[30vh] md:min-h-[40vh] bg-[#151617] text-center">
          //   <h1
          //     className="text-[70px] sm:text-[100px] md:text-[160px] font-extrabold text-transparent uppercase tracking-wide transition-all duration-300"
          //     style={{
          //       backgroundImage:
          //         "repeating-linear-gradient(0deg, #cffafe 0, #cffafe 2px, transparent 2px, transparent 8px)",
          //       WebkitBackgroundClip: "text",
          //       backgroundClip: "text",
          //       color: "transparent",
          //     }}
          //   >
          //     Sanity
          //   </h1>
          // </div>






// {/* OUTCOMES SECTION */}
// <section className="bg-[#151617] text-white py-16 px-0 md:px-8">
//   <div className="max-w-4xl mx-auto">
//     {/* Top Text */}
//     <div className="grid md:grid-cols-2 gap-10 mb-12 text-left md:text-left">
//       <h2 className="text-3xl font-semibold leading-snug">
//         Outcomes, not tokens. <br /> Inside your boundary.
//       </h2>
//       <p className="text-[#BBBBBB] leading-relaxed">
//         <span className="font-semibold text-white">
//           Forward Deployed Research Engineers
//         </span>{" "}
//         embed with your teams to design, build, and operate intelligence where your work happens.
//       </p>
//     </div>

//     {/* Diagram Box */}
//     <div className="border border-white p-4 mb-12 overflow-hidden flex justify-center items-center">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 800 300"
//         className="w-full h-[260px] sm:h-[400px] object-contain"
//       >
//         <g stroke="#999" strokeWidth="1" fill="none" strokeDasharray="4 3" strokeLinecap="round">
//           <line x1="80" y1="150" x2="720" y2="150" />
//           <line x1="80" y1="90" x2="720" y2="90" />
//           <line x1="80" y1="210" x2="720" y2="210" />
//         </g>
//         <g stroke="#999" strokeWidth="1.5" fill="none">
//           <polygon points="180,60 260,150 180,240 100,150" />
//           <polygon points="320,60 400,150 320,240 240,150" />
//           <polygon points="460,60 540,150 460,240 380,150" />
//           <polygon points="600,60 680,150 600,240 520,150" />
//         </g>
//       </svg>
//     </div>

//     {/* Bottom Text Columns */}
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left md:text-left text-md text-[#AAAAAA]">
//       <div>
//         <h3 className="font-semibold text-gray-100 mb-2">Outcome ownership</h3>
//         <p>We take joint responsibility for outcomes and measurable business impact.</p>
//       </div>
//       <div>
//         <h3 className="font-semibold text-gray-100 mb-2">Inside your boundary</h3>
//         <p>Your data never leaves your control. Role-based access for humans and agents.</p>
//       </div>
//       <div>
//         <h3 className="font-semibold text-gray-100 mb-2">Built for complexity</h3>
//         <p>We work across multi-cloud, legacy systems, and air-gapped environments.</p>
//       </div>
//       <div>
//         <h3 className="font-semibold text-gray-100 mb-2">Executive governance</h3>
//         <p>Risk controls and auditability co-designed for enterprise security.</p>
//       </div>
//     </div>
//   </div>
// </section>







// <section className="w-full bg-[#151617] px-0 sm:px-8 lg:px-8 py-24">
//   <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

//     {/* LEFT ILLUSTRATION with WHITE BORDER */}
//     <div className="w-full flex justify-center">
//       <div className="border border-white p-4 md:ml-4">
//         <svg
//           className="w-[420px] sm:w-[300px] h-[300px] sm:h-[600px]"
//           viewBox="0 0 300 300"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <g stroke="#666" strokeWidth="1.2" fill="none">
//             {/* Pool outline */}
//             <ellipse cx="150" cy="200" rx="100" ry="30" />
//             <ellipse cx="150" cy="210" rx="100" ry="30" />
//             <path d="M50 200 v40" />
//             <path d="M250 200 v40" />

//             {/* Ladder */}
//             <path d="M70 180 v40" />
//             <path d="M85 180 v40" />
//             <line x1="70" y1="190" x2="85" y2="190" />
//             <line x1="70" y1="200" x2="85" y2="200" />
//             <line x1="70" y1="210" x2="85" y2="210" />

//             {/* Umbrella */}
//             <line x1="150" y1="80" x2="150" y2="160" />
//             <polygon points="90,80 150,30 210,80 150,90" />
//             <line x1="90" y1="80" x2="150" y2="90" />
//             <line x1="210" y1="80" x2="150" y2="90" />

//             {/* Tube */}
//             <ellipse cx="200" cy="250" rx="25" ry="10" />
//             <ellipse cx="200" cy="250" rx="15" ry="5" />
//           </g>
//         </svg>
//       </div>
//     </div>

//     {/* RIGHT TEXT SECTION */}
//     <div className="text-gray-100 space-y-4  md:space-y-2">
//       <h2 className="text-xl sm:text-2xl md:text-4xl font-light leading-snug">
//         <span className="text-[#AAAAAA] font-normal">Our </span>
//         <span className="text-[#AAAAAA] font-normal">vision</span>
//         <span className="text-gray-100">
//           —the fastest path to AGI runs through software.
//         </span>
//       </h2>

//       <p className="text-sm sm:text-base leading-relaxed text-gray-100 mt-6 md:mt-12">
//         <span className="text-white font-semibold">Our mission is:</span> for artificial general
//         intelligence to drive abundance for humanity.
//       </p>

//       <p className="text-sm sm:text-base leading-relaxed text-gray-100">
//         We’ve chosen software engineering as our strategic beachhead because we believe it’s the
//         fastest route to human-level intelligence.
//       </p>

//       <p className="text-sm sm:text-base leading-relaxed text-gray-100">
//         Software development requires understanding the world, the ability to do multistep complex
//         reasoning, and the ability to plan across long-horizon objectives. In other words, software
//         development mirrors human reasoning. Humans learn by grokking the why as well as the what,
//         and reinforcement learning allows foundation models to do the same.
//       </p>

//       <p className="text-sm sm:text-base leading-relaxed text-gray-100">
//         By building models with these capabilities, we’re building toward a future where AI drives
//         down costs of goods & services while accelerating scientific progress.
//       </p>

//       <p className="text-sm sm:text-base leading-relaxed text-gray-100">
//         So we’re starting with the hardest problems first: high-consequence software for
//         high-consequence applications, charting the path to human-level AI.
//       </p>

//       <div className="border-t border-cyan-100 pt-4">
//         <a
//           href="#"
//           className="text-cyan-100 font-mono text-md flex items-center gap-2 hover:text-black hover:bg-cyan-100 transition-colors md:ml-60 justify-center ml-64 md:justify-start"
//         >
//           → OUR PATH TO AGI
//         </a>
//       </div>
//     </div>
//   </div>
// </section>





//           {/* CTA ROWS */}
//           <section className="bg-[#151617] text-white py-16 md:py-24 px-0 sm:px-6">
//             <div className="max-w-5xl mx-auto flex flex-col gap-12 md:gap-24">
//               <div className="flex flex-col md:flex-row  md:justify-between gap-6 border-b border-cyan-100 pb-6 text-left md:text-left">
//                 <h2 className="text-2xl sm:text-3xl font-light leading-tight">
//                   Is poolside right for your business?
//                 </h2>
//                 <a
//                   href="#"
//                   className="text-cyan-100 font-semibold uppercase tracking-wide text-sm flex items-center  ml-60 justify-center gap-2 hover:text-black hover:bg-cyan-100 transition"
//                 >
//                   → Talk to us today
//                 </a>
//               </div>

//               <div className="flex flex-col md:flex-row  md:justify-between gap-6 border-b border-cyan-100 pb-6 text-left md:text-left">
//                 <h2 className="text-2xl sm:text-3xl font-light leading-tight">
//                   Join the forefront of applied research and engineering.
//                 </h2>
//                 <a
//                   href="#"
//                   className="text-cyan-100 font-semibold uppercase tracking-wide text-sm flex items-center   justify-center gap-2 hover:text-black hover:bg-cyan-100 transition"
//                 >
//                   → View roles
//                 </a>
//               </div>
//             </div>
//           </section>
//         </main>
//       </div>





//       {/* ✅ Footer */}
//       <div className="flex justify-center items-center min-h-[30vh] md:min-h-[40vh] bg-[#151617] text-center">
//         <h1
//           className="text-[100px] sm:text-[100px] md:text-[160px] font-extrabold md:ml-20 ml-0 text-transparent uppercase tracking-wide"
//           style={{
//             backgroundImage:
//               "repeating-linear-gradient(0deg, #ccc 0, #ccc 2px, transparent 2px, transparent 8px)",
//             WebkitBackgroundClip: "text",
//             backgroundClip: "text",
//           }}
//         >
//           SANITY
//         </h1>
//       </div>
//     </>
//   );
// }





// // Theme seitcher////////////////////////////////////
// "use client";

// import Link from "next/link";
// import { Inter } from "next/font/google";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// const inter = Inter({ subsets: ["latin"] });

// export default function Home() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { name: "PLATFORM", href: "/platform" },
//     { name: "APPROACH", href: "/approach" },
//     { name: "VISION", href: "/vision" },
//     { name: "BLOG", href: "/blog" },
//     { name: "NEWSROOM", href: "/newsroom" },
//   ];

//   return (
//     <>
//       <div className={`${inter.className} min-h-screen bg-white dark:bg-[#151617] text-black dark:text-white flex`}>
//         {/* ---------- DESKTOP SIDEBAR ---------- */}
//         <aside className="hidden md:flex w-32 h-screen fixed left-0 top-0 flex-col items-start justify-start mt-12 gap-3 pl-8 ml-8 text-black dark:text-white text-sm font-mono tracking-wider bg-white dark:bg-[#151617]">
//           <div className="flex items-center gap-2 hover:bg-purple-400 dark:hover:bg-cyan-100">
//             <Link href="/">
//               <span className="text-purple-600 dark:text-cyan-100 hover:text-white dark:hover:text-black font-semibold">SANITY</span>
//             </Link>
//           </div>
//           {links.map((link, i) => (
//             <Link
//               key={i}
//               href={link.href}
//               className="hover:text-white dark:hover:text-black hover:bg-purple-400 dark:hover:bg-cyan-100 transition-colors cursor-pointer text-black dark:text-white"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </aside>

//         {/* ---------- MOBILE NAVBAR ---------- */}
//         <div className="md:hidden fixed top-0 left-0 w-full bg-white dark:bg-black flex justify-between items-center px-6 py-4 z-50 text-black dark:text-white font-mono tracking-wider border-b border-gray-300 dark:border-gray-900">
//           <span className="text-purple-600 dark:text-cyan-100 font-semibold">SANITY</span>
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-gray-700 dark:text-gray-300"
//             aria-label="Toggle menu"
//           >
//             {menuOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>

//           {menuOpen && (
//             <div className="absolute top-14 left-0 w-full bg-white dark:bg-black flex flex-col gap-3 py-4 px-8 text-sm border-t border-gray-200 dark:border-gray-800">
//               {links.map((link, i) => (
//                 <Link
//                   key={i}
//                   href={link.href}
//                   onClick={() => setMenuOpen(false)}
//                   className="hover:text-black dark:hover:text-white transition-colors text-gray-700 dark:text-gray-300"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* ---------- MAIN CONTENT ---------- */}
//         <main className="flex-1 md:ml-28 flex flex-col items-center mt-16 md:mt-0 px-4 sm:px-6">
//           {/* HERO SECTION */}
//           <section className="dark:bg-[#151617] bg-purple-400 relative w-full max-w-4xl h-[350px] md:h-[420px] border border-black dark:border-[#BBBBBB] flex flex-col justify-between px-6 md:px-16 py-10 md:py-16 mt-6 md:mt-12 text-left">
//             <div>
//               <h1
//                 className="text-[28px] sm:text-[36px] md:text-[44px] leading-tight font-light text-white dark:text-white"
//                 style={{
//                   fontFamily:
//                     "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
//                   fontWeight: 500,
//                 }}
//               >
//                 We build the models.
//                 <br />
//                 You build the future.
//               </h1>
//             </div>
//             <div className="mt-6 md:mt-0 text-center md:text-right self-center md:self-end">
//               <p
//                 className="text-base sm:text-lg text-gray-500 dark:text-gray-300 font-normal"
//                 style={{
//                   fontFamily:
//                     "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
//                 }}
//               >
//                 AGI for the enterprise—starting with software agents.
//               </p>
//             </div>
//           </section>

//           {/* FEATURES GRID SECTION */}
//           <section className="w-full bg-white dark:bg-[#151617] px-0 sm:px-8 lg:px-8 mt-20 py-16">
//             <div className="mx-auto w-full md:max-w-4xl">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
//                 {/* Top Left - Foundational AI */}
//                 <div className="border border-black dark:border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
//                   <h3 className="text-black dark:text-white text-2xl font-mono mb-4">
//                     Foundational AI, built and battle-hardened for enterprise.
//                   </h3>
//                 </div>

//                 {/* Top Right - Agentic and Multi-Agent */}
//                 <div className="border border-black dark:border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
//                   <svg
//                     className="w-full h-56 md:h-96 mt-4 mb-6"
//                     viewBox="0 0 200 200"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g stroke="#333" strokeWidth="1" fill="none">
//                       <circle cx="100" cy="100" r="60" />
//                       <ellipse cx="100" cy="100" rx="60" ry="20" />
//                       <path d="M 100 40 Q 140 100 100 160 Q 60 100 100 40" />
//                       <circle cx="100" cy="40" r="4" fill="#333" />
//                       <circle cx="160" cy="100" r="4" fill="#333" />
//                       <circle cx="100" cy="160" r="4" fill="#333" />
//                       <circle cx="40" cy="100" r="4" fill="#333" />
//                     </g>
//                   </svg>
//                   <div>
//                     <h3 className="text-black dark:text-gray-100 text-md font-bold mb-2">
//                       Agentic and Multi-Agent Orchestration
//                     </h3>
//                     <p className="text-gray-700 dark:text-[#BBBBBB] text-sm leading-relaxed">
//                       Single and multi-agent workflows that can plan, take action, and reason.
//                       Build anything from simple agents to complex, multi-step systems.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Middle Left - Developer Ecosystem */}
//                 <div className="border border-black dark:border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
//                   <svg
//                     className="w-full h-56 md:h-96 mt-4 mb-6"
//                     viewBox="0 0 200 200"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g stroke="#333" strokeWidth="1" fill="none">
//                       <rect x="40" y="30" width="120" height="140" rx="8" />
//                       <rect x="50" y="40" width="100" height="100" />
//                       <line x1="50" y1="55" x2="150" y2="55" />
//                       <line x1="50" y1="70" x2="150" y2="70" />
//                       <line x1="50" y1="85" x2="150" y2="85" />
//                       <line x1="50" y1="100" x2="150" y2="100" />
//                       <line x1="50" y1="115" x2="150" y2="115" />
//                       <circle cx="100" cy="165" r="5" />
//                     </g>
//                   </svg>
//                   <div>
//                     <h3 className="text-black dark:text-gray-100 text-md font-bold mb-2">Developer Ecosystem</h3>
//                     <p className="text-gray-700 dark:text-[#BBBBBB] text-sm leading-relaxed">
//                       Full integrations, libraries, and SDKs across your development workflow.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Middle Right - Data and Knowledge */}
//                 <div className="border border-black dark:border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
//                   <svg
//                     className="w-full h-56 md:h-96 mt-4 mb-6"
//                     viewBox="0 0 200 200"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g stroke="#333" strokeWidth="1" fill="none">
//                       <rect x="40" y="40" width="50" height="50" />
//                       <rect x="110" y="40" width="50" height="50" />
//                       <rect x="40" y="110" width="50" height="50" />
//                       <rect x="110" y="110" width="50" height="50" />
//                     </g>
//                   </svg>
//                   <div>
//                     <h3 className="text-black dark:text-gray-100 text-md font-bold mb-2">Data and Knowledge</h3>
//                     <p className="text-gray-700 dark:text-[#BBBBBB] text-sm leading-relaxed">
//                       Comprehensive data connectors, retrieval, and knowledge management.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Bottom Left - Presentation Modules */}
//                 <div className="border border-black dark:border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
//                   <svg
//                     className="w-full h-56 md:h-96 mt-4 mb-6"
//                     viewBox="0 0 200 200"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g stroke="#333" strokeWidth="1" fill="none">
//                       <circle cx="100" cy="100" r="15" />
//                       <line x1="100" y1="100" x2="100" y2="30" />
//                       <line x1="100" y1="100" x2="170" y2="100" />
//                       <line x1="100" y1="100" x2="100" y2="170" />
//                       <line x1="100" y1="100" x2="30" y2="100" />
//                     </g>
//                   </svg>
//                   <div>
//                     <h3 className="text-black dark:text-gray-100 text-md font-bold mb-2">Presentation Modules</h3>
//                     <p className="text-gray-700 dark:text-[#BBBBBB] text-sm leading-relaxed">
//                       Prebuilt UI components designed in your environment. Structured agents built with you.
//                     </p>
//                   </div>
//                 </div>

//                 {/* Bottom Right - CTA Section */}
//                 <div className="border border-black dark:border-[#BBBBBB] p-6 md:p-8 flex flex-col justify-between min-h-[400px] bg-white dark:bg-[#151617]">
//                   <h2 className="text-black dark:text-gray-100 text-2xl font-semibold mb-6 leading-tight">
//                     Delivering intelligence across your development lifecycle—from IDE to terminal,
//                     agents to custom applications.
//                   </h2>
//                   <p className="text-gray-700 dark:text-[#BBBBBB] text-xl font-light ">
//                     Everywhere work gets done.
//                   </p>
//                   <button className="inline-flex items-center gap-2 px-6 py-3 border border-purple-600 dark:border-cyan-100 text-purple-600 dark:text-cyan-100 hover:bg-purple-400 dark:hover:bg-cyan-100 hover:text-white dark:hover:text-black transition-colors font-mono text-sm">
//                     → THE POOLSIDE PLATFORM
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </section>

         
//           {/* SANITY TEXT */}
//           <div className="flex justify-center items-center mt-20 sm:mt-32 md:mt-40 mb-20 sm:mb-32 md:mb-40 min-h-[30vh] md:min-h-[40vh] dark:bg-[#151617] bg-white text-center">
//             <h1
//               className="text-[70px] sm:text-[100px] md:text-[160px] font-extrabold text-transparent uppercase tracking-wide transition-all duration-300"
//               style={{
//                 backgroundImage:
//                   "repeating-linear-gradient(0deg, #cffafe 0, #cffafe 2px, transparent 2px, transparent 8px)",
//                 WebkitBackgroundClip: "text",
//                 backgroundClip: "text",
//                 color: "transparent",
//               }}
//             >
//               Sanity
//             </h1>
//           </div>

//           {/* OUTCOMES SECTION */}
//           <section className="bg-white dark:bg-[#151617] text-black dark:text-white py-16 px-0 md:px-8">
//             <div className="max-w-4xl mx-auto">
//               <div className="grid md:grid-cols-2 gap-10 mb-12 text-left md:text-left">
//                 <h2 className="text-3xl font-semibold leading-snug">
//                   Outcomes, not tokens. <br /> Inside your boundary.
//                 </h2>
//                 <p className="text-gray-700 dark:text-[#BBBBBB] leading-relaxed">
//                   <span className="font-semibold text-black dark:text-white">
//                     Forward Deployed Research Engineers
//                   </span>{" "}
//                   embed with your teams to design, build, and operate intelligence where your work happens.
//                 </p>
//               </div>

//               <div className="border border-black dark:border-[#BBBBBB] p-4 mb-12 overflow-hidden flex justify-center items-center">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 800 300"
//                   className="w-full h-[260px] sm:h-[400px] object-contain"
//                 >
//                   <g stroke="#999" strokeWidth="1" fill="none" strokeDasharray="4 3" strokeLinecap="round">
//                     <line x1="80" y1="150" x2="720" y2="150" />
//                     <line x1="80" y1="90" x2="720" y2="90" />
//                     <line x1="80" y1="210" x2="720" y2="210" />
//                   </g>
//                   <g stroke="#999" strokeWidth="1.5" fill="none">
//                     <polygon points="180,60 260,150 180,240 100,150" />
//                     <polygon points="320,60 400,150 320,240 240,150" />
//                     <polygon points="460,60 540,150 460,240 380,150" />
//                     <polygon points="600,60 680,150 600,240 520,150" />
//                   </g>
//                 </svg>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left md:text-left text-md text-gray-500 dark:text-gray-400">
//                 <div>
//                   <h3 className="font-semibold text-black dark:text-gray-100 mb-2">Outcome ownership</h3>
//                   <p>We take joint responsibility for outcomes and measurable business impact.</p>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-black dark:text-gray-100 mb-2">Inside your boundary</h3>
//                   <p>Your data never leaves your control. Role-based access for humans and agents.</p>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-black dark:text-gray-100 mb-2">Built for complexity</h3>
//                   <p>We work across multi-cloud, legacy systems, and air-gapped environments.</p>
//                 </div>
//                 <div>
//                   <h3 className="font-semibold text-black dark:text-gray-100 mb-2">Executive governance</h3>
//                   <p>Risk controls and auditability co-designed for enterprise security.</p>
//                 </div>
//               </div>
//             </div>
//           </section>

//                     {/* OUR VISION SECTION */}
//           <section className="w-full bg-white dark:bg-[#151617] px-0 sm:px-8 lg:px-8 py-24">
//             <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
//               {/* LEFT ILLUSTRATION with BORDER */}
//               <div className="w-full flex justify-center">
//                 <div className="border border-black dark:border-white p-4 md:ml-4">
//                   <svg
//                     className="w-[420px] sm:w-[300px] h-[300px] sm:h-[600px]"
//                     viewBox="0 0 300 300"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <g stroke="#333" strokeWidth="1.2" fill="none">
//                       <ellipse cx="150" cy="200" rx="100" ry="30" />
//                       <ellipse cx="150" cy="210" rx="100" ry="30" />
//                       <path d="M50 200 v40" />
//                       <path d="M250 200 v40" />

//                       <path d="M70 180 v40" />
//                       <path d="M85 180 v40" />
//                       <line x1="70" y1="190" x2="85" y2="190" />
//                       <line x1="70" y1="200" x2="85" y2="200" />
//                       <line x1="70" y1="210" x2="85" y2="210" />

//                       <line x1="150" y1="80" x2="150" y2="160" />
//                       <polygon points="90,80 150,30 210,80 150,90" />
//                       <line x1="90" y1="80" x2="150" y2="90" />
//                       <line x1="210" y1="80" x2="150" y2="90" />

//                       <ellipse cx="200" cy="250" rx="25" ry="10" />
//                       <ellipse cx="200" cy="250" rx="15" ry="5" />
//                     </g>
//                   </svg>
//                 </div>
//               </div>

//               {/* RIGHT TEXT */}
//               <div className="text-black dark:text-gray-100 space-y-4 md:space-y-2">
//                 <h2 className="text-xl sm:text-2xl md:text-4xl font-light leading-snug">
//                   <span className="text-gray-500 dark:text-gray-400 font-normal">Our </span>
//                   <span className="text-gray-500 dark:text-gray-400 font-normal">vision</span>
//                   <span className="text-black dark:text-gray-100">
//                     —the fastest path to AGI runs through software.
//                   </span>
//                 </h2>

//                 <p className="text-sm sm:text-base leading-relaxed text-black dark:text-gray-100 mt-6 md:mt-12">
//                   <span className="text-black dark:text-white font-semibold">Our mission is:</span> for artificial general
//                   intelligence to drive abundance for humanity.
//                 </p>

//                 <p className="text-sm sm:text-base leading-relaxed text-black dark:text-gray-100">
//                   We’ve chosen software engineering as our strategic beachhead because we believe it’s the
//                   fastest route to human-level intelligence.
//                 </p>

//                 <p className="text-sm sm:text-base leading-relaxed text-black dark:text-gray-100">
//                   Software development requires understanding the world, the ability to do multistep complex
//                   reasoning, and the ability to plan across long-horizon objectives. In other words, software
//                   development mirrors human reasoning. Humans learn by grokking the why as well as the what,
//                   and reinforcement learning allows foundation models to do the same.
//                 </p>

//                 <p className="text-sm sm:text-base leading-relaxed text-black dark:text-gray-100">
//                   By building models with these capabilities, we’re building toward a future where AI drives
//                   down costs of goods & services while accelerating scientific progress.
//                 </p>

//                 <p className="text-sm sm:text-base leading-relaxed text-black dark:text-gray-100">
//                   So we’re starting with the hardest problems first: high-consequence software for
//                   high-consequence applications, charting the path to human-level AI.
//                 </p>

//                 <div className="border-t border-purple-600 dark:border-cyan-100 pt-4">
//                   <a
//                     href="#"
//                     className="text-purple-600   dark:text-cyan-100 font-mono text-md flex items-center gap-2 hover:text-white dark:hover:text-black hover:bg-purple-400 dark:hover:bg-cyan-100 md:ml-60 justify-center ml-64 md:justify-start"
//                   >
//                     → OUR PATH TO AGI
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* CTA ROWS */}
//           <section className="bg-white dark:bg-[#151617] text-black dark:text-white py-16 md:py-24 px-0 sm:px-6">
//             <div className="max-w-5xl mx-auto flex flex-col gap-12 md:gap-24">
//               <div className="flex flex-col md:flex-row md:justify-between gap-6 border-b border-purple-600 dark:border-cyan-100 pb-6 text-left md:text-left">
//                 <h2 className="text-2xl sm:text-3xl font-light leading-tight">
//                   Is poolside right for your business?
//                 </h2>
//                 <a
//                   href="#"
//                   className="text-purple-600 dark:text-cyan-100 font-semibold uppercase tracking-wide text-sm flex items-center ml-60 justify-center gap-2 hover:text-white dark:hover:text-black hover:bg-purple-400 dark:hover:bg-cyan-100 transition"
//                 >
//                   → Talk to us today
//                 </a>
//               </div>

//               <div className="flex flex-col md:flex-row md:justify-between gap-6 border-b border-purple-600 dark:border-cyan-100 pb-6 text-left md:text-left">
//                 <h2 className="text-2xl sm:text-3xl font-light leading-tight">
//                   Join the forefront of applied research and engineering.
//                 </h2>
//                 <a
//                   href="#"
//                   className="text-purple-600 dark:text-cyan-100 font-semibold uppercase tracking-wide text-sm flex items-center justify-center gap-2 hover:text-white dark:hover:text-black hover:bg-purple-400 dark:hover:bg-cyan-100 transition"
//                 >
//                   → View roles
//                 </a>
//               </div>
//             </div>
//           </section>

//           {/* FOOTER */}
//           <div className="flex justify-center items-center min-h-[30vh] md:min-h-[40vh] bg-white dark:bg-[#151617] text-center">
//             <h1
//               className="text-[100px] sm:text-[100px] md:text-[160px] font-extrabold md:ml-20 ml-0 text-transparent uppercase tracking-wide"
//               style={{
//                 backgroundImage:
//                   "repeating-linear-gradient(0deg, #999 0, #999 2px, transparent 2px, transparent 8px)",
//                 WebkitBackgroundClip: "text",
//                 backgroundClip: "text",
//               }}
//             >
//               SANITY
//             </h1>
//           </div>
//         </main>
//       </div>
//     </>
//   );
// }










// new new   

"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useThemeToggle } from "./theme-provider"; 



const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
    const toggleTheme = useThemeToggle();

  const links = [
    { name: "PLATFORM", href: "/platform" },
    { name: "APPROACH", href: "/approach" },
    { name: "VISION", href: "/vision" },
    
    { name: "BLOG", href: "/blog" },
    { name: "NEWSROOM", href: "/newsroom" },
  ];

  return (
    <>
      <div className={`${inter.className} min-h-screen  dark:bg-[#151617] bg-white dark:text-white text-black  flex`}>
        {/* ---------- DESKTOP SIDEBAR ---------- */}
        {/* <aside className="hidden md:flex w-32 h-screen fixed left-0 top-0 flex-col items-start justify-start mt-12 gap-3 pl-8 ml-8 text-white text-sm font-mono tracking-wider bg-white dark:bg-[#151617]"> */}
        <aside className="hidden lg:flex w-32 h-screen fixed left-0 top-0 flex-col items-start justify-start mt-12 gap-3 pl-8 ml-8 dark:text-white text-black text-sm font-mono tracking-wider bg-white dark:bg-[#151617]">

          <div className="flex items-center gap-2 dark:hover:bg-cyan-100 hover:bg-purple-500 ">
            <Link href="/">
              <span className="dark:text-cyan-100 dark:hover:text-black text-purple-600 hover:text-white font-semibold">SANITY</span>
            </Link>
          </div>
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.href}
              className="dark:hover:text-black dark:hover:bg-cyan-100 hover:text-white hover:bg-purple-500 transition-colors cursor-pointer dark:text-white text-black"
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

        {/* ---------- MAIN CONTENT ---------- */}
        <main className="flex-1 md:ml-0 lg:ml-28 flex flex-col items-center mt-16 lg:mt-0 md:mt-10 px-4 sm:px-6">
          {/* HERO SECTION */}
          <section className="dark:bg-[#151617] bg-purple-600 relative w-full max-w-4xl h-[350px]  md:h-[420px] dark:border dark:border-gray-300 border border-purple-600 flex flex-col justify-between px-6 md:px-16 py-10 md:py-16 mt-6 md:mt-12 text-left md:text-left">
            <div>
              <h1
                className="text-[28px] sm:text-[36px] md:text-[44px] leading-tight font-light dark:text-white text-white"
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
                className="text-base sm:text-lg dark:text-gray-300 text-white font-normal"
                style={{
                  fontFamily:
                    "'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}
              >
                AGI for the enterprise—starting with software agents.
              </p>
            </div>
          </section>





{/* FOUNDATION MODELS SECTION */}
<section className="w-full dark:bg-[#151617] bg-white px-0 sm:px-2 py-20 sm:mt-44 mt-20">
  <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

    {/* HEADING */}
    <div className="md:col-span-7 order-1">
      <h2 className="text-xl sm:text-xl md:text-2xl font-light leading-tight text-black dark:text-white">
        We build foundation models to transform{" "}
        <span className="text-gray-500 dark:text-stone-400">
          how work gets done in the enterprise.
        </span>
      </h2>
    </div>

    {/* DIAGRAM */}
    <div
      className="
        md:col-span-5 md:ml-12
        order-2 -mt-4
        border dark:border-[#BBBBBB] border-black
        flex items-center justify-center
        h-[220px] sm:h-[280px] md:h-[600px]
        p-4
      "
    >
      <svg
        viewBox="0 0 300 600"
        className="w-full h-full max-h-[200px] md:max-h-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Architectural boxes (dashed) */}
        <g stroke="#aaa" strokeWidth="1" fill="none" strokeDasharray="4 4">
          <rect x="30" y="20" width="100" height="80" />
          <rect x="140" y="60" width="120" height="90" />
          <rect x="40" y="180" width="160" height="120" />
          <rect x="90" y="340" width="140" height="120" />
        </g>

        {/* Solid outlines */}
        <g stroke="#999" strokeWidth="1.2" fill="none">
          <rect x="25" y="15" width="110" height="90" />
          <rect x="135" y="55" width="130" height="100" />
          <rect x="35" y="175" width="170" height="130" />
          <rect x="85" y="335" width="150" height="130" />
        </g>

        {/* Anchor point */}
        <rect x="90" y="240" width="12" height="12" stroke="#999" />
      </svg>
    </div>

    {/* TEXT CONTENT */}
    <div
      className="
        md:col-span-8
        order-3
        grid grid-cols-1 sm:grid-cols-2
        gap-10
        -mt-2 md:-mt-62
        text-sm leading-relaxed
        text-black dark:text-[#BBBBBB]
      "
    >
      <div className="space-y-6">
        <p>
          We are a frontier lab focused on building the most capable
          Foundation Models, agents and enterprise systems to deploy them.
        </p>
        <p>
          Our mission is for artificial general intelligence to drive
          abundance for humanity.
        </p>
      </div>

      <div className="space-y-6">
        <p>
          This work begins in the highest-consequence environments—
          enterprises—where Poolside is being battle-tested daily.
        </p>
        <p>
          Helping enterprises become agentic organizations by mobilizing
          the most important technological development of our lifetimes.
          Starting with software.
        </p>
      </div>
    </div>

  </div>
</section>
















{/* FOUNDATION MODELS SECTION */}
{/* <section className="w-full dark:bg-[#151617] bg-white px-0 sm:px-8 py-20 sm:mt-44">
  <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

    {/* LEFT CONTENT */}
    {/* <div className="md:col-span-6 flex flex-col order-1">  */}

      {/* Headline */}
      {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight text-black dark:text-white">
        We build foundation models to transform{" "}
        <span className="text-gray-500 dark:text-gray-400">
          how work gets done in the enterprise.
        </span>
      </h2> */}

      {/* Text (below diagram on mobile) */}
      {/* <div className="
        grid grid-cols-1 sm:grid-cols-2 gap-10
        mt-12 md:mt-20
        text-sm leading-relaxed
        text-black dark:text-[#BBBBBB]
        order-3 md:order-2
      ">

        <div className="space-y-6">
          <p>
            We are a frontier lab focused on building the most capable
            Foundation Models, agents and enterprise systems to deploy them.
          </p>
          <p>
            Our mission is for artificial general intelligence to drive
            abundance for humanity.
          </p>
        </div>

        <div className="space-y-6">
          <p>
            This work begins in the highest-consequence environments—
            enterprises—where Poolside is being battle-tested daily.
          </p>
          <p>
            Helping enterprises become agentic organizations by mobilizing
            the most important technological development of our lifetimes.
            Starting with software.
          </p>
        </div>

      </div>
    </div> */}

    {/* RIGHT DIAGRAM */}
    {/* <div className="
      md:col-span-6
      order-2 md:order-2
      border dark:border-[#BBBBBB] border-black
      flex items-center justify-center
      h-[220px] sm:h-[280px] md:h-auto
      p-4
    ">
      <svg
        viewBox="0 0 300 600"
        className="w-full h-full max-h-[200px] md:max-h-none"
        xmlns="http://www.w3.org/2000/svg"
      > */}
        {/* Architectural boxes (dashed) */}
        {/* <g stroke="#aaa" strokeWidth="1" fill="none" strokeDasharray="4 4">
          <rect x="30" y="20" width="100" height="80" />
          <rect x="140" y="60" width="120" height="90" />
          <rect x="40" y="180" width="160" height="120" />
          <rect x="90" y="340" width="140" height="120" />
        </g> */}

        {/* Solid outlines */}
        {/* <g stroke="#999" strokeWidth="1.2" fill="none">
          <rect x="25" y="15" width="110" height="90" />
          <rect x="135" y="55" width="130" height="100" />
          <rect x="35" y="175" width="170" height="130" />
          <rect x="85" y="335" width="150" height="130" />
        </g> */}

        {/* Anchor point (no blue line) */}
        {/* <rect x="90" y="240" width="12" height="12" stroke="#999" />
      </svg>
    </div>

  </div>
</section> */}






        {/* FEATURES GRID SECTION */}
<section className="w-full dark:bg-[#151617] bg-white px-0 sm:px-2 lg:px-8 mt-8 sm:mt-10 py-16">
  <div className="mx-auto w-full md:max-w-4xl">
    {/* Responsive Grid: 1 col on mobile, 2 cols on md+ */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
      
      {/* Top Left - Foundational AI */}
      <div className="border dark:border-[#BBBBBB] sm:border-r-0 border-black p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
        <h3 className="dark:text-white text-black text-2xl font-mono mb-4">
          Foundational AI, built and battle-hardened for enterprise.
        </h3>
      </div>

      {/* Top Right - Agentic and Multi-Agent */}
      <div className="border dark:border-[#BBBBBB] border-black  p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
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
          <h3 className="dark:text-gray-100 text-black text-md font-bold mb-2">
            Agentic and Multi-Agent Orchestration
          </h3>
          <p className="dark:text-[#BBBBBB] text-gray-600 text-sm leading-relaxed">
            Single and multi-agent workflows that can plan, take action, and reason.
            Build anything from simple agents to complex, multi-step systems.
          </p>
        </div>
      </div>

      {/* Middle Left - Developer Ecosystem */}
      <div className="border dark:border-[#BBBBBB] border-black sm:border-r-0 sm:border-t-0 p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
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
          <h3 className="dark:text-gray-100 text-black text-md font-bold mb-2">Developer Ecosystem</h3>
          <p className="dark:text-[#BBBBBB] text-gray-600 text-sm leading-relaxed">
            Full integrations, libraries, and SDKs across your development workflow.
          </p>
        </div>
      </div>

      {/* Middle Right - Data and Knowledge */}
      <div className="border dark:border-[#BBBBBB] border-black  sm:border-t-0 p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
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
          <h3 className="dark:text-gray-100 text-black text-md font-bold mb-2">Data and Knowledge</h3>
          <p className="dark:text-[#BBBBBB] text-gray-600 text-sm leading-relaxed">
            Comprehensive data connectors, retrieval, and knowledge management.
          </p>
        </div>
      </div>

      {/* Bottom Left - Presentation Modules */}
      <div className="border dark:border-[#BBBBBB] border-black  sm:border-t-0 sm:border-r-0 p-6 md:p-8 flex flex-col justify-between min-h-[400px]">
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
          <h3 className="dark:text-gray-100 text-black text-md font-bold mb-2">Presentation Modules</h3>
          <p className="dark:text-[#BBBBBB] text-gray-600 text-sm leading-relaxed">
            Prebuilt UI components designed in your environment. Structured agents built with you.
          </p>
        </div>
      </div>

      {/* Bottom Right - CTA Section */}
      <div className="border dark:border-[#BBBBBB] border-black sm:border-t-0 p-6 md:p-8 flex flex-col justify-between min-h-[400px] dark:bg-[#151617] bg-white">
        <h2 className="dark:text-gray-100 text-black text-2xl font-semibold mb-6 leading-tight">
          Delivering intelligence across your development lifecycle—from IDE to terminal,
          agents to custom applications.
        </h2>
        <p className="dark:text-[#BBBBBB] text-gray-600 text-xl font-light ">
          Everywhere work gets done.
        </p>
        <button className="inline-flex items-center gap-2 px-6 py-3 border dark:border-cyan-100 border-purple-600 dark:text-cyan-100 text-purple-600 dark:hover:bg-cyan-100 hover:bg-purple-500 dark:hover:text-black hover:text-white transition-colors font-mono text-sm">
          → THE POOLSIDE PLATFORM
        </button>
      </div>
    </div>
  </div>
</section>




          {/* SANITY TEXT
          <div className="flex justify-center items-center mt-20 sm:mt-32 md:mt-40 mb-20 sm:mb-32 md:mb-40 min-h-[30vh] md:min-h-[40vh] dark:bg-[#151617] bg-whitye text-center">
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
          </div> */}


          {/* SANITY TEXT */}
<div className="flex justify-center items-center mt-20 sm:mt-32 md:mt-40 mb-20 sm:mb-32 md:mb-40 min-h-[30vh] md:min-h-[40vh] dark:bg-[#151617] bg-white text-center">
  <h1
    className="
      text-[70px] sm:text-[100px] md:text-[160px]
      font-extrabold uppercase tracking-wide
      text-transparent bg-clip-text
      transition-all duration-300
      bg-[repeating-linear-gradient(0deg,#7c3aed_0,#7c3aed_2px,transparent_2px,transparent_8px)]
      dark:bg-[repeating-linear-gradient(0deg,#cffafe_0,#cffafe_2px,transparent_2px,transparent_8px)]
    "
  >
    Sanity
  </h1>
</div>







{/* OUTCOMES SECTION */}
<section className="dark:bg-[#151617] bg-white dark:text-white text-black py-16 px-0 md:px-2">
  <div className="max-w-4xl mx-auto">
    {/* Top Text */}
    <div className="grid md:grid-cols-2 gap-10 mb-12 text-left md:text-left">
      <h2 className="text-3xl font-semibold leading-snug">
        Outcomes, not tokens. <br /> Inside your boundary.
      </h2>
      <p className="dark:text-[#BBBBBB] text-gray-600 leading-relaxed">
        <span className="font-semibold dark:text-white text-black">
          Forward Deployed Research Engineers
        </span>{" "}
        embed with your teams to design, build, and operate intelligence where your work happens.
      </p>
    </div>

    {/* Diagram Box */}
    <div className="border dark:border-white border-black p-4 mb-12 overflow-hidden flex justify-center items-center">
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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left md:text-left text-md text-gray-500 dark:text-[#AAAAAA]">
      <div>
        <h3 className="font-semibold dark:text-gray-100 text-black  mb-2">Outcome ownership</h3>
        <p>We take joint responsibility for outcomes and measurable business impact.</p>
      </div>
      <div>
        <h3 className="font-semibold dark:text-gray-100 text-black mb-2">Inside your boundary</h3>
        <p>Your data never leaves your control. Role-based access for humans and agents.</p>
      </div>
      <div>
        <h3 className="font-semibold dark:text-gray-100 text-black mb-2">Built for complexity</h3>
        <p>We work across multi-cloud, legacy systems, and air-gapped environments.</p>
      </div>
      <div>
        <h3 className="font-semibold dark:text-gray-100 text-black mb-2">Executive governance</h3>
        <p>Risk controls and auditability co-designed for enterprise security.</p>
      </div>
    </div>
  </div>
</section>







<section className="w-full dark:bg-[#151617] bg-white px-0 sm:px-2 lg:px-8 py-24">
  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

    {/* LEFT ILLUSTRATION with WHITE BORDER */}
    <div className="w-full flex justify-center">
      <div className="border dark:border-white border-black p-4 md:ml-4">
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
        <span className="dark:text-[#AAAAAA] text-black font-normal">Our </span>
        <span className="dark:text-[#AAAAAA] text-black font-normal">vision</span>
        <span className="dark:text-gray-100 text-gray-400">
          —the fastest path to AGI runs through software.
        </span>
      </h2>

      <p className="text-sm sm:text-base leading-relaxed dark:text-gray-100 text-gray-600 mt-6 md:mt-12">
        <span className="dark:text-white text-black font-semibold">Our mission is:</span> for artificial general
        intelligence to drive abundance for humanity.
      </p>

      <p className="text-sm sm:text-base leading-relaxed dark:text-gray-100 text-gray-600">
        We’ve chosen software engineering as our strategic beachhead because we believe it’s the
        fastest route to human-level intelligence.
      </p>

      <p className="text-sm sm:text-base leading-relaxed dark:text-gray-100 text-gray-600">
        Software development requires understanding the world, the ability to do multistep complex
        reasoning, and the ability to plan across long-horizon objectives. In other words, software
        development mirrors human reasoning. Humans learn by grokking the why as well as the what,
        and reinforcement learning allows foundation models to do the same.
      </p>

      <p className="text-sm sm:text-base leading-relaxed dark:text-gray-100 text-gray-600">
        By building models with these capabilities, we’re building toward a future where AI drives
        down costs of goods & services while accelerating scientific progress.
      </p>

      <p className="text-sm sm:text-base leading-relaxed dark:text-gray-100 text-gray-600">
        So we’re starting with the hardest problems first: high-consequence software for
        high-consequence applications, charting the path to human-level AI.
      </p>

      <div className="border-t dark:border-cyan-100 border-purple-600 pt-4">
        <a
          href="#"
          className="dark:text-cyan-100 text-purple-600 font-mono text-md flex items-center gap-2 dark:hover:text-black hover:text-white dark:hover:bg-cyan-100 hover:bg-purple-500 transition-colors md:ml-38 lg:ml-60 justify-center ml-34 md:justify-start"
        >
          → OUR PATH TO AGI
        </a>
      </div>
    </div>
  </div>
</section>





          {/* CTA ROWS */}
          <section className="dark:bg-[#151617] bg-white dark:text-white text-black py-16 md:py-24 px-0 sm:px-2">
            <div className="max-w-5xl mx-auto flex flex-col gap-12 md:gap-24">
              <div className="flex flex-col md:flex-row  md:justify-between gap-6 border-b dark:border-cyan-100 border-purple-600 pb-6 text-left md:text-left">
                <h2 className="text-2xl sm:text-3xl font-light leading-tight">
                  Is poolside right for your business?
                </h2>
                <a
                  href="#"
                  className="dark:text-cyan-100 text-purple-600 font-semibold ml-36 md:ml-0 lg:ml-0 uppercase tracking-wide text-sm flex items-center   justify-center gap-2 dark:hover:text-black hover:text-white dark:hover:bg-cyan-100 hover:bg-purple-500 transition"
                >
                  → Talk to us today
                </a>
              </div>

              <div className="flex flex-col md:flex-row  md:justify-between gap-6 border-b dark:border-cyan-100 border-purple-600 pb-6 text-left md:text-left">
                <h2 className="text-2xl sm:text-3xl font-light leading-tight">
                  Join the forefront of applied research and engineering.
                </h2>
                <a
                  href="#"
                  className="dark:text-cyan-100 text-purple-600 font-semibold ml-46 md:ml-30 lg:ml-0 uppercase tracking-wide text-sm flex items-center   justify-center gap-2 dark:hover:text-black hover:text-white dark:hover:bg-cyan-100 hover:bg-purple-500 transition"
                >
                  → View roles
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>





      {/* ✅ Footer */}
      <div className="flex justify-center items-center min-h-[30vh] md:min-h-[40vh] dark:bg-[#151617] bg-white text-center">
        <h1
          className="text-[100px] sm:text-[100px] md:text-[160px] font-extrabold md:ml-0 lg:ml-20 ml-0 text-transparent uppercase tracking-wide"
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