/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { motion, useInView, useScroll } from "framer-motion";
import React, { useRef } from "react";
import {
    FaConnectdevelop,
    FaDatabase,
    FaFileCode,
    FaGithubSquare,
    FaLaptopCode,
    FaLinkedin,
    FaOpencart,
    FaReact,
    FaServer,
    FaTrafficLight,
    FaTwitterSquare,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiLaravel, SiTsnode, SiMongodb, SiAdobeillustrator, SiKalilinux, SiPostman, SiPostgresql } from "react-icons/si";
import { TbBrandReactNative, TbBrandNextjs, TbBrandRedux } from "react-icons/tb";
import { FaBootstrap, FaJs, FaPhp, FaNode, FaGithub, FaDocker, FaAws, FaFigma } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { HiMiniCommandLine } from "react-icons/hi2";
import {
    BsFillBriefcaseFill,
    BsFillCloudDownloadFill,
    BsGithub,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsYoutube,
} from "react-icons/bs";
import Link from "next/link";

function Home() {
    // Logic to get the current year
    const currentYear = new Date().getFullYear();

    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ container: containerRef });

    const skillRef = useRef<HTMLDivElement>(null);
    const isSkillRefInView = useInView(skillRef, { margin: "0px" });

    const experienceRef = useRef<HTMLDivElement>(null);
    const isExperienceRefInView = useInView(experienceRef, { margin: "0px" });

    const handleDownload = () => {
        const downloadUrl = '/resume.pdf'; // Path to your resume file in the public directory
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'resume.pdf'; // Name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <motion.div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                {/* IMAGE CONTAINER */}
                <motion.div
                    initial={{ x: "-200vh" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 1 }}
                    className="h-1/2 lg:h-full lg:w-1/2 relative"
                >
                    <Image src="/3D/1.png" alt="" fill className="object-contain" />
                </motion.div>
                {/* TEXT CONTAINER */}
                <motion.div
                    initial={{ x: "200vh" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 1 }}
                    className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center"
                >
                    {/* TITLE */}
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            ease: [0, 0.71, 0.2, 1.01],
                            scale: {
                                type: "spring",
                                damping: 5,
                                stiffness: 100,
                                restDelta: 0.001,
                            },
                        }}
                        className="text-4xl md:text-6xl font-bold">
                        Shaping Digital Journeys, Creating Future Designs.
                    </motion.h1>
                    {/* DESC */}
                    <p className="md:text-xl">
                        Step into my digital realm, where innovation intertwines with creativity. Here, I blend aesthetics with coding prowess to craft a portfolio brimming with diverse projects, each reflecting my unwavering dedication to excellence.
                    </p>
                    {/* BUTTONS */}
                    <div className="w-full flex gap-4">
                        <Link href="/portfolio">
                            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                                View My Work
                            </button>
                        </Link>
                        <button onClick={handleDownload} className="p-4 rounded-lg ring-1 ring-black">
                            Download Resume
                        </button>
                    </div>
                </motion.div>
            </motion.div>

            <motion.div className="container mx-auto py-8" ref={containerRef}>
                <motion.div
                    className="py-6"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.9,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,
                        },
                    }}
                >
                    <h1 className="font-bold sm:text-4xl md:text-6xl lg:text-6xl">
                        Technical Skills
                    </h1>
                </motion.div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12">
                    {/* Skills first row */}
                    <motion.div
                        initial={{ x: "-200vh" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 3 }}
                    >
                        <div

                            className="rounded border-t-4 border-purple-400 card 
              bg-gradient-to-r from-lime-400 to-lime-500
              hover:shadow-lg"
                        >
                            <div className="m-4">
                                <h1 className="py-3 text-2xl font-bold flex">
                                    <FaFileCode className=" text-red-500  sm:text-4xl md:text-3xl lg:text-4xl" />
                                    <div className="mx-2">Programming Languages</div>
                                </h1>
                                <h1 className="py-1 block text-gray-500 text-sm">
                                    <div className="flex">
                                        <FaJs className="mx-2 font-bold text-yellow-500 text-4xl" />
                                        <FaPhp className="mx-2 font-bold text-indigo-500 text-4xl" />
                                        <SiTsnode className="mx-2 font-bold text-blue-500 text-4xl" />
                                        <FaNode className="mx-2 font-bold text-green-900 text-4xl" />
                                    </div>
                                </h1>
                            </div>
                        </div>
                        <div

                            className="rounded border-t-4 border-pink-400 card 
              bg-gradient-to-r from-violet-200 to-pink-200
              hover:shadow-lg"
                        >
                            <div className="m-4">
                                <h1 className="py-3 text-2xl font-bold flex">
                                    <FaDatabase className=" text-green-500  sm:text-4xl md:text-3xl lg:text-4xl" />
                                    <div className="mx-2">Databases</div>
                                </h1>
                                <h1 className="py-1 block text-gray-500 text-sm">
                                    <div className="flex">
                                        <SiMongodb className="mx-2 font-bold text-green-500 text-4xl" />
                                        <GrMysql className="mx-2 font-bold text-black text-blue-500 text-4xl" />
                                        <BiLogoPostgresql className="mx-2 font-bold text-indigo-700 text-4xl" />
                                    </div>
                                </h1>
                            </div>
                        </div>
                        <div

                            className="rounded border-t-4 border-blue-400 card 
              bg-gradient-to-r from-yellow-200 to-pink-400
              hover:shadow-lg"
                        >
                            <div className="m-4">
                                <h1 className="py-3 text-2xl font-bold flex">
                                    <FaOpencart className=" text-pink-500  sm:text-4xl md:text-3xl lg:text-4xl" />
                                    <div className="mx-2">Design Tools</div>
                                </h1>

                                <h1 className="py-1 block text-gray-500 text-sm">
                                    <div className="flex">
                                        <SiAdobeillustrator className="mx-2 font-bold text-orange-900 text-4xl" />
                                        <FaFigma className="mx-2 font-bold text-black text-4xl" />
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: "200vh" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 3 }}
                    >
                        <div
                            data-aos="fade-left"
                            className="rounded border-t-4 border-blue-400 card 
              bg-gradient-to-r from-sky-300 to-sky-600
              hover:shadow-lg"
                        >
                            <div className="m-4">
                                <h1 className="py-3 text-2xl font-bold flex">
                                    <FaReact className=" text-blue-600  sm:text-4xl md:text-3xl lg:text-4xl" />
                                    <div className="mx-2">Front-end Development</div>
                                </h1>

                                <h1 className="py-1 block text-gray-500 text-sm">
                                    <div className="flex">
                                        <FaReact className="mx-2 font-bold text-blue-500 text-4xl" />
                                        <SiTailwindcss className="mx-2 font-bold text-sky-500 text-4xl" />
                                        <FaBootstrap className="mx-2 font-bold text-indigo-900 text-4xl" />
                                    </div>
                                </h1>
                            </div>
                        </div>

                        <div
                            data-aos="fade-left"
                            className="rounded border-t-4 border-indigo-400 card 
              bg-gradient-to-r from-pink-300 to-yellow-500
              hover:shadow-lg"
                        >
                            <div className="m-4">
                                <h1 className="py-3 text-2xl font-bold flex">
                                    <FaTrafficLight className=" text-indigo-600  sm:text-4xl md:text-3xl lg:text-4xl" />
                                    <div className="mx-2">Version Control</div>
                                </h1>

                                <h1 className="py-1 block text-gray-500 text-sm">
                                    <div className="flex">
                                        <FaGithub className="mx-2 font-bold text-black text-4xl" />
                                    </div>
                                </h1>
                            </div>
                        </div>
                        <div
                            data-aos="fade-left"
                            className="rounded border-t-4 border-red-400 card 
              bg-gradient-to-r from-yellow-500 to-red-500
              hover:shadow-lg"
                        >
                            <div className="m-4">
                                <h1 className="py-3 text-2xl font-bold flex">
                                    <HiMiniCommandLine className=" text-yellow-900  sm:text-4xl md:text-3xl lg:text-4xl" />
                                    <div className="mx-2">CLI tools</div>
                                </h1>

                                <h1 className="py-1 block text-gray-500 text-sm">
                                    <div className="flex">
                                        <HiMiniCommandLine className="mx-2 font-bold text-black text-4xl" />
                                        <SiKalilinux className="mx-2 font-bold text-slate-800 text-4xl" />
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: "-200vh" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 3 }}
                    >
                        <div

                            className="rounded border-t-4 border-red-400 card 
              bg-gradient-to-r from-orange-200 to-amber-400
              hover:shadow-lg"
                        >
                            <div className="m-4">
                                <h1 className="py-3 text-2xl font-bold flex">
                                    <FaConnectdevelop className=" text-yellow-500  sm:text-4xl md:text-3xl lg:text-4xl" />
                                    <div className="mx-2">Back-end Development</div>
                                </h1>
                                <h1 className="py-1 block text-gray-500 text-sm">
                                    <div className="flex">
                                        <FaNode className="mx-2 font-bold text-green-900 text-4xl" />
                                        <SiExpress className="mx-2 font-bold text-black text-4xl" />
                                        <TbBrandNextjs className="mx-2 font-bold text-black text-4xl" />
                                    </div>
                                </h1>
                            </div>
                        </div>

                        <div

                            className="rounded border-t-4 border-green-400 card 
              bg-gradient-to-r from-cyan-400 to-lime-600
              hover:shadow-lg"
                        >
                            <div className="m-4">
                                <h1 className="py-3 text-2xl font-bold flex">
                                    <FaDocker className=" text-sky-600  sm:text-4xl md:text-3xl lg:text-4xl" />
                                    <div className="mx-2">DevOps</div>
                                </h1>

                                <h1 className="py-1 block text-gray-500 text-sm">
                                    <div className="flex">
                                        <FaDocker className="mx-2 font-bold text-blue-500 text-4xl" />
                                        <FaAws className="mx-2 font-bold text-orange-500 text-4xl" />
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: "200vh" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 3 }}
                    >
                        <div

                            className="rounded border-t-4 border-cyan-400 card 
              bg-gradient-to-r from-green-200 to-sky-500
              hover:shadow-lg"
                        >
                            <div className="m-4">
                                <h1 className="py-3 text-2xl font-bold flex">
                                    <FaReact className=" text-sky-600  sm:text-4xl md:text-3xl lg:text-4xl" />
                                    <div className="mx-2">Cross-Platform Development</div>
                                </h1>

                                <h1 className="py-1 block text-gray-500 text-sm">
                                    <div className="flex">
                                        <TbBrandReactNative className="mx-2 font-bold text-sky-600 text-4xl" />
                                        <TbBrandNextjs className="mx-2 font-bold text-black text-4xl" />
                                        <TbBrandRedux className="mx-2 font-bold text-purple-500 text-4xl" />
                                    </div>
                                </h1>
                            </div>
                        </div>

                        <div

                            className="rounded border-t-4 border-pink-400 card 
              bg-gradient-to-r from-orange-400 to-amber-500
              hover:shadow-lg"
                        >
                            <div className="m-4">
                                <h1 className="py-3 text-2xl font-bold flex">
                                    <SiPostman className=" text-yellow-500  sm:text-4xl md:text-3xl lg:text-4xl" />
                                    <div className="mx-2">API Testing</div>
                                </h1>

                                <h1 className="py-1 block text-gray-500 text-sm">
                                    <div className="flex">
                                        <SiPostman className="mx-2 font-bold text-orange-500 text-4xl" />
                                        <IoLogoFirebase className="mx-2 font-bold text-yellow-500 text-4xl" />
                                        <SiLaravel className="mx-2 font-bold text-red-500 text-4xl" />
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div className="container mx-auto py-8" ref={experienceRef}>
                <motion.div
                    className="py-6"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.9,
                        ease: [0, 0.71, 0.2, 1.01],
                        scale: {
                            type: "spring",
                            damping: 5,
                            stiffness: 100,
                            restDelta: 0.001,
                        },
                    }}
                >
                    <h1 className="font-bold sm:text-4xl md:text-6xl lg:text-6xl">
                        Professional Experience
                    </h1>
                </motion.div>
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-8 gap-y-12">
                    <motion.div
                        initial={{ x: "-200vh" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 2 }}
                    >
                        <div

                            className="rounded border-t-4 border-blue-400 card 
              bg-gradient-to-r from-sky-100 to-sky-500
              hover:shadow-lg"
                        >
                            <div className="m-4">
                                <h1 className="py-3 text-2xl font-bold flex">
                                    <FaGithubSquare className=" text-black  sm:text-4xl md:text-3xl lg:text-4xl" />
                                    <div className="mx-2">Open Source Contributor</div>
                                </h1>
                                <h1 className="py-1 block text-gray-500 text-sm">
                                    <div className="flex">
                                        <BsGithub className="mx-2 font-bold text-black text-4xl" />
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: "200vh" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 2 }}
                    >
                        <div

                            className="rounded border-t-4 border-indigo-400 card 
              bg-gradient-to-r from-pink-300 to-yellow-500
              hover:shadow-lg"
                        >
                            <div className="m-4">
                                <h1 className="py-3 text-2xl font-bold flex">
                                    <FaLaptopCode className=" text-black  sm:text-4xl md:text-3xl lg:text-4xl" />
                                    <div className="mx-2">Full-stack Developer</div>
                                </h1>
                                <h1 className="py-1 block text-gray-500 text-sm">
                                    <div className="flex">
                                        <BsFillBriefcaseFill className="mx-2 font-bold text-gray-700 text-4xl" />
                                        <FaNode className="mx-2 font-bold text-green-700 text-4xl" />
                                        <FaReact className="mx-2 font-bold text-sky-500 text-4xl" />
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: "-200vh" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 2 }}
                    >
                        <div

                            className="rounded border-t-4 border-red-400 card 
              bg-gradient-to-r from-yellow-500 to-red-500
              hover:shadow-lg"
                        >
                            <div className="m-4">
                                <h1 className="py-3 text-2xl font-bold flex">
                                    <FaServer className=" text-yellow-900  sm:text-4xl md:text-3xl lg:text-4xl" />
                                    <div className="mx-2">Database Administrator</div>
                                </h1>
                                <h1 className="py-1 block text-gray-500 text-sm">
                                    <div className="flex">
                                        <SiMongodb className="mx-2 font-bold text-green-700 text-4xl" />
                                        <SiPostgresql className="mx-2 font-bold text-blue-500 text-4xl" />
                                    </div>
                                </h1>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Home;
