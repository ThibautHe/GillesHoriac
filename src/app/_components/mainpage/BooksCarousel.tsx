"use client";
import useMeasure from "react-use-measure";
import Card from "./Card";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BooksCarousel() {
  const images = [
    "/Livres/col_blanc_casse.jpg",
    "/Livres/enquete_chez_les_oiseaux.jpg",
    "/Livres/il_ny_a_plus_de_vieillesse.jpg",
    "/Livres/julien_de_belgique.jpg",
    "/Livres/la_peau_de_lautre.png",
    "/Livres/la_teigne.jpeg",
    "/Livres/le_vierge_mari.jpg",
    "/Livres/pleine_lune.jpg",
    "/Livres/quand_tu_seras_petit.jpg",
    "/Livres/roses_mortelles.jpg",
    "/Livres/sa_majeste_lea.jpg",
    "/Livres/sales_gosses_je_vous_aime.jpg",
  ];

  const FAST_DURATION = 55;
  const SLOW_DURATION = 150;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalpos = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalpos], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalpos),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalpos], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender]);

  return (
    <>
      <motion.div
        className="absolute left-0 flex gap-4"
        ref={ref}
        style={{ x: xTranslation }}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...images, ...images].map((item, index) => (
          <Card url={item} key={index} />
        ))}

        
      </motion.div>
    </>
  );
}
