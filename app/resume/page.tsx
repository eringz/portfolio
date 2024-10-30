"use client";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { about, experience, education } from "@/data";

const skills = {
    title: 'My Skills',
    description: 'Excels at bridging technical and customer-centric roles, leveraging expertise in web development and database management alongside strong communication and problem-solving skills to create seamless experiences and solutions.',
    skillList: [
        {
            icon: <FaHtml5 />,
            name: 'HTML 5'
        },
        {
            icon: <FaCss3 />,
            name: 'CSS 3'
        },
        {
            icon: <FaJs />,
            name: 'javascript'
        },
        {
            icon: <FaReact />,
            name: 'React JS'
        },
        {
            icon: <SiNextdotjs />,
            name: 'Next JS'
        },
        {
            icon: <SiTailwindcss />,
            name: 'Tailwind CSS'
        },
        {
            icon: <FaNodeJs />,
            name: 'Node JS'
        },
        {
            icon: <FaFigma />,
            name: 'Figma'
        },
    ]
}

const Resume = () => {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{
                opacity: 1,
                transition: {
                    delay: 2.4,
                    duration: 0.4,
                    ease: 'easeIn',
                },
            }}
            className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs 
                    defaultValue="experience" 
                    className="flex flex-col xl:flex-row gap-[60px]"
                >
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* CONTENT */}
                    <div className="min-h-[70vh] w-full">
                        {/* EXPERIENCE */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]"> 
                                        {experience.items.map(({ company, position, duration }, index) => {
                                            return <li 
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col 
                                                justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{duration}</span>
                                                <h3 
                                                    className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"
                                                >
                                                    {position}
                                                    </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60 text-sm">{company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* EDUCATION */}
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]"> 
                                        {education.items.map(({duration, degree, institution }, index) => {
                                            return <li 
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col 
                                                justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{duration}</span>
                                                <h3 
                                                    className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"
                                                >
                                                    {degree}
                                                    </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60 text-sm">{institution}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* SKILLS */}
                        <TabsContent value="skills" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {skills.description}
                                </p>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return <li 
                                            key={index}

                                        >
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                            {skill.icon}
                                                        </div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="capitalize">{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            
                               
                            </div>
                        </TabsContent>
                        {/* ABOUT */}
                        <TabsContent value="about" className="w-full h-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                                    {about.info.map(({fieldName, fieldValue}, index) => {
                                        return <li 
                                            key={index}
                                            className="flex justify-center items-center xl:justify-start gap-4"
                                        >
                                            <span className="text-white/60">{fieldName}</span>
                                            <span className="text-xl">{fieldValue}</span>
                                        </li>
                                    })}
                                </ul>

                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume