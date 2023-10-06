import {
  About,
  Contact,
  Educations,
  Experience,
  Footer,
  Hero,
  Navbar,
  Projects,
  Skills,
  StarsCanvas,
  Testimonials,
} from "@/components";

export default function Home() {
  return (
    <div className="relative z-0 overflow-hidden bg-primary">
      <div className="">
        <Navbar />
        <Hero />
      </div>

      <About />
      <Skills />
      <Experience />
      <Projects />
      <Educations />
      <Testimonials />

      <div className="relative z-0">
        <Contact />
        <Footer />
        <StarsCanvas />
      </div>
    </div>
  );
}
