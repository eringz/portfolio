"use client"

import { motion } from "framer-motion";
import { projects } from "@/data";
import type { Project } from "@/utils/createProject";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link2 } from "lucide-react";
import { BsGithub } from "react-icons/bs";

export default function ProjectsPage () {
    const [active, setActive] = useState<Project | null>(projects[0]);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ 
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: 'easeIn',
                },
            }}
            className="relative min-h-screen w-full  text-white px-6 py-16"
        >
            {/** Background futuristic glow */}
            <div
                className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(28,28,34,0.15),transparent_70%)]"
            />

            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center text-4xl md:text-5xl font-bold mb-12"
            >
                My Futuristic Projects
            </motion.h1> 

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/** LEFT: Project selector */}
                <motion.div
                    initial={{ opacity: 0, x: -40}}
                    animate={{ opacity: 1, x: 0}}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4"
                >
                    {projects.map((project) => (
                        <button
                            key={project.num}
                            onClick={() => setActive(project)}
                            className={`p-4 rounded-2xl border transition-all duration-300 text-left ${active?.num === project.num 
                                ? "bg-white/10 border-blue-500 shadow-lg shadow-blue-500/30 scale-[1.02]"
                                : "bg-white/5 border-white/10 hover:bg-white/10"
                            }`}
                        >
                            <h2 className="text-lg font-semibold">{project.title}</h2>
                            <p className="test-sm text-gray-400 line-clamp-2">{project.background}</p>
                        </button>
                    ))}
                </motion.div>

                {/** RIGHT: Active project details */}
                {active && (
                    <motion.div
                        key={active.num}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 space-y-6"
                    >
                        {/** Image */}
                        <div
                            className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl"
                        >
                            <img 
                                src={active.image}
                                alt={active.title}
                                className="w-full h-64 object-cover md:h-80 hover:scale-105 transition-transform duration-500"
                            />
                            <div 
                                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                            />
                            <div className="absolute bottom-4 left-4 flex gap-4">
                                {active.github && (
                                    <a
                                        href={active.github}
                                        target="_blank"
                                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                                    >
                                        <BsGithub size={20} />
                                    </a>
                                )}
                                {active.live && (
                                    <a
                                        href={active.live}
                                        target="_blank"
                                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                                    >
                                        <Link2 size={20} />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/** Solution */}
                        <p className="text-gray-300 leading-relaxed">{active.solution}</p>

                        {/** Accordion for details */}
                        <Accordion 
                            type="single" 
                            collapsible 
                            className="w-full space-y-2"
                        >
                            <AccordionItem value="features">
                                <AccordionTrigger>✨ Key Features</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                                        {active.features.map((feature, i) => (
                                            <li key={i}>
                                                <span className="font-semibold">{feature.name}:</span> {feature.description}
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>  
                            <AccordionItem value="targets">
                                <AccordionTrigger>Target Users</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                                        {active.targets.map((target, i) => (
                                            <li key={i}> {target}</li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="impact">
                                <AccordionTrigger>Impact</AccordionTrigger>
                                <AccordionContent>
                                    <ul className="list-disc pl-6 space-y-1 text-gray-300">
                                        {active.impacts.map((impact, i) => (
                                            <li key={i}> {impact}</li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </motion.div>
                )}
                
            </div>
        </motion.section>
    );
}