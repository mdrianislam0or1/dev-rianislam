"use client";
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Loading from "@/components/UI/StyleComponent/Loading";
import { useGetAllBlogQuery } from '@/redux/api/projectApi';

export default function Blogs() {
    const { data, error, isLoading } = useGetAllBlogQuery({});
    if (isLoading) return <Loading />;
    if (error) return <div>Error: {error.toString()}</div>;

    return (
        <div className="container mx-auto p-4 animate-fadeIn">
            <h1 className="text-4xl font-bold mb-8 text-center">Blogs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data?.map((blog: any) => (
                    <div key={blog._id} className="transform hover:scale-105 transition-transform duration-300 border rounded-lg p-4 shadow-md hover:shadow-lg">
                        <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 hover:scale-105" />
                        <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                        <p className="text-gray-700 mb-4">{blog.desc}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {blog.technology.map((tech: any, index: any) => (
                                <span key={index} className="bg-blue-200 text-blue-800 px-2 py-1 rounded-md text-sm">{tech}</span>
                            ))}
                        </div>
                        <a href={blog.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
