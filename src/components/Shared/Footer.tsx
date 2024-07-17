import Image from "next/image";
import Link from "next/link";
import {
    BsLinkedin,
    BsTwitter,
    BsYoutube,
    BsGithub,
    BsInstagram,
    BsFillCloudDownloadFill,
} from "react-icons/bs";
export default function Footer() {
    // Logic to get the current year
    const currentYear = new Date().getFullYear();

    return (
        <div className="bg-black pt-10 m-0 border-t-2 border-pinkCustom">
            <div className="container sm:px-0 md:px-96 lg:px-96 mx-auto  ">
                <h1 className="  font-extrabold py-2 text-white sm:text-2xl md:text-5xl lg:text-5xl text-center">
                    About The Creator
                </h1>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                    <div className="">
                        <Image
                            className="border-2 border-pinkCustom dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto"
                            src="/host.png"
                            width={200}
                            height={200}
                            alt="Rian Islam"
                            priority={true}
                        />
                    </div>
                    <div className="flex items-center text-white">
                        <p>
                            Rian Islam is not only a Developer, but also a dedicated Student
                            and Lifelong learner.I continuously stay updated with the latest
                            industry trends and best practices to ensure that my work remains
                            at the cutting edge of technology.
                        </p>
                    </div>
                </div>
            </div>

            {/* footer navbar and logo start */}
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
            {/* footer navbar and logo end */}

            {/* footer navbar start */}
            <div className="flex justify-center py-3">
                <div className="flex">
                    <Link className="text-grayText px-2" href="/posts">
                        Blogs
                    </Link>
                    <Link className="text-grayText px-2" href="/projects">
                        Project
                    </Link>
                    <Link className="text-grayText px-2" href="/about">
                        About
                    </Link>
                    <Link className="text-grayText px-2" href="/contact">
                        Contact
                    </Link>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="text-white">
                    <p className=" color-textDefault text-customSmall font-customSmall leading-customSmall">
                        © {currentYear}, Built and designed by Rian Islam
                    </p>
                </div>
            </div>

            {/* footer navbar  end */}
        </div>
    );
}
