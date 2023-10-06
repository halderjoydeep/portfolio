"use client";
import { roles } from "@/lib/constants";

import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(
  () => import("react-animated-cursor").then((data) => data.default),
  {
    ssr: false,
  },
);

const TypeWriter = dynamic(
  () => import("typewriter-effect").then((data) => data.default),
  {
    ssr: false,
  },
);

const TypewriterComp: React.FC = () => {
  return (
    <>
      <AnimatedCursor />
      <TypeWriter options={{ strings: roles, autoStart: true, loop: true }} />
    </>
  );
};

export default TypewriterComp;
