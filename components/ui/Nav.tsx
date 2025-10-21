"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data";

const Nav = () => {
    const pathname = usePathname();
    return (
        <div className="flex gap-8">
            {navLinks.map(({ path, icon }, index) => {
                const Icon = icon;
                return <Link 
                    key={index}
                    href={path} 
                    className={`${path === pathname && "text-accent pb-2 border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
                
                >
                    {Icon && <Icon size={20} />}
                </Link>
            })}
        </div>
    )
}

export default Nav