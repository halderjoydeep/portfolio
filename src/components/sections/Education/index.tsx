"use client";

import { educations } from "@/lib/constants";
import { textVariant } from "@/lib/motion";
import { styles } from "@/lib/styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionWrapper from "../../hoc/SectionWrapper";
import EducationCard from "./EducationCard";

const Education: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <SectionWrapper idName="education">
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>What degree i hold</p>
        <h2 className={styles.sectionHeadText}>Education.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col" ref={ref}>
        <VerticalTimeline lineColor="">
          {educations.map((education, index) => {
            return (
              <EducationCard
                key={`education-${index}`}
                {...education}
                inView={inView}
              />
            );
          })}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
};

export default Education;
