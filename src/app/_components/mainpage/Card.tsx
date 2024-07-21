"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Book from "../bookspage/book";

type CardProps = {
  url: string;
  id: string;
};

export default function Card({ url, id }: CardProps) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden h-[300px] min-w-[200px] rounded-xl flex justify-center items-center"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
            <motion.h1
              className="bg-white font-bold text-sm px-3 py-2 rounded-full z-10 flex items-center gap-1 hover:opacity-75"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: 10 }}
            >
              <Link href={`/livres/#${id}`}>Voir plus</Link>
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        src={url}
        alt="url"
        sizes="300px"
        fill
        style={{ objectFit: "cover" }}
      ></Image>
    </motion.div>
  );
}
