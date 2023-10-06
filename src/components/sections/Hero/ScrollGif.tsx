import Link from "next/link";
import AnimatedBall from "./AnimatedBall";

const ScrollGif: React.FC = () => {
  return (
    <div className="absolute bottom-32 flex w-full items-center justify-center xs:bottom-10">
      <Link href="#about">
        <div className="hidden h-16 w-9 justify-center rounded-3xl border-4 border-secondary p-2 md:flex">
          <AnimatedBall />
        </div>
      </Link>
    </div>
  );
};

export default ScrollGif;
