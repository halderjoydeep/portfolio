"use client";

import { github } from "@/assets";
import { fadeIn } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { Project } from "@/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";

interface ProjectCardProps extends Project {
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  index,
  description,
  image,
  name,
  source_code_link,
  tags,
}) => {
  return (
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="w-full sm:w-[360px]"
    >
      <motion.div
        variants={fadeIn({
          direction: "up",
          type: "spring",
          delay: index * 0.5,
          duration: 0.75,
        })}
        className="h-full w-full rounded-2xl bg-tertiary p-5"
      >
        {/* Project Image */}
        <div className="relative h-[230px] w-full overflow-hidden rounded-2xl">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />

          <div className="card card-img_hover absolute inset-0 m-3 flex justify-end">
            <div
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <div className="relative h-1/2 w-1/2">
                <Image
                  src={github}
                  fill
                  alt="Github Logo"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="mt-5">
          <h3 className="text-2xl font-bold text-white">{name}</h3>
          <p className="mt-2 text-sm text-secondary">{description}</p>
        </div>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={cn("text-sm", tag.color)}>
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
