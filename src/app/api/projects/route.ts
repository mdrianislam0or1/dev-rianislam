import { NextRequest, NextResponse } from "next/server";
import { dbConnection } from "@/lib/dbConnection";
import Project from "@/lib/models/projectModel";

export async function GET(request: NextRequest) {
  await dbConnection();

  try {
    const projects = await Project.find({});
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  await dbConnection();

  try {
    const data = await request.json();
    const project = await Project.create(data);
    return NextResponse.json({ success: true, data: project }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
