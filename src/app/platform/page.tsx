// 'use client'
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";

// export default function PlatformPage() {
//   return (
//     <div className="bg-black text-white flex min-h-screen">
      
//       {/* ✅ Fixed Left Sidebar (reduced margin) */}
//       <aside className="w-48 h-screen fixed left-0 top-0 flex flex-col items-start justify-start gap-6 pt-20 pl-6 text-gray-300 text-sm tracking-wide">
//         <span className="hover:text-white cursor-pointer"><Link href="/">Platform</Link></span>
//         <span className="hover:text-white cursor-pointer text-[#61dafb]">PLATFORM</span>
//         <span className="hover:text-white cursor-pointer"><Link href="/approach">Approach</Link></span>
//         <span className="hover:text-white cursor-pointer">VISION</span>
//         <span className="hover:text-white cursor-pointer">CAREERS</span>
//         <span className="hover:text-white cursor-pointer">BLOG</span>
//         <span className="hover:text-white cursor-pointer">NEWSROOM</span>
//       </aside>

//       {/* ✅ Scrollable Right */}
//       <main className="ml-48 w-full overflow-y-auto">

//         {/* ✅ Overlapping Circles Section */}
//         <section className="min-h-screen flex items-center justify-center">
//           <div className="relative flex -space-x-20">

//             {/* Circle 1 */}
//             <div className="w-80 h-80 border border-gray-600 rounded-full flex items-center justify-center bg-black/60">
//               <h2 className="text-3xl tracking-wide">
//                 Your <span className="text-white">code.</span>
//               </h2>
//             </div>

//             {/* ✅ Overlap section light gray area */}
//             <div className="absolute left-62 top-14 w-16 h-52 bg-gray-700 opacity-50 rounded-4xl blur-md"></div>

//             {/* Circle 2 */}
//             <div className="w-80 h-80 border border-gray-600 rounded-full flex items-center justify-center bg-black/60">
//               <h2 className="text-3xl tracking-wide">
//                 Your <span className="text-white">data.</span>
//               </h2>
//             </div>

//             {/* ✅ 2nd overlap */}
//             <div className="absolute left-[31rem] top-14 w-16 h-52 bg-gray-700 opacity-50 rounded-4xl blur-md"></div>

//             {/* Circle 3 */}
//             <div className="w-80 h-80 border border-gray-600 rounded-full flex items-center justify-center bg-black/60">
//               <h2 className="text-3xl tracking-wide">
//                 Your <span className="text-white">model.</span>
//               </h2>
//             </div>
//           </div>
//         </section>

//         {/* ✅ Futureproofed Section with Underline */}
//         {/* ✅ Combined Futureproofed + Text + Logos + Single Line */}
// <section className="px-24 pt-8 flex flex-col gap-10">

//   {/* Text + Content Side by Side */}
//   <div className="grid grid-cols-2 gap-12 items-start">

//     {/* Left title */}
//     <h3 className="text-5xl font-semibold leading-snug">
//       Futureproofed <br /> within your <br /> boundary.
//     </h3>

//     {/* Right paragraph */}
//     <p className="text-gray-300 leading-relaxed text-sm max-w-md pt-2">
//       Poolside exists for a future where software work happens outside the
//       editor. We build models from scratch, designed to run within your
//       infrastructure.
//       <br /><br />
//       Accelerate your teams by delivering intelligence across every surface —
//       in the IDE, in the terminal, with agents — without compromising
//       control. Backed by global enterprise leaders.
//     </p>
//   </div>

//   {/* ✅ Logos Under Text + Still Centered */}
//   <div className="flex gap-14 opacity-50 mt-4">
//     {[
//       { name: "NVIDIA", width: "w-12" },
//       { name: "Citi", width: "w-10" },
//       { name: "eBay", width: "w-10" },
//       { name: "Capital One", width: "w-14" },
//       { name: "HSBC", width: "w-10" },
//     ].map((brand, index) => (
//       <div key={index} className="flex flex-col items-center gap-1">
//         <span className="text-xs">{brand.name}</span>
//         <div className={`${brand.width} h-6 border border-black rounded`}></div>
//       </div>
//     ))}
//   </div>


// {/* ✅ Animated White Split Line */}
// <motion.div
//   className="relative w-full h-[2px] mt-6 bg-black z-[50] overflow-hidden"
//   initial={{ opacity: 0 }}
//   whileInView={{ opacity: 1 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.3 }}
// >
//   {/* Full black background */}
//   <div className="absolute inset-0 bg-black z-0"></div>

//   {/* Left white line */}
//   <motion.div
//     className="absolute left-0 top-0 w-24 h-[2px] bg-white z-10"
//     initial={{ x: '100%' }}
//     whileInView={{ x: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 1, ease: "easeOut" }}
//   ></motion.div>

//   {/* Gap (pure black) */}
//   <div className="absolute left-24 top-0 w-8 h-[2px] bg-black z-10"></div>

//   {/* Right white line */}
//   <motion.div
//     className="absolute left-32 top-0 right-0 h-[2px] bg-white z-10"
//     initial={{ x: '100%' }}
//     whileInView={{ x: 0 }}
//     viewport={{ once: true }}
//     transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
//   ></motion.div>
// </motion.div>



 
// </section>





// {/* ✅ Speak to Us + Form + FAQs Section */}
// <section className="px-24 py-20 border-t border-black text-white bg-black grid grid-cols-2 gap-20">

//   {/* LEFT SIDE — Text */}
//   <div className="flex flex-col justify-start gap-6">
//     <div>
//       <h2 className="text-3xl font-semibold leading-snug">
//         Speak to us about <br /> becoming an AI Company
//       </h2>
//       <p className="text-gray-400 text-base max-w-sm mt-3">
//         Ideal for highly regulated spaces like Financial Services, Defense, and Industrial.
//       </p>
//     </div>
//   </div>

//   {/* RIGHT SIDE — Form + FAQ */}
//   <div className="flex flex-col gap-12">

//     {/* Form */}
//     <form className="flex flex-col gap-8 text-base max-w-lg">
//       <div>
//         <label className="block text-gray-400 mb-2  tracking-wider text-sm uppercase">
//           Your Name
//         </label>
//         <input
//           type="text"
//           placeholder="Your full name"
//           className="w-full border-b-4 bg-gray-900 border-gray-300 py-2 text-lg focus:outline-none focus:border-b-cyan-200 transition-all placeholder-gray-500"
//         />
//       </div>

//       <div>
//         <label className="block text-gray-400 mb-2 tracking-wider text-sm uppercase">
//           Your Company Email
//         </label>
//         <input
//           type="email"
//           placeholder="you@company.com"
//           className="w-full border-b-4 bg-gray-900 border-gray-300 py-2 text-lg focus:outline-none focus:border-b-cyan-200 transition-all placeholder-gray-500"
//         />
//       </div>

//       {/* Checkbox + Button Row */}
//       <div className="flex items-center justify-between mt-4">
//         <div className="flex items-center gap-2">
//           {/* Custom Blue Checkbox */}
//           <label className="relative flex items-center cursor-pointer">
//             <input
//               type="checkbox"
//               className="peer appearance-none w-5 h-5 border border-gray-500 rounded-sm transition-colors cursor-pointer
//                          checked:bg-cyan-200 checked:border-cyan-200 focus:outline-none"
//             />
//           </label>
//           <span className="text-gray-400 text-sm">
//             I agree to the{" "}
//             <span className="text-white underline cursor-pointer">Privacy Policy</span>
//           </span>
//         </div>

//         {/* Submit Button (Right side) */}
//         <button
//           type="submit"
//           className="bg-gray-600 hover:bg-cyan-300 hover:text-gray-500 text-gray-300 text-base py-2 px-6 rounded transition-all"
//         >
//           ↑ Submit
//         </button>
//       </div>
//     </form>

//     {/* ✅ Animated Divider Line */}
// <motion.div
//   className="border border-white my-6 w-full"
//   initial={{ scaleX: 0, originX: 1 }}
//   whileInView={{ scaleX: 1 }}
//   viewport={{ once: true }}
//   transition={{ duration: 1, ease: "easeOut" }}
// />

//     {/* FAQ Section */}
//     <div className="flex flex-col gap-6">
//       <h4 className="text-2xl font-semibold">FAQs</h4>
//       <p className="text-gray-400 text-base leading-relaxed"></p>

//       {/* FAQ 1 */}
//       <details open className="border-t border-gray-700 pt-4">
//         <summary className="cursor-pointer text-white font-medium mb-3 text-lg">
//           How are you different?
//         </summary>
//         <p className="text-gray-400 text-base leading-relaxed">
//           We believe in a future where AI safely and securely increases developer productivity
//           by orders of magnitude while automating mundane, execution-driven tasks. Our core AI
//           models and infrastructure are designed to work within your security boundary — giving
//           you full control of your data.
//         </p>
//       </details>

//       {/* FAQ 2 */}
//       <details className="border-t border-gray-700 pt-4">
//         <summary className="cursor-pointer text-white font-medium mb-3 text-lg">
//           Why get started now?
//         </summary>
//         <p className="text-gray-400 text-base leading-relaxed">
//           Every company is becoming an AI company. The earlier you begin integrating secure AI,
//           the faster your teams and products evolve.
//         </p>
//       </details>
//     </div>
//   </div>
// </section>


//  <div className="flex justify-center items-center min-h-[40vh] bg-black">
//       <h1
//         className="text-[160px] font-extrabold text-transparent uppercase tracking-wide"
//         style={{
//           backgroundImage:
//             "repeating-linear-gradient(0deg, #ccc 0, #ccc 2px, transparent 2px, transparent 8px)",
//           WebkitBackgroundClip: "text",
//           backgroundClip: "text",
//         }}
//       >
//         poolside
//       </h1>
//     </div>




//       </main>
//     </div>
//   );
// }










// Real code __________________________________________________________________-----

'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar"; // 👈 your global navbar

export default function PlatformPage() {
  return (
    <div className="bg-[#151617] text-white flex min-h-screen relative">
      {/* ✅ Global Navbar */}
      <Navbar />

      {/* ✅ Main Page Content */}
      <main className="md:ml-14 w-full overflow-y-auto  md:pt-0">

        {/* ✅ Overlapping Circles Section */}
        <section className="min-h-screen flex items-center justify-center relative ml-16  ">
          <div className="relative flex -space-x-10">
            {/* Circle 1 */}
            <div className="w-80 h-80 border-2 border-dashed border-[#444444] rounded-full flex items-center justify-center bg-[#151617]">
              <h2 className="text-3xl tracking-wide">
                Your <span className="text-white">code.</span>
              </h2>
            </div>

            {/* Circle 2 */}
            <div className="w-80 h-80 border-2 border-dashed border-[#444444] rounded-full flex items-center justify-center bg-[#151617]">
              <h2 className="text-3xl tracking-wide">
                Your <span className="text-white">data.</span>
              </h2>
            </div>

            {/* Circle 3 */}
            <div className="w-80 h-80 border-2 border-dashed border-[#444444] rounded-full flex items-center justify-center bg-[#151617]">
              <h2 className="text-3xl tracking-wide">
                Your <span className="text-white">model.</span>
              </h2>
            </div>

            {/* ✅ Intersection Glow */}
            {/* <div className="absolute left-[17rem] top-10 w-64 h-64 bg-[#151617] blur-2xl rounded-full pointer-events-none"></div> */}
          </div>
        </section>
















{/* ✅ Futureproofed Section (perfectly aligned + dual underline row + logos under col2) */}
<section className="px-[10vw] md:ml-14 flex flex-col gap-12 max-w-[1500px] mt-8 mx-auto bg-[#151617]">

  {/* Text + Content Side by Side */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

    {/* ===== Column 1 ===== */}
    <div>
      <h3 className="text-5xl font-normal leading-snug">
        Futureproofed <br /> within your <br /> boundary.                      
      </h3>
    </div>

    {/* ===== Column 2 ===== */}
    <div>
      <p className="text-gray-300 leading-relaxed text-md max-w-md pt-2">
        Poolside exists for a future where software work happens outside the
        editor. We build models from scratch, designed to run within your
        infrastructure.
        <br /><br />
        Accelerate your teams by delivering intelligence across every surface —
        in the IDE, in the terminal, with agents — without compromising
        control. Backed by global enterprise leaders.
      </p>

      {/* ✅ Logos directly under col 2 */}
      <div className="flex flex-wrap gap-4 opacity-60 mt-8 text-stone-100">
        {["NVIDIA", "Citi", "eBay", "Capital", "HSBC"].map((name, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <span className="text-2xl ">{name}</span>
            <div className="w-12 h-6 border border-gray-800 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* ✅ Underlines in one row with gap from center */}
  <div className="flex justify-between gap-10 mt-4">
    {/* Left underline (Column 1) */}
    <motion.div
      className="relative w-full h-[2px] bg-[#151617] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute right-0 top-0 h-[1px] bg-white"
        initial={{ width: "0%", x: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
      />
    </motion.div>

    {/* Right underline (Column 2) */}
    <motion.div
      className="relative w-full h-[1px] bg-[#151617] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute right-0 top-0 h-[1px] bg-white"
        initial={{ width: "0%", x: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </motion.div>
  </div>

</section>







{/* ✅ Models Powering Section (same width as circle section) */}
<section className="grid md:grid-cols-2 gap-12 px-[10vw] md:ml-14 py-24 bg-[#151617] max-w-[1500px] mx-auto mt-28">
  {/* Left Content */}
  <div className="flex flex-col gap-8">
    <h1 className="text-5xl font-normal leading-snug">
      Models powering the future.
    </h1>
    <p className="text-lg leading-relaxed text-gray-300">
      Today's AI developer tools are lightweight interfaces that pull from
      the underlying models. Models are the foundation for what you build
      next, not editors.
    </p>

    <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
      <p>
        <span className="text-cyan-100  text-3xl pr-2">▪</span> Poolside models are
        trained with internet-scale data combined with our proprietary
        synthetic datasets* to better represent real-world engineering work
        and agent-model interactions.
      </p>

      <p>
        GC and CISO approved: limit your exposure to commercially-licensed
        code. We focus on creating high-quality, safe data to train our
        models, with indemnity for what you create with Poolside.
      </p>

      <p>
        <a
          href="#"
          className="text-cyan-100   hover:bg-cyan-100 hover:text-black transition-colors"
        >
          * Read more about our vision
        </a>
      </p>
    </div>
  </div>

  {/* Right Empty Column (keeps width balance with left side) */}
  <div className="hidden md:block bg-[#151617]"></div>
</section>






  {/* ✅ Underlines in one row with gap from center */}
  <div className="flex justify-between gap-10  md:ml-14 px-[10vw] max-w-[1500px] mx-auto mt-28">
    {/* Left underline (Column 1) */}
    <motion.div
      className="relative w-full h-[1px] bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute right-0 top-0 h-[1px] bg-white"
        initial={{ width: "0%", x: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
      />
    </motion.div>

    {/* Right underline (Column 2) */}
    <motion.div
      className="relative w-full h-[1px] bg-[#151617] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute right-0 top-0 h-[1px] bg-white"
        initial={{ width: "0%", x: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </motion.div>
    </div>











{/* ✅ Speak to Us + Form + FAQs Section (aligned with circle section width) */}
<section className="px-[10vw] md:ml-14 py-20  text-white bg-[#151617] grid md:grid-cols-2 gap-20 max-w-[1500px] mx-auto">
  {/* LEFT SIDE — Text */}
  <div className="flex flex-col justify-start gap-6">
    <div>
      <h2 className="text-3xl font-normal leading-snug">
        Speak to us about <br /> becoming an AI Company
      </h2>
      <p className="text-[#BBBBBB] text-base max-w-sm mt-3">
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
        <label className="block text-[#BBBBBB] mb-2 tracking-wider text-sm uppercase">
          ### Your Name
        </label>
        <input
          type="text"
          placeholder="Your full name"
          className="w-full border-b-3 bg-[#333333] border-gray-300 py-3 text-md focus:outline-none focus:border-b-cyan-100 transition-all placeholder-[#BBBBBB]"
        />
      </div>

      <div>
        <label className="block text-[#BBBBBB] mb-2 tracking-wider text-sm uppercase">
          ### Your Company Email
        </label>
        <input
          type="email"
          placeholder="you@company.com"
          className="w-full border-b-3 bg-[#333333] border-gray-300 py-3 text-md focus:outline-none focus:border-b-cyan-100 transition-all placeholder-[#BBBBBB]"
        />
      </div>

      {/* Checkbox + Button Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
        <div className="flex items-center gap-2">
          <label className="relative flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="peer appearance-none w-5 h-5 border border-gray-500 rounded-sm transition-colors cursor-pointer checked:bg-cyan-100 checked:border-cyan-100 focus:outline-none"
            />
          </label>
          <span className="text-gray-300 text-sm">
            I agree to the{" "}
            <span className="text-cyan-100 underline cursor-pointer">
              Privacy Policy
            </span>
          </span>
        </div>

        <button
          type="submit"
          className="bg-[#333333] hover:bg-cyan-100 hover:text-black text-[#BBBBBB] text-base py-2 px-6 rounded transition-all"
        >
          ↑ Submit
        </button>
      </div>
    </form>








{/* ✅ Animated Underline Row (visible & positioned) */}
<div className="flex justify-between gap-10 mt-12 md:ml-14 px-[10vw] max-w-[1500px] mx-auto relative z-20">
  {/* Left underline */}
  <motion.div
    className="relative w-full h-[2px] bg-[#1a1b1c] overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="absolute right-0 top-0 h-[1px] bg-white"
      initial={{ width: "0%" }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeInOut", delay: 1 }}
    />
  </motion.div>

  {/* Right underline */}
  <motion.div
    className="relative w-full h-[1px] bg-[#1a1b1c] overflow-hidden"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="absolute right-0 top-0 h-[1px] bg-white"
      initial={{ width: "0%" }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
    />
  </motion.div>
</div>






    {/* Divider Line */}
    <motion.div
      className="border border-white  w-full"
      initial={{ scaleX: 0, originX: 1 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    />




  



  








    {/* FAQs */}
    <div className="flex flex-col gap-6 mt-24">
      <h4 className="text-2xl font-semibold">FAQs</h4>

      <details open className="border-t border-[#BBBBBB] pt-4">
        <summary className="cursor-pointer text-white font-medium mb-3 text-lg">
          How are you different?
        </summary>
        <p className="text-[#BBBBBB] text-base leading-relaxed">
          We believe in a future where AI safely and securely increases
          developer productivity while automating mundane, execution-driven
          tasks. Our core AI models and infrastructure are designed to work
          within your security boundary — giving you full control of your
          data.
        </p>
      </details>


      
      <details open className="border-t border-[#BBBBBB] pt-4">
        <summary className="cursor-pointer text-white font-medium mb-3 text-lg">
          How are you different?
        </summary>
        <p className="text-[#BBBBBB] text-base leading-relaxed">
          We believe in a future where AI safely and securely increases
          developer productivity while automating mundane, execution-driven
          tasks. Our core AI models and infrastructure are designed to work
          within your security boundary — giving you full control of your
          data.
        </p>
      </details>

     <details open className="border-t border-[#BBBBBB] pt-4">
        <summary className="cursor-pointer text-white font-medium mb-3 text-lg">
          How are you different?
        </summary>
        <p className="text-[#BBBBBB] text-base leading-relaxed">
          We believe in a future where AI safely and securely increases
          developer productivity while automating mundane, execution-driven
          tasks. Our core AI models and infrastructure are designed to work
          within your security boundary — giving you full control of your
          data.
        </p>
      </details>

      <details open className="border-t border-[#BBBBBB] pt-4">
        <summary className="cursor-pointer text-white font-medium mb-3 text-lg">
          How are you different?
        </summary>
        <p className="text-[#BBBBBB] text-base leading-relaxed">
          We believe in a future where AI safely and securely increases
          developer productivity while automating mundane, execution-driven
          tasks. Our core AI models and infrastructure are designed to work
          within your security boundary — giving you full control of your
          data.
        </p>
      </details>

      <details className="border-t border-[#BBBBBB] pt-4">
        <summary className="cursor-pointer text-white font-medium mb-3 text-lg">
          Why get started now?
        </summary>
        <p className="text-[#BBBBBB] text-base leading-relaxed">
          Every company is becoming an AI company. The earlier you begin
          integrating secure AI, the faster your teams and products evolve.
        </p>
      </details>
    </div>
  </div>
</section>



        {/* ✅ Footer */}
        <div className="flex justify-center items-center min-h-[40vh] bg-[#151617]">
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



      </main>
    </div>
  );
}
