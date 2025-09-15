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