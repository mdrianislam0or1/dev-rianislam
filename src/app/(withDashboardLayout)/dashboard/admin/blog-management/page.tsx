"use client";
import { useCreateABlogMutation } from "@/redux/api/projectApi";
import { useState } from "react";

// Define a type for the form data
type BlogFormData = {
  id: number; // Change this to number for ID
  title: string;
  desc: string;
  technology: string; // This will be a comma-separated string
  img: string;
  link: string;
};

export default function CreateBlog() {
  const [formData, setFormData] = useState<BlogFormData>({
    id: 3, // ID as number
    title: "Getting Started with TypeScript",
    desc: "A beginner's guide to TypeScript, covering its features, advantages, and how to get started.",
    technology: "TypeScript, JavaScript, Web Development", // String format
    img: "/blog/6.jpg",
    link: "https://example.com/getting-started-with-typescript",
  });

  const [createBlog, { isLoading }] = useCreateABlogMutation();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const blogData = {
        ...formData,
        technology: formData.technology
          .split(',')
          .map((tech: string) => tech.trim())
          .filter((tech: string) => tech.length > 0), // Remove any empty strings
      };
      await createBlog(blogData).unwrap();
    } catch (error) {
      console.error("Error creating Blog:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Create a Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="id">
            Blog ID
          </label>
          <input
            type="number"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="title">
            Blog Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="desc">
            Description
          </label>
          <input
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="technology">
            Technology (comma-separated)
          </label>
          <input
            type="text"
            id="technology"
            name="technology"
            value={formData.technology}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="img">
            Image URL
          </label>
          <input
            type="text"
            id="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="link">
            Blog Link
          </label>
          <input
            type="text"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}
