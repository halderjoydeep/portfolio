"use client";

import SectionWrapper from "@/components/hoc/SectionWrapper";
import { testimonials } from "@/lib/constants";
import { textVariant } from "@/lib/motion";
import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const Testimonials: React.FC = () => {
  return (
    <SectionWrapper idName="testimonials">
      <div className="mt-12 rounded-[20px] bg-black-100">
        <div
          className={cn(
            "min-h-[300px] rounded-2xl bg-tertiary",
            styles.padding,
          )}
        >
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>What others say</p>
            <h2 className={styles.sectionHeadText}>Testimonials.</h2>
          </motion.div>
        </div>

        <div
          className={cn("-mt-20 flex flex-wrap gap-7 pb-14", styles.paddingX)}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`testimonial-${index}`}
              index={index}
              {...testimonial}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
