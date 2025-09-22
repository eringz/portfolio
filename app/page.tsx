"use client"

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

{/* UI COMPONENTS */}
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
    const [greeting, setGreeting] = useState("Hello");

    useEffect(() => {
      const hour = new Date().getHours();
      if (hour < 12) setGreeting("Good Morning");
      else if (hour < 18) setGreeting("Good Afternoon");
      else if (hour == 24) setGreeting("Hey its Midnight");
      else setGreeting("Good Evening");
    }, []);

    const text = `${greeting}! I'm`;
    const name = `Ron Santos`;
    const position = `Programmer | QA & BI`
    const motto = `I code. I automate. I analyze. Making impact.`

    return (
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <motion.h1
                className="text-4xl font-bold"
                initial={{ opacity: 0, y: -20  }}
                animate={{ opacity: 1, y: 0  }}
                transition={{ duration: 5, ease: "easeInOut" }}
              >
                {text}
              </motion.h1>
              
              <motion.h1 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ delay: 1, duration: 3, ease: "easeInOut"}}
                className="h1 mb-6 text-accent font-bold whitespace-nowrap overflow-hidden"
              >
                {name}
              </motion.h1>
              <motion.h1 
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ duration: 5, ease: "easeInOut" }}
                className="text-xl text-accent font-bold whitespace-nowrap overflow-hidden"
              >
                {position}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "110%",  }}
                transition={{ duration: 5, ease: "easeInOut" }} 
                className="max-w-[500px] mb-9 text-white/80 font-bold whitespace-nowrap overflow-hidden"
              >
                {motto}
              </motion.p>
              {/* buttons and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a
                    href="/John_Ronald_Santos_CV.pdf"
                    download
                  >
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2"
                  >
                      Download CV
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div className="mb-8 xl:mb-0">
                  <Social containerStyles="flex gap-6"  iconStyles="flex justify-center items-center text-accent text-base w-9 h-9 border border-accent rounded-full hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                </div>
              </div>
              
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
    )
} 
export default Home