import Social from "@/components/ui/Social"

const Footer = () => {
    return (
        <div className="flex justify-center items-end mb-8 xl:mb-0">
            <Social containerStyles="flex gap-6"  iconStyles="flex justify-center items-center text-accent text-base w-9 h-9 border border-accent rounded-full hover:bg-accent hover:text-primary hover:transition-all duration-500" />
        </div>
    )
}

export default Footer