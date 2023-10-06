"use client";

import SectionWrapper from "@/components/hoc/SectionWrapper";
import { projectSectionSummary, projects } from "@/lib/constants";
import { fadeIn, textVariant } from "@/lib/motion";
import { styles } from "@/lib/styles";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <SectionWrapper idName="projects">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn({ delay: 0.1, duration: 1 })}
        className="mt-4 max-w-2xl text-[16px] leading-8 text-secondary"
      >
        {projectSectionSummary}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
