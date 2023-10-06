"use client";

import { Education } from "@/types";
import Image from "next/image";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EducationCard: React.FC<Education> = ({ ...education }) => {
  return (
    <VerticalTimelineElement
      visible={true}
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={education.date}
      iconStyle={{ background: education.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative flex h-[60%] w-[60%] items-center justify-center">
            <Image
              src={education.icon}
              alt={education.school}
              className="object-contain"
            />
          </div>
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold text-white">{education.school}</h3>
        <p
          className="text-[16px] font-semibold text-secondary"
          style={{ margin: 0 }}
        >
          {education.degree}, {education.grade}
        </p>
      </div>

      <p className="mt-5 text-sm text-secondary">{education.desc}</p>
    </VerticalTimelineElement>
  );
};

export default EducationCard;
