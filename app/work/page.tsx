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

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores iusto inventore quae nobis voluptatem.',
        stack: [
            {name: 'HTML 5'}, {name: 'CSS 3'}, {name: 'javascript'}
        ],
        image: '/assets/work/thumb1.png',
        live: '',
        github: '',
    },
    {
        num: '02',
        category: 'fullstack',
        title: 'project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores iusto inventore quae nobis voluptatem.',
        stack: [
            {name: 'Next JS'}, {name: 'Tailwind CSS'}, {name: 'Node JS'}
        ],
        image: '/assets/work/thumb2.png',
        live: '',
        github: '',
    },
    {
        num: '03',
        category: 'frontend',
        title: 'project 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde asperiores iusto inventore quae nobis voluptatem.',
        stack: [
            {name: 'Next JS'}, {name: 'Tailwind CSS'}, {name: 'Node JS'}
        ],
        image: '/assets/work/thumb3.png',
        live: '',
        github: '',
    },
]
{/* 2:15:38 */}

const Work = () => {
    const [project, setProject] = useState(projects[0])
    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="min-h-[80vh] flex flex-col justify-center items-center
            py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between
                        order-2 xl:order-none"
                    >
                        text
                    </div>
                    <div className="w-full xl:w-[50%]">slide</div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work