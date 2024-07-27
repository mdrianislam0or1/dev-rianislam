import { dbConnection } from "@/lib/dbConnection";
import Project from "@/lib/models/projectModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnection();

  try {
    const seedProjects = [
      {
        id: 1,
        color: "from-purple-200 to-green-100",
        title: "The-Missing-Place",
        desc: "The Lost & Found website is a community-driven platform designed to help individuals report and reclaim lost items. This repository contains the frontend code for the Lost & Found website.",
        technology: ["NextJs", "ReactJS", "Redux", "Typescript", "NodeJs", "ExpressJs", "Mongodb", "HTML", "CSS", "TailwindCss"],
        img: "/project/1.png",
        link: "https://the-missing-place.vercel.app/",
        code: "https://github.com/mdrianislam0or1/lost-and-found-frontend"
      },
      {
        id: 2,
        color: "from-orange-200 to-rose-200",
        title: "Book Management",
        desc: "Developed Book Management Dashboard with role-based access control using JWT. Implemented CRUD operations, real-time UI updates with Redux, and efficient data handling with RTK Query.",
        technology: ["ReactJS", "Redux", "Typescript", "NodeJs", "ExpressJs", "Mongodb", "HTML", "CSS", "TailwindCss"],
        img: "/project/2.png",
        link: "https://blind-date-withbook.web.app/",
        code: "https://github.com/mdrianislam0or1/book-management"
      },
      // Add the rest of your projects here...
    ];

    await Project.deleteMany();
    await Project.insertMany(seedProjects);
    return NextResponse.json({
      success: true,
      message: "Database seeded successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error seeding database.", error },
      { status: 500 }
    );
  }
}
