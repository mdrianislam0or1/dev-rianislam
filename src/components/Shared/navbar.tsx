"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

export default function Navbar() {
    const links = [
        { url: "/", title: "Home" },
        { url: "/project", title: "Project" },
        { url: "/blog", title: "Blog" },
        { url: "/about", title: "About" },
        { url: "/contact", title: "Contact" },
    ];

    const [open, setOpen] = useState(false);

    const topVariants = {
        closed: { rotate: 0 },
        opened: { rotate: 45, backgroundColor: "rgba(255, 255, 255, 0.5)" },
    };

    const bottomVariants = {
        closed: { rotate: 0 },
        opened: { rotate: -45, backgroundColor: "rgba(255, 255, 255, 0.5)" },
    };

    const centerVariants = {
        closed: { opacity: 1 },
        opened: { opacity: 0 },
    };

    const listVariants = {
        closed: { x: "100vw" },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const listItemVariants = {
        closed: { x: "-10vw", opacity: 0 },
        opened: { x: 0, opacity: 1 },
    };

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            {/* NAVIGATION LINKS */}
            <div className="hidden md:flex gap-4 w-1/3">
                {links.map((link) => (
                    <NavLink link={link} key={link.url} />
                ))}
            </div>

            {/* LOGO HERE */}
            <div className="hidden md:flex lg:w-1/3 lg:justify-center">
                {/* Add your logo here */}
            </div>

            {/* SOCIAL LINKS */}
            <div className="hidden md:flex gap-4 w-1/3">
                <Link target="_blank" href="https://github.com/mdrianislam0or1">
                    <Image src="/github.png" alt="GitHub" width={24} height={24} />
                </Link>
                <Link target="_blank" href="https://www.facebook.com/rian.islam.35728/">
                    <Image src="/facebook.png" alt="Facebook" width={24} height={24} />
                </Link>
                <Link target="_blank" href="https://dribbble.com/mdrianislam0or1">
                    <Image src="/dribbble.png" alt="Dribbble" width={24} height={24} />
                </Link>
                <Link target="_blank" href="https://rianislam-me.web.app/">
                    <Image src="/host.png" alt="Portfolio" width={24} height={24} />
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/mdrianislam0or1/">
                    <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
                </Link>
            </div>

            {/* RESPONSIVE MENU */}
            <div className="md:hidden">
                <button
                    className="w-10 h-8 flex flex-col justify-between z-50 relative"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <motion.div
                        variants={topVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"
                    ></motion.div>
                    <motion.div
                        variants={centerVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded"
                    ></motion.div>
                    <motion.div
                        variants={bottomVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"
                    ></motion.div>
                </button>

                {open && (
                    <motion.div
                        variants={listVariants}
                        initial="closed"
                        animate="opened"
                        className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
                    >
                        {links.map((link) => (
                            <motion.div variants={listItemVariants} key={link.url}>
                                <Link href={link.url}>{link.title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
