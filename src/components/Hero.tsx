import { styles } from "@/lib/styles";
import { cn } from "@/lib/utils";
import { ComputersCanvas, ScrollGif } from ".";

const Hero: React.FC = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={cn(
          "absolute inset-0 top-[120px] mx-auto flex max-w-7xl flex-row items-start gap-5",
          styles.paddingX,
        )}
      >
        {/* Vertical Line */}
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        {/* Bio */}
        <div>
          <h1 className={styles.heroHeadText}>
            Hi, I&apos;m <span className="text-[#915EFF]">Joydeep</span>
          </h1>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100")}>
            I develop fullstack <br className="hidden sm:block" /> web and
            mobile applications
          </p>
        </div>

        {/* Computer Canvas */}
      </div>
      <ComputersCanvas />
      <ScrollGif />
    </section>
  );
};

export default Hero;
