"use client";

import { Lora } from "next/font/google";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { AnimatePresence, motion } from "framer-motion";

// Import fonts
const lora = Lora({ subsets: ["latin"], weight: "400" });
const LoraItalic = Lora({ subsets: ["latin"], weight: "400", style: "italic" });

const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    setTargetReached(e.matches);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, [updateTarget, width]);

  return targetReached;
};

export default function Nav() {
  const isBreakpoint = useMediaQuery(600);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
      setLastScrollY(window.scrollY);
    } else if (window.scrollY < lastScrollY - maxScroll * 0.05) {
      // if scroll up show the navbar
      setLastScrollY(window.scrollY);
      setShow(true);
    }

    // remember current page location to use in the next move
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const style = `sticky bg-Main z-50 ${show ? "top-0" : ""}`;

  return (
    <div className={`${isBreakpoint && style}`}>
      {isBreakpoint ? (
        <HamburgerMenu />
      ) : (
        <nav className="flex justify-between p-12">
          <h1 className={`${LoraItalic.className} text-6xl`}>Gilles Horiac</h1>
          <ul className="flex gap-5 justify-center items-center">
            <li>
              <Link href="/#Accueil">Accueil</Link>
            </li>
            <li>
              <Link href="/livres">Livres</Link>
            </li>
            <li>
              <Link href="/#Animations">Animation</Link>
            </li>
            <li>
              <Link href="/#Contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
