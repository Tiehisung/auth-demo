import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/user";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password, fullname } = body;
    console.log("email,pass,fullname", email, password, fullname);

    //Confirm data exists
    if (!email || !password)
      return NextResponse.json({
        message: "All fields are required!",
        success: false,
      });

    //Check duplicate email
    const alreadyExists = await User.findOne({
      email: email.trim().toLowerCase(),
    });
    if (alreadyExists)
      return NextResponse.json({
        message: "User already exists!",
        success: false,
      });

    //Tech 1
    // const salt =await bcrypt.genSalt()
    // const hashedWithSaltPasss =await bcrypt.hash(password, salt);

    //Tech 2 auto gen and hash
    const hashedPass = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      email: email.trim().toLowerCase(),
      password: hashedPass,
      fullname: fullname,
    });
    if (!newUser)
      return NextResponse.json({
        message: "Failed to create user!",
        success: false,
      });
    return NextResponse.json({ message: "User created", success: true });
  } catch (error) {
    return NextResponse.json({ message: error.message, success: false });
  }
}
