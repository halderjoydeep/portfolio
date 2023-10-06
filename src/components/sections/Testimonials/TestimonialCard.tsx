"use client";

import { fadeIn } from "@/lib/motion";
import { Testimonial } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialCardProps extends Testimonial {
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  company,
  designation,
  image,
  index,
  name,
  testimonial,
}) => {
  return (
    <motion.div
      variants={fadeIn({ type: "spring", delay: index * 0.5, duration: 0.75 })}
      className="flex w-full flex-col rounded-3xl bg-black-200 p-10 xs:w-[320px]"
    >
      <p className="text-[48px] font-black text-white">&quot;</p>
      <div className="mt-1 flex flex-1 flex-col justify-between">
        <p className="text-[18px] tracking-wider text-white">{testimonial}</p>
        <div className="mt-7 flex items-center justify-between gap-1">
          <div className="flex flex-1 flex-col">
            <p className="text-[16px] font-medium text-white">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-[12px] text-secondary">
              {designation} of {company}
            </p>
          </div>

          <div className="relative h-10 w-10 rounded-full">
            <Image
              src={image}
              fill
              alt={`feedback by - ${name}`}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
