"use client";

import { motion } from "framer-motion";
import { projects } from "@/data";

export default function ProjectsPage() {


  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.6,
          duration: 0.5,
          ease: "easeInOut",
        },
      }}
      className="carousel relative min-h-screen w-full text-white px-6 py-16 bg-gradient-to-br from-[#1C1C21] via-[#202A29] to-[#1C1C21]"
    >
      <div id="slide1" className="hidden w-0">
        <h1>Slide1</h1>
        <div>
          <a href="#slide3" className="btn btn-circle">previous</a>
          <a href="#slide2" className="btn btn-circle">next</a>
        </div>
      </div>
      <div id="slide2" className="hidden">
        <h1>Slide 2</h1>
        <div>
          <a href="#slide1" className="btn btn-circle">previous</a>
          <a href="#slide3" className="btn btn-circle">next</a>
        </div>
      </div>
      <div id="slide3">
        <h1>Slide 3</h1>
        <div>
          <a href="#slide2" className="btn btn-circle">previous</a>
          <a href="#slide1" className="btn btn-circle">next</a>
        </div>
      </div>

    </motion.section>
  );
}
