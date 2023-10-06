"use client";

import { motion } from "framer-motion";

const AnimatedBall: React.FC = () => {
  return (
    <motion.div
      animate={{ y: [0, 24, 0] }}
      transition={{ duration: 1.5, repeatType: "loop", repeat: Infinity }}
      className="h-3 w-3 rounded-full bg-secondary"
    />
  );
};

export default AnimatedBall;
