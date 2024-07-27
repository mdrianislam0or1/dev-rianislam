import { dbConnection } from "@/lib/dbConnection";
import Blog from "@/lib/models/blogModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnection();

  try {
    const data = await request.json();
    const blog = await Blog.create(data);
    return NextResponse.json({ success: true, data: blog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}

export async function GET(request: NextRequest) {
  await dbConnection();

  try {
    const projects = await Blog.find({});
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
