"use client";

import SectionWrapper from "@/components/hoc/SectionWrapper";
import { socialLinks } from "@/lib/constants";
import { fadeIn } from "@/lib/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const index: React.FC = () => {
  return (
    <footer>
      <SectionWrapper idName="footer">
        <motion.div
          variants={fadeIn({
            direction: "up",
            type: "spring",
            duration: 0.75,
          })}
        >
          <div className="flex w-full flex-col items-center">
            <ul className="flex list-none items-center justify-center gap-7">
              {socialLinks.map((link, index) => (
                <li key={`link-${index}`}>
                  <Link
                    className="relative block h-6 w-6"
                    href={link.url}
                    target="_blank"
                  >
                    <Image src={link.icon} fill alt={`${link.name} icon`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-6 text-center">
            &copy; {new Date().getFullYear()} Joydeep Halder. All rights
            reserved.
          </p>
        </motion.div>
      </SectionWrapper>
    </footer>
  );
};

export default index;
