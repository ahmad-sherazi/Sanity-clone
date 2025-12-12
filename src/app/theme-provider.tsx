// "use client";

// import { useEffect, ReactNode } from "react"; // ✅ import ReactNode

// interface ThemeProviderProps {
//   children: ReactNode; // ✅ this is correct
// }

// export default function ThemeProvider({ children }: ThemeProviderProps) {
//   useEffect(() => {
//     const saved = localStorage.getItem("theme") || "light";
//     document.documentElement.classList.add(saved);
//   }, []);

//   const toggle = () => {
//     const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
//     const next = current === "dark" ? "light" : "dark";
//     document.documentElement.classList.remove(current);
//     document.documentElement.classList.add(next);
//     localStorage.setItem("theme", next);
//   };

//   return (
//     <>
//       <button
//         onClick={toggle}
//         className="fixed bottom-4 right-4 border px-4 py-2 rounded z-50"
//       >
//         Toggle Theme
//       </button>
//       {children}
//     </>
//   );
// }




"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<() => void>(() => {});

export function useThemeToggle() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    setTheme(saved);
    document.documentElement.classList.add(saved);
  }, []);

  const toggle = () => {
    const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";

    document.documentElement.classList.remove(current);
    document.documentElement.classList.add(next);

    localStorage.setItem("theme", next);
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={toggle}>
      {children}
    </ThemeContext.Provider>
  );
}
