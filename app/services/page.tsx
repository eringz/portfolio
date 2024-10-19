"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

import { motion } from "framer-motion";



const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'Delivering tailored web development services that create responsive, user-friendly websites. We specialize in both front-end and back-end development, providing high-performance solutions customized to your goals.',
        href: '',
    },
    {
        num: '02',
        title: 'Mobile Development',
        description: 'Designing mobile apps that prioritize seamless, user-friendly experiences to elevate your business. Our custom solutions are built for speed, scalability, and tailored to meet your unique goals.',
        href: '',
    },
    {
        num: '03',
        title: 'Data-Driven Business Optimization',
        description: 'Unlock your business\'s\ potential with data-driven insights that guide smarter decisions and drive growth. We transform complex data into actionable strategies, keeping you ahead in a competitive market.', 
        
        href: '',
    },
    {
        num: '04',
        title: 'AI Development',
        description: 'Building intelligent AI solutions that automate tasks, enhance decision-making, and drive innovation. We create scalable, data-driven models tailored to your business objectives.',
        href: '',
    },
    {
        num: '05',
        title: 'Brand Boost',
        description: 'Delivering tailored strategies that drive business growth and boost your competitive edge. We provide innovative solutions designed to maximize your brand’s potential and achieve lasting success.',
        href: '',
    },


]

const Services = () => {
    /**1:19:59 */
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1, 
                        transition: { delay: 2.4, duration: 0.4,ease: "easeIn",}
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return <div 
                            key={index}
                            className="flex-1 flex flex-col justify-center gap-6 group"
                        >
                            {/* TOP */}
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                                <Link 
                                    href={service.href}
                                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent 
                                    hover:-rotate-45 transition-all duration-500 flex justify-center items-center"
                                >
                                    <BsArrowDownRight 
                                        className="text-primary text-3xl"
                                    />
                                </Link>
                            </div>
                            {/* HEADING */}
                            <h2
                                className="text-[42px] font-bold leading-none text-white
                                group-hover:text-accent transition-all duration-500"
                            >
                                {service.title}
                            </h2>
                            {/* DESCRIPTION */}
                            <p className="text-white/60">{service.description}</p>
                            {/* BORDER */}
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    })}
                </motion.div>    
            </div>    
        </section>
    )
}

export default Services