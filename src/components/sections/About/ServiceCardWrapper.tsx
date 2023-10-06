"use client";
import { fadeIn } from "@/lib/motion";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

interface ServiceCardWrapperProps {
  index: number;
  children: React.ReactNode;
}

const ServiceCardWrapper: React.FC<ServiceCardWrapperProps> = ({
  index,
  children,
}) => {
  return (
    <Tilt
      className="w-full sm:w-[250px]"
      options={{ max: 45, scale: 1, speed: 450 }}
    >
      <motion.div
        variants={fadeIn({
          direction: "right",
          type: "spring",
          delay: index * 0.5,
          duration: 0.75,
        })}
        className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
      >
        {children}
      </motion.div>
    </Tilt>
  );
};

export default ServiceCardWrapper;
