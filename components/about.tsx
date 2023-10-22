"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Experienced Software Engineer passionate about creating scalable web applications using JavaScript, TypeScript, and React. Specializing in server-side and client-side rendering, I design high-performing applications, integrating Redux Toolkit and state management for seamless interactivity. Previous work at Brain Station 23 led to significant sales growth through enterprise-level web applications. I also contribute to innovative personal projects and hold a Bachelor's degree in Computer Science and Engineering.
      </p>

    </motion.section>
  );
}
