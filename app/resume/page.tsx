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

// ABOUT DATA
const about = {
    title: 'About me',
    description: 'Recent computer engineering graduate with a diverse career background, specializing in troubleshooting, problem-solving, and various development frameworks to make a strong impact in tech',
    info: [
        {
            fieldName: 'Name',
            fieldValue: 'Ron Garcia Santos'
        },
        {
            fieldName: 'Mobile No',
            fieldValue: '09156755167'
        },
        {
            fieldName: 'Experience',
            fieldValue: '3 years'
        },
        {
            fieldName: 'Skype',
            fieldValue: 'coming soon'
        },
        {
            fieldName: 'Nationality',
            fieldValue: 'Filipino'
        },
        {
            fieldName: 'Email',
            fieldValue: 'ron.garcia.santos@gmail.com'
        },
        
        {
            fieldName: 'Freelance',
            fieldValue: 'Available'
        },
        {
            fieldName: 'Language',
            fieldValue: 'English, Tagalog'
        },
    ]
}

// EXPERIENCE DATA
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My experience',
    description: 'Has gained valuable experience in customer service, technical support, and software development, leveraging his diverse background to excel in problem-solving and enhance user satisfaction.',
    items: [
        {
            company: 'Teleperformance Veris North',
            position: 'Customer Service Representative',
            duration: 'September 25, 2023 - Present',
        },
        {
            company: 'AT Grit Solution',
            position: 'Software Developer Associate',
            duration: 'July 25, 2023 - September 4, 2023',
        },

        {
            company: 'Remotask',
            position: 'Freelance Lidar Annotation Specialist',
            duration: 'September 2020 - October 2021',
        },
        {
            company: 'Chevrolet Alabang',
            position: 'Parts Consultant',
            duration: 'August 2015 - December 2018',
        },
        
        {
            company: 'Chevrolet Carmona',
            position: 'Parts Supervisor',
            duration: 'March 2011 - December 2011',

        },
        {
            company: 'Chevrolet Alabang',
            position: 'Parts Warehouseman',
            duration: 'April 2008 - March 2011',

        },
    ]
}

const education = {
    icon: '/assets/resume/cap.svg',
    title: 'My Education',
    description: 'Holds a Bachelor of Science in Computer Engineering, with a background in Automobile Mechanics and comprehensive web development training, combining diverse technical and practical skills.',
    items: [
        {
            institution: 'Colegio De Montalban',
            degree: 'Bachelor Degree Computer Engineering',
            duration: 'September 2019 - June 2024'
        },
        {
            institution: 'Village88 Web Development Training Program',
            degree: 'Full Stack Web Development Bootcamp',
            duration: 'July 2023 - October 2023'
        },
        {
            institution: 'MindTech Training and Development Institute Inc',
            degree: 'Web Development Fundamental Training',
            duration: 'December 2021 - January 2022'
        },
        {
            institution: 'Don Bosco Makati',
            degree: 'Automobile Mechanic',
            duration: 'June 2006 - September 2007'
        },


    ]
}

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
                                        {experience.items.map((item, index) => {
                                            return <li 
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col 
                                                justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 
                                                    className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"
                                                >
                                                    {item.position}
                                                    </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60 text-sm">{item.company}</p>
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
                                        {education.items.map((item, index) => {
                                            return <li 
                                                key={index}
                                                className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col 
                                                justify-center items-center lg:items-start gap-1"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 
                                                    className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left"
                                                >
                                                    {item.degree}
                                                    </h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60 text-sm">{item.institution}</p>
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
                                    {about.info.map((item, index) => {
                                        return <li 
                                            key={index}
                                            className="flex justify-center items-center xl:justify-start gap-4"
                                        >
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
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