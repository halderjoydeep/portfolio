"use client";

import { staggerContainer } from "@/lib/motion";
import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  idName: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  idName,
}) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className={cn(styles.padding, "relative z-0 mx-auto max-w-7xl")}
    >
      <span className="-mt-24 block pb-24" id={idName}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
