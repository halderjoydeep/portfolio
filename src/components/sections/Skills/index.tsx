"use client";

import SectionWrapper from "@/components/hoc/SectionWrapper";
import { skills } from "@/lib/constants";
import { textVariant } from "@/lib/motion";
import { styles } from "@/lib/styles";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const Skills: React.FC = () => {
  return (
    <SectionWrapper idName="skills">
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>What I learnt</p>
        <h2 className={styles.sectionHeadText}>Tech Skills.</h2>
      </motion.div>

      <div className="mt-20 flex w-full flex-wrap justify-center gap-7">
        {skills.map((skill, index) => (
          <SkillCard key={`skill-${index}`} index={index} {...skill} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;
