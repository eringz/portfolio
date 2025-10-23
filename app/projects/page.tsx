"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tech: string[];
  // image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "QuickChat Realtime App",
    description:
      "A realtime messaging app with socket.io and cloud media uploads.",
    category: "Web",
    tech: ["React", "Express", "MongoDB", "Socket.io"],
    // image: "/assets/quick-chat.png",
    liveUrl: "https://quick-chat-f5ioh.sevalla.app/",
    githubUrl: "https://github.com/eringz/quick-chat",
  },
  {
    id: 2,
    title: "BioPro Automation Script",
    description:
      "Bio Pro is a smart attendance system that leverages Face Recognition (mock-up via laptop camera) and is designed to evolve with Fingerprint/IoT hardware integration in the future. It provides an end-to-end solution from attendance logging to payroll-ready reporting",
    category: "Automation",
    tech: ["Next.js", "Node.js", "TypeScript"],
    // image: "/assets/quick-chat.png",
    liveUrl: "https://bio-pro.vercel.app/",
    githubUrl: "https://github.com/eringz/bio-pro",
  },
  // {
  //   id: 3,
  //   title: "VisionFix E-commerce Automation",
  //   description:
  //     "An AI-driven e-commerce solution that automates personalization, inventory sync, and analytics.",
  //   category: "Web",
  //   tech: ["Next.js", "TypeScript", "Tailwind", "Node.js"],
  //   image: "/images/visionfix.png",
  //   liveUrl: "https://visionfix.vercel.app",
  //   githubUrl: "https://github.com/ron/visionfix",
  // },
  
  
  // {
  //   id: 4,
  //   title: "NextJob Career Finder",
  //   description:
  //     "A job search platform that matches users to jobs using skill-based filters.",
  //   category: "Web",
  //   tech: ["Next.js", "MySQL", "Laravel", "Tailwind"],
  //   image: "/images/nextjob.png",
  //   liveUrl: "https://nextjob.vercel.app",
  // },
];

const categories = ["All", "Web", "API", "Automation"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1C1C21] via-[#202A29] to-[#1C1C21] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          My Projects
        </motion.h1>
        <motion.p
          initial={{width:0, opacity:0}}
          animate={{width:"100%", opacity:1}}
          transition={{delay:1, duration: 3, ease: "easeInOut"}}
          className="text-gray-400 text-lg whitespace-nowrap overflow-hidden"
        >
          A collection of my latest works — web apps, automation scripts, and
          more.
        </motion.p>
      </div>

      {/* Filter Bar */}
      <div className="flex bg-transparent justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={` px-4 py-2 rounded-full border transition-all ${selectedCategory === cat
              ? "bg-transparent border-blue-600"
              : "border-slate-600 hover:bg-blue-800"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="from-[#1B1B21] via-[#002A29] to-[#FF1C21] rounded-2xl shadow-lg overflow-hidden border border-slate-700"
          >
            {/* <div className="flex justify-center items-center h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-fill hover:scale-105 transition-transform duration-500"
              />
            </div> */}
            <div className="p-5 flex flex-col justify-between h-56">
              <div>
                <h2 className="text-xl font-semibold mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-slate-700 text-xs px-2 py-1 rounded-full text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3 mt-auto">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-1 text-sm hover:text-blue-400"
                  >
                    <Globe size={16} /> Live
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-1 text-sm hover:text-blue-400"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}
