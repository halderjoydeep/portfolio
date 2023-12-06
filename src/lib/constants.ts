import {
  backend,
  blackCircle,
  blender,
  c,
  chatMe,
  creator,
  css,
  expense,
  figma,
  firebase,
  git,
  github,
  harini,
  html,
  javascript,
  linkedin,
  mobile,
  mongodb,
  mysql,
  next,
  nitSikkim,
  nodejs,
  photoshop,
  postman,
  python,
  reactjs,
  redditClone,
  redis,
  redux,
  sanity,
  srikanth,
  tailwind,
  tensorFlow,
  typescript,
  universityOfManitoba,
  upstash,
  valuelabs,
  vsCode,
  web,
  whiteCircle,
} from "@/assets";

import {
  Education,
  Experience,
  Project,
  SKillCategory,
  Testimonial,
} from "@/types";
import { Metadata } from "next";

const firstName = "Joydeep";
const lastName = "Halder";
const email = "halderjoydeep1997@gmail.com";

const githubLink = "https://github.com/halderjoydeep";
export const roles = ["Full Stack Developer", "App Developer", "Programmer"];
const resumeLink =
  "https://drive.google.com/file/d/1-BhU7mbxGqVvMRSlmBl2TYD_DWNTYhg3/view?usp=sharing";

const introduction =
  "I'm a skilled software developer with experience in JavaScript and TypeScript, and professional expertise in frameworks like React, Next.js, Node.js, and React Native. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!";

const projectSectionSummary =
  "Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Data Science Enthusiast",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company_name: "Valuelabs, India",
    icon: valuelabs,
    iconBg: "#383E56",
    date: "September 2020 - Present",
    points: [
      "Developing and maintaining web applications using Next.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "NextAuth",
      "Redux Toolkit",
      "Git",
      "AWS Codecommit",
    ],
  },
  {
    title: "Deep Learning Research Intern",
    company_name: "University of Manitoba, Canada",
    icon: universityOfManitoba,
    iconBg: "#383E56",
    date: "May 2019 - August 2019",
    points: [
      "Designing a neural network model to detect Mild Cognitive Impairment(MCI).",
      "Collaborating with health instituitions and other researchers to create accurate model.",
      "Developing android lock picking game to get the data inputs from patients.",
      "Developing android application to predict proper wound dressing method.",
    ],
    skills: ["Python", "Tensorflow", "Java", "Android Studio"],
  },
];

const educations: Education[] = [
  {
    icon: nitSikkim,
    iconBg: "#E6DEDD",
    school: "National Institute of Technology Sikkim",
    degree: "BTech, CSE",
    date: "2016 - 2020",
    grade: "8.56 CGPA",
    desc: "I have graduated from this prestigious insitute of nation where I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Computer Organizations, Data mining, Cryptography, AI and many more.",
  },
  {
    icon: whiteCircle,
    iconBg: "#383E56",
    school: "A.C. Institution",
    degree: "WBCHSE(XII), PCMB",
    date: "2013 - 2016",
    grade: "93.2%",
    desc: "I have completed my class 12 in this renowned school of my district where I took physics, chemistry, math and biology along with literatures.",
  },
  {
    icon: blackCircle,
    iconBg: "#E6DEDD",
    school: "L.M.S.M High School",
    degree: "WBBSE(X)",
    date: "2008 - 2013",
    grade: "95%",
    desc: "I spent my childhood here and completed class 10 in this school. I achieved district 3rd place in board examination from this school.",
  },
];

const testimonials: Testimonial[] = [
  {
    testimonial:
      "Lucky enough to work under Joy as Frontend Developer, a man of inspiration, incredible talent and guidance who embodies generosity.",
    name: "Srikanth",
    designation: "SDE",
    company: "Valuelabs",
    image: srikanth.src,
  },
  {
    testimonial:
      "Knowledgeable as an instructor and cordial as a colleague. Joydeep consistently goes above and beyond, and his recommendations for the client altered the workflow significantly.",
    name: "Harini G.",
    designation: "SDE",
    company: "Valuelabs",
    image: harini.src,
  },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Joydeep does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
];

const projects: Project[] = [
  {
    name: "Chat Me",
    description:
      "Web-based performant realtime chat application that allows users to send, receive and accept friend request by utilizing the power of OAuth2.0 like Google.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "redis",
        color: "blue-text-gradient",
      },
      {
        name: "upstash",
        color: "green-text-gradient",
      },
      {
        name: "nextauth",
        color: "pink-text-gradient",
      },
      {
        name: "pusher",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
      {
        name: "react hook form",
        color: "blue-text-gradient",
      },
      {
        name: "zod",
        color: "green-text-gradient",
      },
    ],
    image: chatMe,
    source_code_link: "https://github.com/halderjoydeep/NextJs-ChatMe",
  },
  {
    name: "Reddit Clone",
    description:
      "Web application inspired by reddit where users can create, join, leave communities and post, comment, upvote or downvote posts as well as comments.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "nextauth",
        color: "pink-text-gradient",
      },
      {
        name: "tanstack",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
      {
        name: "zod",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "green-text-gradient",
      },
      {
        name: "mantine",
        color: "pink-text-gradient",
      },
    ],
    image: redditClone,
    source_code_link: "https://github.com/halderjoydeep/NextJS-Reddit",
  },
  {
    name: "Expense Tracker",
    description:
      "Cross platform mobile based simple optimized expense tracker that allows users to add, edit and delete expenses. It gives users two tabs of recent and all expenses.",
    tags: [
      {
        name: "react native",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "nativewind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "blue-text-gradient",
      },
      {
        name: "react navigation",
        color: "green-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "expo",
        color: "blue-text-gradient",
      },
    ],
    image: expense,
    source_code_link:
      "https://github.com/halderjoydeep/ReactNative-ExpenseTracker",
  },
];

const skills: SKillCategory[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image: reactjs.src,
      },
      {
        name: "Redux",
        image: redux.src,
      },
      {
        name: "Next Js",
        image: next,
      },
      {
        name: "HTML",
        image: html.src,
      },
      {
        name: "CSS",
        image: css.src,
      },
      {
        name: "JavaScript",
        image: javascript.src,
      },
      {
        name: "Typescript",
        image: typescript.src,
      },
      {
        name: "React Native",
        image: reactjs.src,
      },
      {
        name: "Tailwind",
        image: tailwind.src,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: nodejs.src,
      },
      {
        name: "Express Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEX////q6uqgoaEZGhtzc3SSk5Ourq5hYmLHx8f09PVOTk+7u7vf39+DhITT09M3ODgiPZ4kAAAAxElEQVR4Ac2OMQgBARSGv6sDQfbSKaWsHsgV6vZS9lK3F9lL2ctsvcmm7GWfyF5XNhvTbef+yT7x1ft7/f3/6/HHOC3r1gnmQLhGamYjDj5U7ALk7UbD4tp4T2EA4EnDFeGMxQygdQWqEwp+OQsBkXrlAU76nAA4Y2mlB2drotVMDMHN5mtMwbMYVeQjNsEKkaJcm3wv10fcl4Dr8zgSnQB2L/RYKdrKA3LW0etun6yFCMwsyTK6qzrFu733xbQOeAk/4gMf6S1GJRc9sQAAAABJRU5ErkJggg==",
      },
      {
        name: "Prisma",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEjklEQVR4Ab2XA5ClQQyEz7Zt27Zt27Zt27Zt27Zt2/f0T1/nr7q3el501XdYpSeTSbLBPBWAouQSMZHLpDgJ5i7yhyekJO8OnL6EbmNn4eDZS1BKfZCPB4WBUGTTvScvkLhEXUTKVREJi9XB4xevQc0kwQPbQHWzxWKu32uUBLcybPYyKIWvABIFpoEY5O6WgycRLW9lPXCUPJX57ypIUbYR3n36qgAMCywDwcnYz99+qCzVWllP3mrwJMxcvRWRc1fCuEVrpRbeAogTGAayK6V+DZ6xxEfqF27cje8/f0FMZazSQv6tAHQLaANhyOHLtx8gTqEa1uDR8lXBlTsPIJq6fJOehXnrd4J6SKIEpIFmBqPJUqFdf++n5yuoxxP/BsX7/6LXQfaabfHnr0EBaBtQBhKRF8u27mPBVfJhoHSr3uCLgEgpYOTclYjCLGzcfxzUFRLOvwZCkHkv331A2gpNfAQXek6YC+96+vodEhSrjUKNusJoMouzuv41UFTTtD8dRk73E1xYt+cIvItFih7j5yAqn+a+UxdAnSKhPTUQgVw4duEaYhao5id49HxVcevhU/jW/acvEadwDVTuMBBMghlAKU8N9Pz916AVbtzN5ulTlGmI33/+wrc0TaHZgPF6czp+8Tqo/SSkuwZSKuDj5GUb+LT8Bhcq8YQWTYMN8Wk+1LPWuO9Y8AqNAHK7YyAUWfvoxWvrsLHFkJlLYU9irFa3YYhFE1dphlpLQrhqoJqZd9eo7xi7waXhbDt8Co505NxV/RraDZ8qxfkHQGZXDEQnt7cfOW0dNraIkb8aHj5/DUfiIVC+bT8kKFobkk1qtq1R7XvYjPzy/YfKXrONBLJL+krN8ddghDNtPXRSmhef5lzJwjepLUcGkingx9BZyxwGF+p0H65XuzOJSWlKSUrWw9uPn0GNd2SgqsFoVOkqNnNqQMauq1q7+7BeM6PnrwL1lsS1ZyC3xWIx1WT1MojDApQu56pkWMmoTslBJbsEgCH2DIQie6S7xWfh2DMQq2B1vHr3EW6II3qHPqTmrNsB6gmJau8VpFcKXyYuWS8ntWkgR622HDQmuCGe/LuegSzVW+HXn78KQENHfaAv57lWrFkPmwaass3K0HFFFoumF9/KHQeQqHgdvTs+efUW1CBHBiKQU2ev3kZs6/ZjBdNXboYjcXHB9XuP9Q2pQtv+iFekpmRTv7p2I6ZCNmoAZZ3NgryaUr/Zbn0Elw34KKej7+Hz7cdPHD53Rd8PctVux0lZRb9zaeX1eo7Ewk278eTlG0iRS0mQUM4MBCdjvv74pXLWamc1IBl5//mrnALP37zH8u37IS07WekG1vVc7rnr2NnYefSMVL0YNMh8ImNIIRLS1XEchdw8eOaSzH7dgJys48gZKNmil5iR1Mrf+v8nLF6HS7cfyBVIi/oKYC/pRDKQ0J5uRGU42QztR0zzcQ2yCzTpNw4rth+QTPy/16dkEalOYvudfp7vhDO+fP+ppJP1n7pQv+tv3P2Vwm8AF8hwUoBECKzfjiOSyeQz+U62k3YkubWY/ME/P7eQtWzEi7AAAAAASUVORK5CYII=",
      },
      {
        name: "Redis",
        image: redis,
      },
      {
        name: "Upstash",
        image: upstash,
      },
      {
        name: "MySQL",
        image: mysql,
      },
      {
        name: "MongoDB",
        image: mongodb.src,
      },
      {
        name: "Sanity CMS",
        image: sanity.src,
      },
      {
        name: "Firebase",
        image: firebase,
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        image: git.src,
      },
      {
        name: "GitHub",
        image: github,
      },
      {
        name: "VS Code",
        image: vsCode.src,
      },
      {
        name: "Postman",
        image: postman.src,
      },

      {
        name: "Figma",
        image: figma.src,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "C++",
        image: c.src,
      },
      {
        name: "Python",
        image: python,
      },
      {
        name: "Tensorflow",
        image: tensorFlow.src,
      },

      {
        name: "Photoshop",
        image: photoshop.src,
      },

      {
        name: "Blender",
        image: blender.src,
      },
    ],
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: linkedin,
    url: "https://linkedin.com/in/joydeep-halder",
  },
  {
    name: "Github",
    icon: github,
    url: "https://github.com/halderjoydeep",
  },
];

const metadataInfo: Metadata = {
  metadataBase: new URL("https://joydeephalder.in/"),
  title: "Joydeep Halder - Portfolio - Software Developer",
  description:
    "Experienced software developer skilled in React, Next.js, JavaScript, TypeScript, Node.js, and more. Let's work together to bring your ideas to life!",
  generator: "Next.js",
  applicationName: "Portfolio of Joydeep Halder",
  authors: [
    { name: "Joydeep Halder", url: "https://joydeephalder.in/" },
  ],
  colorScheme: "dark",
  creator: "Joydeep Halder",
  keywords: [
    "software development",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "React Native",
    "frontend",
    "backend",
    "web development",
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Figma",
    "C++",
    "Python",
    "TensorFlow",
    "Photoshop",
    "Blender",
    "Redux",
    "Tailwind",
  ],
  openGraph: {
    title: "Portfolio of Joydeep Halder - Software Developer",
    description:
      "Experienced software developer skilled in JavaScript, TypeScript, React, Next.js, Node.js, and more. Let's work together to bring your ideas to life!",
    url: "https://joydeephalder.in/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export {
  educations,
  email,
  experiences,
  firstName,
  githubLink,
  introduction,
  lastName,
  metadataInfo,
  navLinks,
  projectSectionSummary,
  projects,
  resumeLink,
  services,
  skills,
  socialLinks,
  technologies,
  testimonials,
};
