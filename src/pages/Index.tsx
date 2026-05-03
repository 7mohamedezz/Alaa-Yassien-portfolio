import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Project } from "@/components/portfolio/Project";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => (
  <main className="min-h-screen">
    <Navbar />
    <Hero />
    <About />
    <Education />
    <Experience />
    <Project />
    <Contact />
  </main>
);

export default Index;
