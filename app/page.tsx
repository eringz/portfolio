import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

{/* UI COMPONENTS */}
import Social from "@/components/ui/Social";
import Photo from "@/components/ui/Photo";
import Stats from "@/components/ui/Stats";

const Home = () => {
    return (
      <section className="h-full">
        
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Emerging Full-Stack Developer | QA & BI </span>
              <h1 className="h1 mb-6">
                Hello I&apos;m <br /> <span className="text-accent">Ron Santos</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                erging Full-Stack Developer with a foundation in business Intelligence and QA. Skilled in building portfolio projects using Next.js, React.js, and PHP, while applying QA and automation practice for efficient and reliable development, brings experience in analytics and report automation, supporting both technical delivery and business outcomes, with strong problem-solving, communication, and collaboration skills.
              </p>
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