"use client";
import { motion } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import { BsFillCloudDownloadFill, BsGithub, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import { useInView, useScroll } from "framer-motion";

// Define types for the refs
type FormRef = HTMLFormElement | null;
type DivRef = HTMLDivElement | null;

const ContactPage = () => {
    // Logic to get the current year
    const currentYear = new Date().getFullYear();

    // Refs with types
    const containerRef = useRef<DivRef>(null);
    const skillRef = useRef<DivRef>(null);
    const experienceRef = useRef<DivRef>(null);
    const form = useRef<FormRef>(null);

    // Scroll and view hooks
    const { scrollYProgress } = useScroll({ container: containerRef });
    const isSkillRefInView = useInView(skillRef, { margin: "0px" });
    const isExperienceRefInView = useInView(experienceRef, { margin: "0px" });

    // State for form submission
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const text = "Let's Connect and Collaborate";

    // Function to handle form submission
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);

        if (form.current) {
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_SERVICE_ID || '',
                    process.env.NEXT_PUBLIC_TEMPLATE_ID || '',
                    form.current,
                    process.env.NEXT_PUBLIC_PUBLIC_KEY || ''
                )
                .then(
                    () => {
                        setSuccess(true);
                        form.current?.reset();
                    },
                    () => {
                        setError(true);
                    }
                );
        }
    };

    return (
        <motion.div
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
        >
            <div className="pb-10 h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
                {/* TEXT CONTAINER */}
                <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
                    <div className="text-center">
                        {text.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 0 }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: index * 0.1,
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                        <div>
                            <p className="text-black p-6 text-center text-sm">
                                I believe that collaboration is the key to success. When we work
                                together, we can achieve more than we ever could on our own. I am
                                always looking for new opportunities to collaborate with others, and I
                                am always open to new ideas. If you have a project or an idea that you
                                would like to discuss, please do not hesitate to reach out to me. I
                                would be happy to hear from you and see how we can work together.
                            </p>
                        </div>
                    </div>
                </div>
                {/* FORM CONTAINER */}
                <form
                    onSubmit={sendEmail}
                    ref={form}
                    className="h-1/2 lg:h-full lg:w-1/2 bg-gradient-to-r from-violet-200 to-pink-200 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
                >
                    <span> Rian Islam,</span>
                    <textarea
                        rows={6}
                        className="bg-transparent border-b-2 border-b-black outline-none resize-none"
                        name="user_message"
                    />
                    <span>My mail address is:</span>
                    <input
                        name="user_email"
                        type="text"
                        className="bg-transparent border-b-2 border-b-black outline-none"
                    />
                    <span>Regards</span>
                    <button
                        type="submit"
                        className="font-semibold bg-pinkCustom text-white px-4 py-2 rounded-sm"
                    >
                        Send
                    </button>
                    {success && (
                        <span className="text-green-600 font-semibold">
                            Your message has been sent successfully!
                        </span>
                    )}
                    {error && (
                        <span className="text-red-600 font-semibold">
                            Something went wrong!
                        </span>
                    )}
                </form>
            </div>




        </motion.div>
    );
};

export default ContactPage;
