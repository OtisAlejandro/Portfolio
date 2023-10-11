import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import galatea from "@/public/galatea.png";
import blogapp from "@/public/blogapp.png";
import sushimeister from "@/public/sushimeister.png";
import { BsDiscord } from "react-icons/bs";

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

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

export const experiencesData = [
  {
    title: "Discord Bot Developer",
    location: "Remote",
    description: "I developed and distributed advanced Discord bots for both clients and personal use, utilizing advanced API calls and MongoDB integration.",
    icon: React.createElement(BsDiscord),
    date: "2021-2022"
  },
  {
    title: "Software Developer",
    location: "Spring, TX / Remote",
    description: "I am working part-time with PygmalionAI, helping to deliver a sleek, smooth, and advanced website for their users using React, Supabase, and Node.js.",
    icon: React.createElement(CgWorkAlt),
    date: "March 2023 - Present"
  },
  {
    title: "Full-Stack Software & ML Engineer",
    location: "Remote",
    description: "I have supervised and assisted in the deployment of several of my own fullstack projects, as well as training Diffusion models and developing my own full-stack solutions for clients, partaking in AI research groups and events along the way.",
    icon: React.createElement(FaReact),
    date: "2023 - Present"
  },
] as const;