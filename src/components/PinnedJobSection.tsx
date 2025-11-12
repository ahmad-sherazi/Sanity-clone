"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface Job {
  title: string;
  href: string;
}

interface PinnedJobSectionProps {
  title: string;
  jobs: Job[];
}

export default function PinnedJobSection({ title, jobs }: PinnedJobSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPinned, setIsPinned] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

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

  return (
    <section className="bg-[#0f1010] text-white px-8 md:px-16 py-20 border-t border-gray-600">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {/* LEFT COLUMN (Sticky Heading) */}
        <div className="relative pr-10">
          <div
            className={`pb-10 ${
              isPinned ? "sticky top-24" : "relative"
            } transition-all duration-300`}
          >
            <h2 className="text-3xl font-semibold pt-6">{title}</h2>
          </div>
        </div>

        {/* RIGHT COLUMN (Links) */}
        <div className="flex flex-col" ref={containerRef}>
          {jobs.map((job, index) => (
            <div
              key={index}
              className="group border-b border-gray-700 first:border-t transition-colors duration-200"
            >
              <Link
                href={job.href}
                className="flex items-center justify-between w-full py-6 px-4 md:px-8 hover:bg-[#00baff1a]"
              >
                <span className="text-[#b8e8ff] group-hover:text-[#00baff] transition-colors duration-200 text-lg">
                  {job.title}
                </span>
                <span className="text-[#00baff] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
