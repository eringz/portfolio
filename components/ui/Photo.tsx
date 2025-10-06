"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Photo = () => {
    const [src, setSrc] = useState('/assets/ron-ngayon.png');
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2,
                        duration: 0.4,
                        ease: 'easeIn'
                    }
                }}
                
            >
                {/* IMAGE */}
                <motion.div 
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: 'easeInOut'
                        }
                    }}
                    className="flex w-[298px] h-[268px] xl:w-full xl:h-[498px] mix-blend-lighten absolute"
                >
                    
                        <Image 
                            src={src}
                            priority 
                            quality={100} 
                            width={620}
                            height={400}
                            // fill 
                            // loading='lazy'
                            // onMouseLeave={() => setSrc('/assets/ron.png')}
                            // onMouseEnter={() => setSrc('/assets/ron-ngayon.png')}
                            alt="Photo of Ron Santos as Parts Consultant Champion" 
                            className="object-cover m-auto place-self-center"
                        />
                    
                    
                </motion.div>

                {/* CIRCLE 1:09:11 */}
                <motion.svg 
                    className="w-[300px] xl:w-[560px] h-[300px] xl:h-[560px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle 
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00FF99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray: ["15 120  25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],

                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo