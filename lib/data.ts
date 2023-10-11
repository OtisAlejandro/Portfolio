import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import galatea from "@/public/galatea.png";
import blogapp from "@/public/blogapp.png";
import sushimeister from "@/public/sushimeister.png";

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

export const projectsData = [
  {
    title: "Galatea",
    description: "I have worked as a website developer with PygmalionAI for 6 months, helping develop their chat platform.",
    tags: ["React", "Vite", "TailwindCSS", "Node.js", "Docker"],
    imageUrl: galatea,
  },
  {
    title: "BlogApp",
    description: "Full-stack blogging application where users can comment on posts, filter by category, and view profiles.",
    tags: ["React", "Next.js", "Prisma", "Pagination", "Node.js"],
    imageUrl: blogapp,
  },
  {
    title: "Sushimeister",
    description: "A diverse, colourful website built to advertise food and delivery service to viewers and customers alike.",
    tags: ["HTML", "CSS"],
    imageUrl: sushimeister,
  },
] as const;