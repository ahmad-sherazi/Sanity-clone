// "use client";

// import { motion } from "framer-motion";

// export default function ThreeColSection() {
//   const steps = [
//     {
//       number: "1",
//       title: "Assess",
//       desc: "Our joint goal: to meaningfully change processes and take pain points away, use-case by use-case, creating the foundation for your elastic, agent workforce.",
//     },
//     {
//       number: "2",
//       title: "Embed",
//       desc: "Forward Deployed Research Engineers sit with your product, engineering and platform teams. We integrate with your data sources, repositories, pipelines and production systems within your controls.",
//     },
//     {
//       number: "3",
//       title: "Deliver",
//       desc: "We deploy, measure and refine. Each solution becomes a part of your scalable, secure, and boundary-controlled agent ecosystem.",
//     },
//     {
//       number: "4",
//       title: "Evolve",
//       desc: "As we work together, your organization builds capability and momentum to expand automation and intelligence across new functions.",
//     },
//   ];

//   // 🟩 Animated motion line (now right → left)
//   const AnimatedLine = ({
//     width = "100%",
//     delay = 0,
//   }: {
//     width?: string;
//     delay?: number;
//   }) => (
//     <motion.div
//       className="relative h-[1px] bg-transparent overflow-hidden"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.2 }}
//     >
//       <motion.div
//         className="absolute right-0 top-0 h-[1px] bg-white" // ⬅ from right
//         initial={{ width: "0%" }}
//         whileInView={{ width }}
//         viewport={{ once: true }}
//         transition={{ duration: 1.2, ease: "easeInOut", delay }}
//       />
//     </motion.div>
//   );

//   return (
//     <section className="bg-[#151617] text-white w-full px-10 py-16 overflow-x-hidden overflow-y-visible ml-16">
//       <div className="max-w-4xl mx-auto">
//         {/* 🟦 Top Motion Line */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
//           <div className="w-full">
//             <AnimatedLine width="100%" delay={0.2} />
//           </div>
//           <div className="md:col-span-2">
//             <AnimatedLine width="100%" delay={0.4} />
//           </div>
//         </div>

//         {/* 🟪 Main 3-column content */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ml-6">
//           {/* Left Heading */}
//           <div>
//             <h2 className="text-3xl md:text-2xl font-normal mt-10 leading-snug">
//               How our Forward <br />
//               Deployed Research <br />
//               Engineers work
//             </h2>
//           </div>

//           {/* Right 2/3 Content */}
//           <div className="md:col-span-2 flex flex-col divide-y divide-[#888888]">
//             {steps.map((step, index) => (
//               <div
//                 key={index}
//                 className="py-10 flex items-start gap-4 justify-center"
//               >
//                 <span
//                   className="text-[70px] font-extrabold leading-none text-transparent select-none"
//                   style={{
//                     WebkitTextStroke: "3px white",
//                     textShadow: "2px 2px 6px rgba(255,255,255,0.2)",
//                   }}
//                 >
//                   {step.number}
//                 </span>

//                 <div className="flex-1 text-left">
//                   <h3 className="text-2xl font-normal mb-2 ">{step.title}</h3>
//                   <p className="text-gray-300 text-sm leading-relaxed">
//                     {step.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* 🟩 Bottom Motion Line */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
//           <div className="w-full">
//             <AnimatedLine width="100%" delay={1} />
//           </div>
//           {/* <div className="md:col-span-2">
//             <AnimatedLine width="100%" delay={1.2} />
//           </div> */}


            

// {/* FEATURES GRID SECTION */}
// <section className="w-full bg-[#151617] px-1  md:col-span-2">
//   {/* Match hero box width and remove gap */}
//   <div className=" mx-auto">
//     <div className="grid grid-cols-2 gap-0">
//       {/* Top Left - Foundational AI */}
//       <div className="border border-[#BBBBBB] p-6 flex flex-col items-start h-auto">
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
//       <div className="border border-[#BBBBBB] p-6 flex flex-col items-start h-auto">

//          <svg
//           className="w-full h-80 "
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
//       <div className="border border-[#BBBBBB] p-6 flex flex-col items-start h-auto">
//          <svg
//           className="w-full h-80 "
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
//       <div className="border border-[#BBBBBB] p-6 flex flex-col items-start h-auto">
//         <svg
//           className="w-full h-80 "
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
//       {/* <div className="border border-[#BBBBBB] p-8 flex flex-col justify-between min-h-[550px]">

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
        
//       </div> */}

//       {/* Bottom Right - CTA Section */}
//       {/* <div className="border border-[#BBBBBB] p-8 flex flex-col justify-between min-h-[300px] bg-[#151617] ">
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
//       </div> */}
//     </div>
//   </div>
// </section>














//         </div>
//       </div>
//     </section>
//   );
// }




















"use client";

import { motion } from "framer-motion";

export default function ThreeColSection() {
  const steps = [
    {
      number: "1",
      title: "Assess",
      desc: "Our joint goal: to meaningfully change processes and take pain points away, use-case by use-case, creating the foundation for your elastic, agent workforce.",
    },
    {
      number: "2",
      title: "Embed",
      desc: "Forward Deployed Research Engineers sit with your product, engineering and platform teams. We integrate with your data sources, repositories, pipelines and production systems within your controls.",
    },
    {
      number: "3",
      title: "Deliver",
      desc: "We deploy, measure and refine. Each solution becomes a part of your scalable, secure, and boundary-controlled agent ecosystem.",
    },
    {
      number: "4",
      title: "Evolve",
      desc: "As we work together, your organization builds capability and momentum to expand automation and intelligence across new functions.",
    },
  ];

  // 🟩 Animated motion line (right → left)
  const AnimatedLine = ({
    width = "100%",
    delay = 0,
  }: {
    width?: string;
    delay?: number;
  }) => (
    <motion.div
      className="relative h-[2px] bg-transparent overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute right-0 top-0 h-[1.5px] dark:bg-white bg-black"
        initial={{ width: "0%" }}
        whileInView={{ width }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut", delay }}
      />
    </motion.div>
  );

  return (
    <section className="dark:bg-[#151617] bg-white dark:text-white text-black w-full px-4 md:px-10 py-16 overflow-x-hidden overflow-y-visible ml-0 md:ml-0 lg:ml-16">
      <div className="max-w-4xl mx-auto">
        {/* 🟦 Top Motion Line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="w-full">
            <AnimatedLine width="100%" delay={0.2} />
          </div>
          <div className="md:col-span-2">
            <AnimatedLine width="100%" delay={0.4} />
          </div>
        </div>

        {/* 🟪 Main 3-column content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 ml-0 md:ml-6 mt-8">
          {/* Left Heading */}
          <div>
            <h2 className="text-3xl md:text-2xl font-normal mt-6 md:mt-10 leading-snug">
              How our Forward <br />
              Deployed Research <br />
              Engineers work
            </h2>
          </div>

          {/* Right 2/3 Content */}
          <div className="md:col-span-2 flex flex-col divide-y dark:divide-[#888888] divide-black">
            {steps.map((step, index) => (
              <div
                key={index}
                className="py-6 md:py-10 flex flex-col md:flex-row items-start gap-4 justify-start"
              >
                <span
                  className="text-[50px] sm:text-[60px] md:text-[70px] font-extrabold leading-none text-transparent select-none"
                  style={{
                    WebkitTextStroke: "3px white",
                    textShadow: "2px 2px 6px rgba(255,255,255,0.2)",
                  }}
                >
                  {step.number}
                </span>

                <div className="flex-1 text-left">
                  <h3 className="text-xl sm:text-2xl md:text-2xl font-normal mb-2">{step.title}</h3>
                  <p className="dark:text-gray-300 text-gray-600 text-sm sm:text-sm md:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🟩 Bottom Motion Line
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12 md:mt-16">
          <div className="w-full">
            <AnimatedLine width="100%" delay={1} />
          </div>
        </div> */}

        {/* FEATURES GRID SECTION */}
        {/* FEATURES GRID SECTION */}
<section className="w-full dark:bg-[#151617] bg-white px-1 md:px-0 mt-8">
  <div className="mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
      {/* Column 1: Motion Line */}
      <div className="hidden md:block">
        <AnimatedLine width="100%" delay={1} />
      </div>

      {/* Column 2 & 3: Feature Cards */}
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Top Left */}
        <div className="border dark:border-[#BBBBBB] border-black p-4 md:p-6 flex flex-col items-start h-auto">
          <h3 className="dark:text-white text-black text-xl sm:text-2xl font-mono mb-4">
            Foundational AI, built and battle-hardened for enterprise.
          </h3>
        </div>

        {/* Top Right */}
        <div className="border dark:border-[#BBBBBB] border-black p-4 md:p-6 flex flex-col items-start h-auto">
          <svg
            className="w-full h-60 sm:h-72 md:h-80 mb-2 md:mb-4"
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
          <h3 className="dark:text-gray-100 text-black text-md font-bold mb-1">
            Agentic and Multi-Agent Orchestration
          </h3>
          <p className="dark:text-[#BBBBBB] text-gray-600 text-sm leading-relaxed">
            Single and multi-agent workflows that can plan, take action, and reason.
            Leverage our framework to build anything from simple agents to complex,
            multi-step agentic systems.
          </p>
        </div>

        {/* Middle Left */}
        <div className="border dark:border-[#BBBBBB] border-black p-4 md:p-6 flex flex-col items-start h-auto">
          <svg
            className="w-full h-60 sm:h-72 md:h-80 mb-2 md:mb-4"
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
          <h3 className="dark:text-gray-100 text-black text-md font-bold mb-1">Developer Ecosystem</h3>
          <p className="dark:text-[#BBBBBB] text-gray-600 text-sm leading-relaxed">
            Full integrations, libraries and SDKs across your entire development
            workflow. Integrate more with your engineers.
          </p>
        </div>

        {/* Middle Right */}
        <div className="border dark:border-[#BBBBBB] border-black p-4 md:p-6 flex flex-col items-start h-auto">
          <svg
            className="w-full h-60 sm:h-72 md:h-80 mb-2 md:mb-4"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="#666" strokeWidth="1" fill="none">
              <rect x="40" y="40" width="50" height="50" />
              <rect x="110" y="40" width="50" height="50" />
              <rect x="40" y="110" width="50" height="50" />
              <rect x="110" y="110" width="50" height="50" />
              <line x1="90" y1="65" x2="110" y2="65" />
              <line x1="65" y1="90" x2="65" y2="110" />
              <line x1="135" y1="90" x2="135" y2="110" />
              <line x1="90" y1="135" x2="110" y2="135" />
            </g>
          </svg>
          <h3 className="dark:text-gray-100 tetext-black text-md font-bold mb-1">Data and Knowledge</h3>
          <p className="dark:text-[#BBBBBB] tetext-gray-600 text-sm leading-relaxed">
            Comprehensive data connectors, data retrieval, and knowledge
            management. Connect to your data sources and proprietary information.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        
      </div>
    </section>
  );
}
  