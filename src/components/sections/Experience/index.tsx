"use client";

import SectionWrapper from "@/components/hoc/SectionWrapper";
import { experiences } from "@/lib/constants";
import { textVariant } from "@/lib/motion";
import { styles } from "@/lib/styles";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "./ExperienceCard";

const Experience: React.FC = () => {
  return (
    <SectionWrapper idName="work">
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="">
          {experiences.map((experience, index) => {
            return (
              <ExperienceCard key={`experience-${index}`} {...experience} />
            );
          })}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
