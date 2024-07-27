/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillCloudDownloadFill, BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import Loading from '@/components/UI/StyleComponent/Loading';
import { useGetAllProjectQuery } from '@/redux/api/projectApi';

const Projects: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    const { data, error, isLoading } = useGetAllProjectQuery({});
    console.log(data);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <motion.div
            className="h-full"
            initial={{ y: '-200vh' }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="h-[600vh] relative" ref={ref}>
                <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center">
                    {/* Heading Section start */}

                    <div className=" py-10">
                        <div className="container sm:px-0 md:px-80 lg:px-80 mx-auto sm:my-5 md:my-20 lg:my-20 text-center">
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
                                className=" font-extrabold sm:text-2xl md:text-7xl lg:text-7xl ">
                                Discover. Create. Empower through
                                <h1 className=" font-extrabold sm:text-2xl md:text-8xl lg:text-8xl ">
                                    Coding.
                                </h1>
                            </motion.h1>
                            <p className="sm:px-0 md:px-40 lg:px-40  sm:text-xl md:text-2xl lg:text-2xl pt-4">
                                Unleash the power of code. Create endless possibilities. Empower
                                yourself and others through programming.
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <div className="flex">
                                <div className="p-2 text-blue-400  sm:text-4xl md:text-4xl lg:text-4xl">
                                    <p>
                                        <a
                                            target="_blank"
                                            href="https://www.linkedin.com/in/mdrianislam0or1"
                                            rel="noreferrer"
                                        >
                                            <BsLinkedin />
                                        </a>
                                    </p>
                                </div>

                                <div className="p-2 text-red-600  sm:text-4xl md:text-4xl lg:text-4xl">
                                    <p>
                                        <a
                                            target="_blank"
                                            href="https://www.youtube.com/@mdrianislam0or1YT"
                                            rel="noreferrer"
                                        >
                                            <BsYoutube />
                                        </a>
                                    </p>
                                </div>
                                <div className="p-2 text-indigo-500  sm:text-4xl md:text-4xl lg:text-4xl">
                                    <p>
                                        <a
                                            target="_blank"
                                            href="https://github.com/mdrianislam0or1"
                                            rel="noreferrer"
                                        >
                                            <BsGithub />
                                        </a>
                                    </p>
                                </div>
                                <div className="p-2 text-pink-500  sm:text-4xl md:text-4xl lg:text-4xl">
                                    <p>
                                        <a
                                            target="_blank"
                                            href="https://www.instagram.com/rianislam567/"
                                            rel="noreferrer"
                                        >
                                            <BsInstagram />
                                        </a>
                                    </p>
                                </div>
                                <div className="p-2 text-orange-500  sm:text-4xl md:text-4xl lg:text-4xl">
                                    <p>
                                        <a
                                            target="_blank"
                                            href="https://github.com/mdrianislam0or1"
                                            rel="noreferrer"
                                        >
                                            <BsFillCloudDownloadFill />
                                        </a>
                                    </p>
                                </div>
                                <div className="p-2 text-blue-600  sm:text-4xl md:text-4xl lg:text-4xl">
                                    <p>
                                        <a
                                            target="_blank"
                                            href="https://twitter.com/mdrianislam0or1"
                                            rel="noreferrer"
                                        >
                                            <BsTwitter />
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Heading Section end */}
                </div>
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{ x }} className="flex">
                        <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-red-200 to-yellow-200" />
                        {data?.map((item: any) => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className="flex flex-col gap-8">
                                    <h1 className="text-xl font-bold md:text-4xl lg:text-4xl xl:text-4xl">
                                        {item.title}
                                    </h1>
                                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                                        <Image src={item.img} alt={item.title} fill />
                                    </div>
                                    <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                        <strong>Description:</strong> {item.desc}
                                    </p>
                                    <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                        <strong>Technology:</strong> {item.technology.join(', ')}
                                    </p>
                                    <div className='flex gap-4'>
                                        <Link href={item.link} className="flex justify-end">
                                            <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">Live Link</button>
                                        </Link>
                                        <Link href={item.code} className="flex justify-end">
                                            <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">Source Code</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
                <h1 className="text-8xl">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-[500px] md:h-[500px]"
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">
                                A full time coder & Web-Developer
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black rounded-full flex items-center justify-center"
                    >
                        Hire Me
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;
