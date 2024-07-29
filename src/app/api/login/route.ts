import { dbConnection } from "@/lib/dbConnection";
import User from "@/lib/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  await dbConnection();

  try {
    const { email, password } = await request.json();
    console.log("Received login request for email:", email);

    const user = await User.findOne({ email });
    if (!user) {
      console.error("User not found:", email);
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 400 }
      );
    }

    console.log("User found:", user);

    const isMatch = await user.comparePassword(password);
    console.log("Password match result:", isMatch);

    if (!isMatch) {
      console.error("Password mismatch for user:", email);
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    console.log("User logged in successfully:", email);
    return NextResponse.json(
      { success: true, data: { user, token } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json(
      { success: false, message: "Error logging in", error },
      { status: 500 }
    );
  }
}
