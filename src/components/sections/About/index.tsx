"use client";

import SectionWrapper from "@/components/hoc/SectionWrapper";

import { introduction, services } from "@/lib/constants";
import { fadeIn, textVariant } from "@/lib/motion";
import { styles } from "@/lib/styles";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const About: React.FC = () => {
  return (
    <SectionWrapper idName="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn({ delay: 0.1, duration: 1 })}
        className="mt-4 max-w-2xl text-[16px] leading-8 text-secondary"
      >
        {introduction}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 px-8 xs:px-16 sm:px-0">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
