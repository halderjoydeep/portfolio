"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const ScrollGif: React.FC = () => {
  return (
    <div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-10">
      <Link href="#about">
        <div className="flex h-16 w-9 justify-center rounded-3xl border-4 border-secondary p-2">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{ duration: 1.5, repeatType: "loop", repeat: Infinity }}
            className="h-3 w-3 rounded-full bg-secondary"
          />
        </div>
      </Link>
    </div>
  );
};

export default ScrollGif;
