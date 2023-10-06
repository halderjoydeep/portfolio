"use client";

import { Experience } from "@/types";
import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard: React.FC<Experience> = ({ ...experience }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative flex h-[60%] w-[60%] items-center justify-center">
            <Image
              src={experience.icon}
              alt={experience.company_name}
              className="object-contain"
            />
          </div>
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
        <p
          className="text-[16px] font-semibold text-secondary"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="ml-5 mt-5 list-disc space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="pl-1 text-[14px] tracking-wider text-white-100"
          >
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-col">
        <h4 className="font-medium">Skills: </h4>
        <div className="flex flex-wrap gap-3 pl-1 ">
          {experience.skills?.map((skill) => (
            <span key={skill}>
              <span className="mr-3">•</span>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
