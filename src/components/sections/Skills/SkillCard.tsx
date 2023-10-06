"use client";

import { SKillCategory } from "@/types";
import Image from "next/image";

interface SkillCardProps extends SKillCategory {
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ index, skills, title }) => {
  return (
    <div className="w-full max-w-[330px] rounded-2xl border border-accent bg-primary px-9 py-3 shadow-card md:max-w-[400px] md:py-5 lg:max-w-[500px]">
      <h3 className="mb-5 text-center text-2xl font-medium text-secondary">
        {title}
      </h3>
      <ul className="mb-5 flex list-none flex-wrap justify-center gap-3">
        {skills.map((skill, index) => (
          <li
            key={`skill-${index}`}
            className="flex items-center justify-center gap-2 rounded-xl  border border-secondary px-4 py-2 text-sm font-normal text-secondary md:py-3 md:text-base "
          >
            <div className="relative h-6 w-6">
              <Image
                src={skill.image}
                fill
                alt={`${skill.name} image`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
