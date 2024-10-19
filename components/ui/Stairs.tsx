import { motion } from "framer-motion";

//variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}

// Calculate the reverse index for staggred delay
const reverseIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () => {
    return (
        <>
            {
            /**
                * render 6 motion divs, each representing a step of stairs
                * Each div will have the same animation defined by the starsAnimation object.
                * The delay for is calculated based on its reversal index,
                * creating staggered effect with decreasing delay for each subsequent step.
                * next is 35:13
            */
             }
             {[...Array(6)].map((_,index) => {
                return (
                    <motion.div 
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duaration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1
                        }}
                        className="h-full w-full bg-white relative"
                    />
                )
             })}
        </>
    )
}

export default Stairs




