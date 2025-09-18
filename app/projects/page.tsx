"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import { 
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger, 
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

type Project = {
    num: string;
    category: string;
    title: string;
    description: string;
    stack: { name: string }[];
    image: string;
    live: string;
    github: string;
};

type Swiper = {
    activeIndex: number;
};

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'Task Tracker / To-Do List',
        description: 'A simple yet powerful to-do list app made with React and Zustand. Users can add, edit, delete, and mark tasks as complete. All tasks are saved using localStorage for persistent user data. Designed with a sleek, minimalist UI.',
        stack: [
            {name: 'Will post once completed'},
        ],
        image: '/assets/work/coming-soon.jpg',
        live: '',
        github: '',
    },
    {
        num: '02',
        category: 'Upcoming',
        title: 'Markdown Blog',
        description: 'A static blog built using Next.js that renders posts from Markdown (.md) files using gray-matter and remark. Features include dynamic routing, clean post layout, and SEO-ready static generation via getStaticProps.',
        stack: [
            {name: 'Will post once completed'},
        ],
        image: '/assets/work/coming-soon.jpg',
        live: '',
        github: 'Will post once completed',
    },
    {
        num: '03',
        category: 'Upcoming',
        title: 'Weather App',
        description: 'A responsive weather application that fetches real-time weather data using the OpenWeatherMap API. Users can search for any city and view weather details like temperature, humidity, and conditions. Includes error handling and smooth UI transitions.',
        stack: [
            {name: 'Will post once completed'},
        ],
        image: '/assets/work/coming-soon.jpg',
        live: '',
        github: '',
    },
    {
        num: '04',
        category: 'Upcoming',
        title: 'Mini Job Board',
        description: 'A mock job board app displaying a list of job postings loaded from JSON. Users can filter jobs by category or location. Built with responsive design and clean UX to simulate a real-world job search experience.',
        stack: [
            {name: 'Will post once completed'},
        ],
        image: '/assets/work/coming-soon.jpg',
        live: '',
        github: '',
    },

]


{/* 2:15:38 */}

const Work = () => {
    const [project, setProject] = useState<Project>(projects[0]);

    const handleSlideChange = (swiper: Swiper) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: "easeIn"
                }
            }}
            className="min-h-[80vh] flex flex-col justify-center items-center
            py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between
                        order-2 xl:order-none"
                    >
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* OUTLINE NUM */}
                            <div className="text-8xl leading-none font-extrabold 
                                text-transparent text-outline"
                            >
                                {project.num}
                            </div>
                            {/* PROJECT Title */}
                            <h2 className="text-[42px] font-bold leading-none text-white
                                group-hove:text-accent transition-all duration-500 capitalize"
                            >
                                {project.title}
                            </h2>
                            {/* PROJECT CATEGORY */}
                            <h3
                                className="text-xl font-bold text-white/80
                                group-hove:text-accent transition-all duration-500 capitalize"   
                            >
                                {project.category} project
                            </h3>
                            {/* PROJECT DESCRIPTION */}
                            <p className="text-white/60">{project.description}</p>
                            {/* STACK */}
                            <ul className="flex gap-4">
                                {project.stack.map((item, index) =>{
                                    return <li
                                        key={index}
                                        className="text-xl text-accent"
                                    >
                                        {item.name}
                                        {index !== project.stack.length - 1 && ','}
                                    </li>

                                })}
                            </ul>
                            <div className="border border-white/20"></div>
                            {/* BUTTONS */}
                            <div className="flex items-center gap-4">
                                {/* Live project button */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent className="text-primary">
                                                <p className="bg-white/80 rounded p-1">Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                {/* Github project button */}
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent className="text-primary">
                                                <p className="bg-white/80 rounded p-1">Github Repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12 rounded-md"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return <SwiperSlide
                                    key={index}
                                    className="w-full"
                                >
                                    <div 
                                        className="h-[460px] relative group flex justify-center items-center
                                        bg-pink-50/20 "
                                    >
                                        {/* OVERLAY */}
                                        <div className="absolute top-0 bottom-0 h-full bg-black/10 z-10"></div>
                                        {/* IMAGE */}
                                        <div className="w-full h-full object-cover">
                                            <Image 
                                                src={project.image}
                                                fill
                                                className="objerct-cover"
                                                alt="image"
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            })}
                            {/* SLIDER BUTTONS */}
                            <WorkSliderBtns  
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
                                xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                btnStyles="flex justify-center items-center bg-accent hover:bg-accent-hover 
                                text-primary text-[22px] w-[44px] h-[44px] transition-all"

                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work

// "use client";

// import { motion } from "framer-motion";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { ExternalLink } from "lucide-react";
// import { BsGithub } from "react-icons/bs";

// const Projects = () => {
//     return (
//         <section
//             className="p-8 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white"
//         >
//             <div
//                 className="max-w-4xl mx-auto space-y-12"
//             >
//                 {/** BIO PRO Project */}
//                 <motion.div 
//                     initial={{opacity: 0, y: 40}}
//                     whileInView={{opacity: 1, y: 0}}
//                     transition={{duration: 0.6}}
//                     viewport={{once: true}}
//                 >
//                     <Card
//                         className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl rounded-2xl overflow-hidden"
//                     >
//                         <CardContent className="p-8 space-y-6">
//                             <motion.h2
//                                 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
//                                 whileHover={{scale: 1.05}}
//                             >
//                                 BIO Pro: Biometric-Inspired Attendance & Payroll System
//                             </motion.h2>

//                             <p className="text-lg text-gray-300">
//                                 Traditional attendance systems are expensive and error-prone. 
//                                 Bio Pro is a web-based solution with mock biometric features 
//                                 such as face recognition, real-time monitoring, automated 
//                                 time-in/out status, notifications, and Excel-ready payroll reports.
//                             </p>

//                             <ul className="list-disc list-inside text-gray-300 space-y-1">
//                                 <li>Real-time monitoring dashboard</li>
//                                 <li>Face Recognition login (mock-up)</li>
//                                 <li>Automated Time-in/out with restrictions</li>
//                                 <li>Notifications for employees near shift</li>
//                                 <li>Analytic + Excel export</li>
//                             </ul>

//                             <div className="flex flex-wrap gap-2">
//                                 <span
//                                     className="px-3 py-1 rounded-full bg-cyan-600/20 text-cyan-400 text-sm"
//                                 >
//                                     Next.js
//                                 </span>
//                                 <span
//                                     className="px-3 py-1 rounded-full bg-cyan-600/20 text-cyan-400 text-sm"
//                                 >
//                                     Node.js
//                                 </span>
//                                 <span
//                                     className="px-3 py-1 rounded-full bg-cyan-600/20 text-cyan-400 text-sm"
//                                 >
//                                     face-api.js
//                                 </span>
//                                 <span
//                                     className="px-3 py-1 rounded-full bg-cyan-600/20 text-cyan-400 text-sm"
//                                 >
//                                     xlsx
//                                 </span>
//                             </div>

//                             <div className="flex gap-4 pt-4">
//                                 <Button
//                                     variant="outline"
//                                     className="flex items-center gap-2"
//                                 >
//                                     <BsGithub /> Code
//                                 </Button>
//                                 <Button
//                                     className="bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center gap-2"
//                                 >
//                                     <ExternalLink className="w-4 h-4"/> Live Demo
//                                 </Button>
//                             </div>
//                         </CardContent>
//                     </Card>
//                 </motion.div>    
//             </div>

//             <motion.div whileHover={{ rotateY: 5, scale: 1.02 }} transition={{ type: "spring" }}>
//   <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-950 border border-cyan-400/20 rounded-2xl shadow-xl p-8">
    
//     {/* Header */}
//     <h2 className="font-mono text-xl text-cyan-400 mb-4">
//       $ BIO Pro — Biometric-Inspired Attendance Systemses
//     </h2>

//     {/* Description */}
//     <p className="text-gray-300 leading-relaxed">
//       A case study project that solves the problem of <span className="text-cyan-300">expensive and error-prone attendance tracking</span>.
//       BIO Pro introduces a web-based solution inspired by biometric systems...
//     </p>

//     {/* Tech stack tags */}
//     <div className="flex gap-2 mt-4">
//       <span className="px-3 py-1 text-sm rounded-full bg-cyan-600/20 text-cyan-400">Next.js</span>
//       <span className="px-3 py-1 text-sm rounded-full bg-cyan-600/20 text-cyan-400">Node.js</span>
//       <span className="px-3 py-1 text-sm rounded-full bg-cyan-600/20 text-cyan-400">face-api.js</span>
//     </div>

//     {/* Buttons */}
//     <div className="flex gap-4 mt-6">
//       <Button className="bg-cyan-600/20 text-cyan-400 border border-cyan-400/30">
//         <BsGithub /> Code
//       </Button>
//       <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black">
//         <ExternalLink className="w-4 h-4" /> Live Demo
//       </Button>
//     </div>

//     {/* Glow effect */}
//     <div className="absolute inset-0 rounded-2xl border border-cyan-400/10 blur-xl opacity-30"></div>
//   </div>
// </motion.div>


//         </section>

//     )
// }

// export default Projects