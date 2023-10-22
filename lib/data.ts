import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Abraimg from "@/public/abra.png";
import TsImg from "@/public/Ts.png";
import RstImg from "@/public/khabokoi.png"
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer",
    location: "Brain Station 23, Bangladesh",
    description:"Spearheaded the architecture and development of multiple enterprise-grade front-end web applications for global\n" +
        "clients, utilizing Vue.js, React.js, and AWS Amplify. Enhanced application responsiveness, resulting in a 40%\n" +
        "improvement in page load times, leading to higher user satisfaction and increased engagement.",

    icon: React.createElement(CgWorkAlt),
    date: "Jul 2022 - Running",
  },
  {
    title: "Associate Software Engineer",
    location: "Brain Station 23, Bangladesh",
    description:
      "Pioneered the creation of reusable and extensible components, resulting in a 40% reduction in development time for\n" +
        "subsequent projects. These components adhered to best practices and robust design patterns, streamlining\n" +
        "development processes.",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2021 - Jun 2022",
  },
  {
    title: "Associate Software Engineer",
    location: "Neural Semiconductor ltd, Bangladesh",
    description:
      "Developed and implemented enterprise-level applications, such as an HRM management system and a Trade-Off\n" +
        "Calculator, utilizing technologies like React, Vue, Redux, and Vuex. These applications streamlined various\n" +
        "business processes, resulting in a 15% increase in operational efficiency",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2020 - Nov 2021",
  },
  {
    title: "Graduate on CSE",
    location: "East West University",
    description:"Obtained my under grade Degree on computer science and engineering with CGPA: 3.43/4.00. Completed  my thesis in data science field, titled as Optimizing K-means Clustering with Particle Swarm Optimization (PSO)",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2016 - Jan 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Abra",
    description:"An IOT device management and monitoring platform\n"+"Designed and implemented a scalable front-end architecture for the project using Vue 3.js, providing a solid\n" +
        "foundation for future extensions.",
    tags: ["Vue js", "javascript", "SCSS", "Vuex", "Aws Amplify"],
    imageUrl: Abraimg,
  },
  {
    title: "Task Station 23",
    description:
      "Led the front-end development efforts of a productivity management tool using Next.js, demonstrating proficiency\n" +
        "in modern web technologies.",
    tags: ["React", "TypeScript", "Next.js", "SCSS", "Redux Tool kit"],
    imageUrl: TsImg,
  },
  {
    title: "Restaurants Around Me",
    description:
      "Developed a user-friendly front-end interface using React.js with TypeScript template, demonstrating proficiency in\n" +
        "modern web technologies.",
    tags: ["React","TypeScript", "Redux", "Google Map", "Ant UI"],
    imageUrl: RstImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vue Js",
  "Pinia",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "GraphQL",
  "AWS Amplify",
  "Express",
  "PostgreSQL",
  "Nest js",
  "Framer Motion",
] as const;
