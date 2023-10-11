"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
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
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        During the lockdown of <span className="font-medium">2020</span>, my
        passion for programming really took off. I had years of prior experience
        programming, but something felt different... this time, I wanted to make
        a career out of it. Pulling up YouTube and Amazon, I ordered textbooks
        and watched videos, slowly teaching myself{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">Eventually</span>, after making several
        projects of my own, I started doing freelance contract work, where I
        found a position at <span className="underline">PygmalionAI</span>,
        helping develop their website and platform. Since then, I've also had
        many more opportunities and am currently a member of Nous Research, and
        I also do contract work for other Tech & AI-oriented companies. My core
        stack is{" "}
        <span className="font-medium">React, Next.js, Node.js, and Prisma</span>
        . I am also familiar with MongoDB and most SQL libraries, and also have
        a few years of experience developing Discord bots as a service. Being
        very driven and work-oriented, I always try to find a way to solve my
        problem, or use my resources to guide me. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="font-bold">When I'm not coding</span>, I like to spend
        time with my family, play video games, and read books. I am also a{" "}
        <span className="font-medium">classical pianist of 13 years</span>, and
        love to perform for family and friends.
      </p>
    </motion.section>
  );
}
