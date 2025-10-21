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
      className="bg- white relative min-h-screen w-full text-white px-6 py-16 bg-gradient-to-br from-[#1C1C21] via-[#202A29] to-[#1C1C21]"
    >
      <motion.div
        initial={{ opacity: 0, width: 0, }}
        animate={{ opacity: 1, width: "110%", }}
        transition={{ duration: 10, ease: "easeInOut" }}
        className="max-w-[500px] whitespace-nowrap overflow-hidden"
      >
        Projects Page Restructure Comming Soon....
        <ul>
          {projects.map((project) => {
            return <li key={project.num}>{project.num}. {project.title}</li>
          })}
        </ul>
      </motion.div>

    
    </motion.section>
  );
}
