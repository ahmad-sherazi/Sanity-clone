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



// old new
// "use client";

// import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// interface ThemeProviderProps {
//   children: ReactNode;
// }

// const ThemeContext = createContext<() => void>(() => {});

// export function useThemeToggle() {
//   return useContext(ThemeContext);
// }

// export default function ThemeProvider({ children }: ThemeProviderProps) {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     const saved = localStorage.getItem("theme") || "light";
//     setTheme(saved);
//     document.documentElement.classList.add(saved);
//   }, []);

//   const toggle = () => {
//     const current = document.documentElement.classList.contains("dark") ? "dark" : "light";
//     const next = current === "dark" ? "light" : "dark";

//     document.documentElement.classList.remove(current);
//     document.documentElement.classList.add(next);

//     localStorage.setItem("theme", next);
//     setTheme(next);
//   };

//   return (
//     <ThemeContext.Provider value={toggle}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }




// new new
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  light: () => void;
  dark: () => void;
  system: () => void;
  current: ThemeMode;
}

const ThemeContext = createContext<ThemeContextType>({
  light: () => {},
  dark: () => {},
  system: () => {},
  current: "light",
});

export function useThemeToggle() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<ThemeMode>("system");

  // 🔹 Apply theme
  const applyTheme = (mode: ThemeMode) => {
    const root = document.documentElement;

    root.classList.remove("light", "dark");

    if (mode === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      root.classList.add(prefersDark ? "dark" : "light");
    } else {
      root.classList.add(mode);
    }

    localStorage.setItem("theme", mode);
    setCurrent(mode);
  };

  // 🔹 Load saved theme
  useEffect(() => {
    const saved = (localStorage.getItem("theme") as ThemeMode) || "system";
    applyTheme(saved);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        light: () => applyTheme("light"),
        dark: () => applyTheme("dark"),
        system: () => applyTheme("system"),
        current,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

