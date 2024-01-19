import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { BiCodeAlt } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import cms from "@/public/cms.png";
import blog from "@/public/blog.png";
import netflix from "@/public/netflix.png";

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
    title: "Graduated From Sies College",
    location: "Sion, Mumbai",
    description:
      "In 2019, I successfully graduated from SIES College, located in Sion, Mumbai, with a cumulative grade point average (CGPA) of 6. The experience enriched my academic journey, providing a comprehensive education and fostering personal growth.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Web Developer",
    location: "Wadala, Mumbai",
    description:
      "In my web developer internship, I focused on front-end technologies, creating responsive user interfaces using HTML, CSS, and Bootstrap. I incorporated dynamic elements using JavaScript and jQuery, enhancing the overall user experience. This experience strengthened my proficiency in building modern and visually appealing web interfaces.",
    icon: React.createElement(CgWebsite),
    date: "2021 - 2022",
  },
  {
    title: "Front-End Developer",
    location: "Wadala, Mumbai",
    description:
      "As a frontend developer, I crafted engaging user interfaces using HTML, CSS, Sass, and Bootstrap, ensuring a seamless and visually appealing experience. Leveraging JavaScript and jQuery, I added dynamic elements to enhance interactivity, contributing to the creation of modern and user-friendly web applications. Learn tools like GitHub and how to deploy a website with GitHub repository.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Software Developer",
    location: "Wadala, Mumbai",
    description:
      "I'm now a full-stack developer working as a Full-time. My stack includes React, Next.js, Node.js, TypeScript, Tailwind, Prisma and MongoDB, MySQL. I'm open to full-time opportunities.",
    icon: React.createElement(BiCodeAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CMS(Content Management System)",
    description:
      "Built a dynamic Content Management System (CMS) using the MERN stack. The CMS enables seamless content creation, editing, and retrieval.",
    tags: ["React", "MySQL", "Node", "Express","Primereact UI"],
    imageUrl: cms,
  },
  {
    title: "Blog App",
    description:
      "Developed a sleek blog app using Next.js. The app features dynamic server-side content rendering, SEO, efficient navigation, and a responsive design.",
    tags: ["Next.js", "MongoDB", "CSS", "Auth.js", "Prisma"],
    imageUrl: blog,
  },
  {
    title: "Netflix",
    description:
      "Engineered a Netflix-inspired streaming platform using React.js, offering a visually immersive user interface. Leveraged React's component-based architecture for modular, ensuring an engaging and responsive viewing experience.",
    tags: ["React", "Redux", "firebase"],
    imageUrl: netflix,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SCSS",
  "JQuery",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind",
  "Bootstrap",
  "Prisma",
  "MongoDB",
  "Redux",
  "MySQL",
  "Sequelize",
  "Express",
  "Framer Motion",
] as const;
