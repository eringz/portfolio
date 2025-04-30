"use client";
import Link from "next/link";

import { FaGithub, FaLinkedinIn} from "react-icons/fa";

type SocialProps = {
    containerStyles: string;
    iconStyles: string;
};

const socials = [
    {icon: <FaGithub />, path: 'https:github.com/eringz'},
    {icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/john-ronald-santos/'},
]

const Social = ({containerStyles, iconStyles}: SocialProps) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index)  => {
                return <Link 
                    key={index} 
                    href={item.path}
                    className={iconStyles}
                >
                    {item.icon}
                </Link>
            })}
        </div>
    )
}

export default Social