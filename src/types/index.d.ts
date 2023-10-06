export type Direction = "left" | "right" | "up" | "down";

export interface Experience {
  title: string;
  company_name: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
  skills?: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: StaticImageData;
  source_code_link: string;
}

export interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export interface Skill {
  name: string;
  image: string;
}

export interface SKillCategory {
  title: string;
  skills: Skill[];
}

export interface Education {
  icon: StaticImageData;
  iconBg: string;
  school: string;
  date: string;
  grade: string;
  desc: string;
  degree: string;
}
