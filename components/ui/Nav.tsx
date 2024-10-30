"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data";

const Nav = () => {
    const pathname = usePathname();
    return (
        <div className="flex gap-8">
            {navLinks.map(({ name, path }, index) => {
                return <Link 
                    key={index}
                    href={path} 
                    className={`${path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                
                >{name}</Link>
            })}
        </div>
    )
}

export default Nav