import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "@/components";

export default function Home() {
  return (
    <div className="bg-primary relative z-0">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Hero />
      </div>

      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
