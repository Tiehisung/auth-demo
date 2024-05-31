import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/user";

//Fetch users
export async function GET() {
  const users = await User.find();
  return NextResponse.json(users);
}

//Login
export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password } = body;
    const dbUser = await User.findOne({ email });
    if (!dbUser)
      return NextResponse({ message: "User not found", success: false });

    //Compare passwords
    const matchedPass = bcrypt.compare(password, dbUser.password);

    if (!matchedPass)
      return NextResponse.json({
        message: "Invalid password!",
        success: false,
      });
    return NextResponse.json({ message: "User matched", success: true });
  } catch (error) {
    return NextResponse.json({ message: error.message, success: false });
  }
}
