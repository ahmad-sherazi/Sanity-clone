// "use client";

// import React from "react";
// import Link from "next/link";
// import { AnimatePresence, motion } from "motion/react";
// import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

// // -------------------- PAGE --------------------
// export default function BlogPage() {
//   return (
//     <div className="bg-black text-white flex min-h-screen">
//       {/* ---------- STICKY SIDEBAR ---------- */}
//       <aside className="w-56 h-screen fixed left-0 top-0 flex flex-col items-start justify-start gap-6 pt-20 pl-6 text-gray-400 text-sm tracking-wide border-r border-neutral-800 bg-black/60 backdrop-blur-md">
//         <Link href="/" className="hover:text-white cursor-pointer">
//           Home
//         </Link>
//         <Link href="/articles" className="hover:text-white cursor-pointer">
//           Articles
//         </Link>
//         <Link href="/about" className="hover:text-white cursor-pointer">
//           About
//         </Link>
//         <Link href="/contact" className="hover:text-white cursor-pointer">
//           Contact
//         </Link>

//         <div className="border-t border-neutral-800 w-full my-4" />

//         <span className="text-xs text-neutral-500">© 2025 Sheetal</span>
//       </aside>

//       {/* ---------- MAIN CONTENT ---------- */}
//       <main className="ml-56 flex-1 overflow-y-auto px-6 md:px-20 py-16">
//         <h1 className="text-4xl font-bold mb-16 text-center text-white">
//           Aceternity Canvas Reveal Showcase
//         </h1>
//         <CanvasRevealEffectDemo />
//       </main>
//     </div>
//   );
// }

// // -------------------- DEMO SECTION --------------------
// function CanvasRevealEffectDemo() {
//   return (
//     <div className="py-10 flex flex-col lg:flex-row items-center justify-center w-full gap-6 mx-auto px-6">
//       <Card title="Sheetal is Nisha" icon={<AceternityIcon />}>
//         <CanvasRevealEffect
//           animationSpeed={5.1}
//           containerClassName="bg-cyan-100"
//         />
//       </Card>

//       <Card title="Nisha is Munni" icon={<AceternityIcon />}>
//         <CanvasRevealEffect
//           animationSpeed={3}
//           containerClassName="bg-black"
//           colors={[
//             [236, 72, 153],
//             [232, 121, 249],
//           ]}
//           dotSize={2}
//         />
//         {/* Radial gradient for the fade effect */}
//         <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
//       </Card>

//       <Card title="Munni is Aditi" icon={<AceternityIcon />}>
//         <CanvasRevealEffect
//           animationSpeed={3}
//           containerClassName="bg-sky-600"
//           colors={[[125, 211, 252]]}
//         />
//       </Card>
//     </div>
//   );
// }

// // -------------------- CARD COMPONENT --------------------
// function Card({
//   title,
//   icon,
//   children,
// }: {
//   title: string;
//   icon: React.ReactNode;
//   children?: React.ReactNode;
// }) {
//   const [hovered, setHovered] = React.useState(false);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="border border-white group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[28rem] bg-[#161517] overflow-hidden shadow-xl"
//       // Removed rounded-2xl → now corners are square
//     >
//       {/* Removed all corner icons */}

//       <AnimatePresence>
//         {hovered && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="h-full w-full absolute inset-0"
//           >
//             {children}
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Icon & Title */}
//       <div className="relative z-20 text-center">
//         <div className="group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-300 flex justify-center">
//           {icon}
//         </div>
//         <h2 className="text-lg md:text-xl opacity-0 group-hover/canvas-card:opacity-100 text-white mt-4 font-semibold group-hover/canvas-card:-translate-y-2 transition duration-300">
//           {title}
//         </h2>
//       </div>
//     </div>
//   );
// }

// // -------------------- ICONS --------------------
// const AceternityIcon = () => {
//   return (
//     <svg
//       width="66"
//       height="65"
//       viewBox="0 0 66 65"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-10 w-10 text-[#AAAAAA] group-hover/canvas-card:text-white/90"
//     >
//       <path
//         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//         stroke="currentColor"
//         strokeWidth="15"
//         strokeMiterlimit="3.86874"
//         strokeLinecap="round"
//         style={{ mixBlendMode: "darken" }}
//       />
//     </svg>
//   );
// };

// const Icon = ({ className, ...rest }: any) => {
//   return (
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       strokeWidth="1.5"
//       stroke="currentColor"
//       className={className}
//       {...rest}
//     >
//       <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//     </svg>
//   );
// };







// Real code ________________________________________________-----

"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import DataCenterSection from "@/components/DataCenterSection"; // ✅ new import

export default function BlogPage() {
 const cards = [
  {
    title: (
      <>
        Announcing Project <br />
        Horizon: Why we're <br />
        building a 2 gigawatt <br />
        AI campus in Texas
      </>
    ),
    style: "top-[250px] left-[125px] right-[40px]   sm:top-[250px] sm:left-[50px] sm:right-[40px]", // custom spacing for card 1
  },
  {
    title: (
      <>
        The hidden engineering <br />
        behind foundation <br />
        model building
      </>
    ),
    style: "top-[290px] left-[125px] right-[30px]  sm:top-[290px] sm:left-[50px] sm:right-[30px]", // custom spacing for card 2
  },
  {
    title: (
      <>
        Our vision: Research
      </>
    ),
    style: "top-[370px] left-[125px] right-[50px]  sm:top-[370px] sm:left-[50px] sm:right-[50px]", // custom spacing for card 3
  },
];



  return (
    <div className="flex dark:bg-[#151617] bg-white dark:text-white text-black min-h-screen  ">
      {/* ✅ Sidebar Navbar */}
      <Navbar />

      {/* ✅ Main Content */}
      {/* <main className="-ml-4 -mr-4 md:ml-44 flex-1 -px-32 md:px-10 py-0 md:py-10 md:mt-0 mt-10  "> */}
      <main
  className="
    flex-1
    w-full
    px-4 sm:px-6
    lg:ml-44 lg:px-10
    py-6 sm:py-10
    mt-14 lg:mt-0
  "
>


        
         


         
        {/* ✅ SVG Card Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">

          {cards.map((card, index) => (
            <div key={index} className="relative w-full sm:w-[350px] h-[450px] group ">
              {/* SVG Outline */}
           <svg
  viewBox="0 0 380 480"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="absolute inset-0 w-full h-full"
>
  {/* Hover background */}
  <path
    d="
      M50 70 L80 40 H95 V50 H180 V40 H265 V50 H350 V40 H365 V460 H35 V70 Z
    "
    fill="transparent"
    className="
      transition-all duration-300
      dark:group-hover:fill-cyan-100
      group-hover:fill-purple-500
    "
  />

  {/* Outline */}
  <path
    d="
      M50 70 L80 40 H95 V50 H180 V40 H265 V50 H350 V40 H365 V460 H35 V70 Z
      M195 460 a5 5 0 0 1 10 0
    "
    strokeWidth="1"
    className="
      stroke-black
      dark:stroke-white
      transition-colors duration-300
      dark:group-hover:stroke-black
      group-hover:stroke-white
    "
  /> 
 
  <path
    d="M125 50H275V190C275 200 268 210 255 210H145C132 210 125 200 125 190V50Z"
    strokeWidth="1"
    className="
      stroke-black
      dark:stroke-white
      transition-colors duration-300
      dark:group-hover:stroke-black
      group-hover:stroke-white
    "
  />
</svg>



              {/* ✅ Centered Text */}
               <div className={`absolute text-left leading-relaxed ${card.style}`}>


  <p className="text-2xl leading-relaxed dark:text-white text-black dark:group-hover:text-black group-hover:text-white transition">
    {card.title}
  </p>
</div>

            </div>




            
          ))}
        </div>

        {/* ✅ 3 Feature Boxes Section */}
{/* <section className="w-full mt-10 mb-20 md:mt-16  px-22 sm:px-6 md:px-10 block md:hidden">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"> */}
  <section className="w-full mt-10 mb-20 block md:hidden">
  <div className="max-w-md mx-auto px-4 sm:px-6">
    <div className="grid grid-cols-1 gap-6">

    
    {/* Box 1 */}
    <div className="relative h-[300px] sm:h-[380px] dark:text-white dark:hover:text-black hover:text-white  text-black  dark:hover:bg-cyan-100 hover:bg-purple-500 border dark:border-white border-black flex items-end justify-center p-6">
      <p className="text-center text-2xl sm:text-lg ">
          
        Announcing Project <br />
        Horizon: Why we're <br />
        building a 2 gigawatt <br />
        AI campus in Texas
      
      </p>
    </div>

    {/* Box 2 */}
     <div className="relative h-[300px] sm:h-[380px] dark:text-white dark:hover:text-black hover:text-white  text-black  dark:hover:bg-cyan-100 hover:bg-purple-500 border dark:border-white border-black flex items-end justify-center p-6">
      <p className="text-center text-2xl sm:text-lg ">
     
       The hidden engineering <br />
        behind foundation <br />
        model building
      </p>
    </div>

    {/* Box 3 */}
    <div className="relative h-[300px] sm:h-[380px] dark:text-white dark:hover:text-black hover:text-white  text-black  dark:hover:bg-cyan-100 hover:bg-purple-500 border dark:border-white border-black flex items-end justify-center p-6">
      <p className="text-center text-2xl sm:text-lg ">
      
       Our vision: Research
      </p>
    </div>
</div>
  </div>
</section>




  {/* ✅ Data Center Section */}
<div className="mt-6 w-full">
  <DataCenterSection />
</div>

 





      {/* ✅ Full-width Footer */}
    <footer className="w-full flex justify-center items-center min-h-[40vh] mb-0 mt-0 md:mt-8 md:-mb-10 dark:bg-[#151617] bg-white ">

        <h1
          className="text-[100px] md:text-[160px] font-extrabold text-transparent mr-0 md:mr-28 uppercase tracking-wide"
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





      </main>



      
    </div>
  );
}




