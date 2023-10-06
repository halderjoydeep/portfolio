"use client";

import { educations } from "@/lib/constants";
import { textVariant } from "@/lib/motion";
import { styles } from "@/lib/styles";
import { motion } from "framer-motion";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "../../hoc/SectionWrapper";
import EducationCard from "./EducationCard";

const Education: React.FC = () => {
  return (
    <SectionWrapper idName="education">
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>What degree i hold</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="">
          {educations.map((education, index) => {
            return <EducationCard key={`education-${index}`} {...education} />;
          })}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
};

export default Education;
