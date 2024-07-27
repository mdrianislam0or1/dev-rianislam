import { dbConnection } from "@/lib/dbConnection";
import Project from "@/lib/models/projectModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnection();

  try {
    const seedProjects = [
      {

        id: 1,
        color: " from-purple-200 to-green-100",
        title: "The-Missing-Place",
        desc: "The Lost & Found website is a community-driven platform designed to help individuals report and reclaim lost items. This repository contains the frontend code for the Lost & Found website.",
        technology: "NextJs, ReactJS, Redux, Typescript, NodeJs, ExpressJs, Mongodb, HTML, CSS, TailwindCss",
        img: "/project/1.png",
        link: "https://the-missing-place.vercel.app/",
        code: "https://github.com/mdrianislam0or1/lost-and-found-frontend"
      },
      {
        id: 2,
        color: " from-orange-200 to-rose-200",
        title: "Book Management",
        desc: "Developed Book Management Dashboard with role-based access control using JWT.Implemented CRUD operations, real-time UI updates with Redux, and efficient data handling with RTK Query.",
        technology: "ReactJS, Redux, Typescript, NodeJs, ExpressJs, Mongodb, HTML, CSS, TailwindCss",
        img: "/project/2.png",
        link: "https://blind-date-withbook.web.app/",
        code: "https://github.com/mdrianislam0or1/book-management"
      },
      {
        id: 3,
        color: " from-rose-200 to-purple-200",
        title: "Parcel-And-Prose",
        desc: " This project is an e-commerce application built using Next.js and MongoDB. It allows users to browse products, add them to a shopping cart, and place orders. Additionally, it includes an admin dashboard for order management. Features Implemented Frontend Development",
        technology: "Nextjs, ReactJS, Redux, Typescript, NodeJs, ExpressJs, Mongodb, HTML, CSS, TailwindCss",
        img: "/project/3.png",
        link: "https://parcel-and-prose.vercel.app/",
        code: "https://github.com/mdrianislam0or1/parcel-and-prose"
      },
      {
        id: 4,
        color: " from-pink-100 to-orange-200",
        title: "Invoi-Cyborg",
        desc: " This is a simple web application for managing car rentals. It allows users to make reservations, generate invoices, and print them. Features ",
        technology: "Nextjs, ReactJS, Redux, Typescript, NodeJs, ExpressJs, Mongodb, HTML, CSS, TailwindCss",
        img: "/project/4.png",
        link: "https://invoi-cyborg-client.vercel.app/",
        code: "https://github.com/mdrianislam0or1/invoi-cyborg"
      },

      {
        id: 5,
        color: " from-indigo-100 to-purple-200",
        title: "Glacial-Glam",
        desc: "Built using React.js and Tailwind CSS for a modern and responsive user interface. Implements features such as user authentication, product listing, shopping cart management, and order processing. Utilizes Redux for state management and Axios for handling asynchronous HTTP requests.Developed using Node and Express.js for building a robust funtional .",
        technology: "ReactJS, Redux, Typescript, NodeJs, ExpressJs, Mongodb, HTML, CSS, TailwindCss",
        img: "/project/5.png",
        link: "https://glacial-glam.web.app/",
        code: "https://github.com/mdrianislam0or1/glacialglam"
      },

      {
        id: 6,
        color: " from-pink-200 to-orange-200",
        title: "Contacts Management",
        desc: "This is the frontend code for a contacts management application, built using React.js, Redux, and TypeScript. It allows users to manage their contacts by adding, viewing, updating, and deleting contact details. ",
        technology: "ReactJS, Redux, Typescript, NodeJs, ExpressJs, Mongodb, HTML, CSS, TailwindCss",
        img: "/project/6.png",
        link: "https://contacts-management-sys.web.app/",
        code: "https://github.com/mdrianislam0or1/contacts-management-frontend"
      },

      {
        id: 7,
        color: "from-rose-200 to-rose-200",
        title: "Order Mingle",
        desc: "Developed a Node.js Express application using TypeScript and MongoDB with Mongoose for user data and order management.Implemented user management functionalities including creation, retrieval, updating, and deletion of users with secure password storage.",
        img: "/project/7.png",
        technology: "ReactJS, Redux, NodeJs, ExpressJs, MongoDB, HTML, CSS, TailwindCss.",
        link: "https://harmonious-klepon-c6b6f0.netlify.app/",
        code: "https://github.com/mdrianislam0or1/OrderMingle"
      },

      {
        id: 8,
        color: "from-orange-200 to-rose-200",
        title: "Portfolio Version 2",
        desc: "Developed a responsive portfolio website using React, Tailwind CSS, and Framer Motion.Implemented a dark mode toggle feature using React Context API and local storage for persistent user preferences.",
        img: "/project/8.png",
        technology: "ReactJS, TailwindCss, Framer Motion.",
        link: "https://rianislam-me.web.app/",
        code: "https://rianislam-me.web.app/"
      },
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
