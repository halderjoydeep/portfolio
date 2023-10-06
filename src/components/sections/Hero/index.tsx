import { profile } from "@/assets";
import { firstName, lastName, resumeLink } from "@/lib/constants";
import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import BackgroundAnimation from "./BackgroundAnimation";
import ScrollGif from "./ScrollGif";
import TypewriterComp from "./TypewriterComp";

const Hero: React.FC = () => {
  return (
    <section className="relative mx-auto mb-12 h-screen w-full pt-[120px] sm:mb-24 md:mb-0">
      <div
        className={cn(
          "absolute inset-0 mx-auto grid max-w-7xl grid-cols-1 items-center justify-between gap-5 md:grid-cols-2 ",
          styles.paddingX,
        )}
      >
        {/* Left Side */}
        <div className="order-2 flex justify-center gap-3 md:order-1">
          {/* Vertical Line */}
          <div className="hidden flex-col items-center justify-center sm:flex">
            <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
            <div className="violet-gradient h-40 w-1 md:h-80" />
          </div>

          {/* Bio */}
          <div className="text-center md:text-start">
            <h1 className={styles.heroHeadText}>
              Hi, I am <br />
              <span className="text-[#915EFF]">{firstName}</span>
            </h1>

            <div className={cn(styles.heroSubText, "mt-2 text-white-100")}>
              <span>I am a</span>
              <span>
                <TypewriterComp />
              </span>
            </div>

            <Link
              href={resumeLink}
              className="resume-button-gradient mt-6 inline-block cursor-pointer rounded-2xl bg-accent  px-6 py-3 font-semibold tracking-wider text-white shadow-lg transition-all hover:scale-105"
              target="_blank"
            >
              Check Resume
            </Link>
          </div>
        </div>

        {/* Right side */}
        <div className="relative order-1 mt-[120px] w-full md:order-2 md:mt-0">
          {/* Profile Picture */}
          <div className="relative mx-auto  flex aspect-square max-h-[280px] w-full max-w-[280px] items-center justify-center rounded-full md:max-h-[400px] md:max-w-[400px]">
            <BackgroundAnimation />
            <Image
              src={profile}
              alt={`${firstName} ${lastName}'s profile picture`}
              fill
              className="rounded-full border-2 border-accent object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>

      <ScrollGif />
    </section>
  );
};

export default Hero;
