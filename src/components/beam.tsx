"use client";
import { TracingBeam } from "./ui/tracing-beam";
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export function Beam() {
  return (
    <TracingBeam className="px-0">
      <About />
      <Services />
      <Portfolio />
      <Skills />
      <Contact />
    </TracingBeam>
  );
}

export default Beam;