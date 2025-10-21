import Link from "next/link";

// UI COMPONENTS
import Nav from "./ui/Nav";
import MobileNav from "./ui/MobileNav";

const Header = () => {
    return (
        <header className="py-2 xl:py-4 text-white bg-primary">
            <div className="container mx-auto flex justify-between items-center">
 
                {/* LOGO */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Ron
                        <span className="text-accent">.</span>    
                    </h1>
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    {/* <Link href="/contact">
                        <Button>Hire Me</Button>
                    </Link> */}
                </div>

                {/* MOBILE NAV */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
                {/*next 18:16    */}

            </div>
        </header>
    )
}

export default Header