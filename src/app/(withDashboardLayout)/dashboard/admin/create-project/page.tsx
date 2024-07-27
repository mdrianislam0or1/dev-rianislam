"use client";
import { useCreateAProjectMutation } from "@/redux/api/projectApi";
import { FormEvent, useState } from "react";

export default function CreateProject() {
  const [formData, setFormData] = useState({
    id: "2",
    color: "from-orange-200 to-rose-200",
    title: "Book Management",
    desc: "Developed Book Management Dashboard with role-based access control using JWT.Implemented CRUD operations, real-time UI updates with Redux, and efficient data handling with RTK Query.",
    technology: "ReactJS, Redux, Typescript, NodeJs, ExpressJs, Mongodb, HTML, CSS, TailwindCss",
    img: "/project/2.png",
    link: "https://blind-date-withbook.web.app/",
    code: "https://github.com/mdrianislam0or1/book-management",
  });
  const [createProject, { isLoading }] = useCreateAProjectMutation();

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
      const projectData = {
        ...formData,
        id: parseInt(formData.id, 10),
        technology: formData.technology.split(',').map(tech => tech.trim()),
      };
      await createProject(projectData).unwrap();
    } catch (error) {
      console.error("Error creating Project:", error);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Create a Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="id">
            Project ID
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
          <label className="block text-sm font-semibold mb-1" htmlFor="color">
            Background Color
          </label>
          <input
            type="text"
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="title">
            Project Title
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
            type="text"
            id="desc"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            required
          ></input>
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
            Live Link
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
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1" htmlFor="code">
            Source Code Link
          </label>
          <input
            type="text"
            id="code"
            name="code"
            value={formData.code}
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
            {isLoading ? "Creating..." : "Create Project"}
          </button>
        </div>
      </form>
    </div>
  );
}
