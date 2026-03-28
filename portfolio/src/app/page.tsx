"use client";

import NavBar from "@/components/ui/NavBar";
import Hero from "@/components/sections/Hero";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Achievements from "@/components/sections/Achievements";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <NavBar />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Achievements />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
