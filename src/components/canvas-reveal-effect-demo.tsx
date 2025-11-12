// "use client";
// import React from "react";
// import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

// export default function CanvasRevealEffectDemo() {
//   return (
//     <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
//       <Box title="Sheetal is Nisha" colorClass="bg-emerald-900" speed={5.1} />
//       <Box
//         title="Nisha is Munni"
//         colorClass="bg-black"
//         colors={[
//           [236, 72, 153],
//           [232, 121, 249],
//         ]}
//         speed={3}
//       />
//       <Box
//         title="Munni is Aditi"
//         colorClass="bg-sky-600"
//         colors={[[125, 211, 252]]}
//         speed={3}
//       />
//     </div>
//   );
// }

// const Box = ({
//   title,
//   colorClass,
//   colors,
//   speed,
// }: {
//   title: string;
//   colorClass: string;
//   colors?: number[][];
//   speed?: number;
// }) => {
//   return (
//     <div className="border border-black/[0.2] dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] flex flex-col items-center justify-center overflow-hidden rounded-2xl shadow-md">
//       <CanvasRevealEffect
//         animationSpeed={speed}
//         containerClassName={colorClass}
//         colors={colors}
//       />
//       <div className="absolute inset-0 bg-black/30 dark:bg-black/60" />
//       <h2 className="absolute z-10 text-white text-2xl font-semibold">
//         {title}
//       </h2>
//     </div>
//   );
// };


