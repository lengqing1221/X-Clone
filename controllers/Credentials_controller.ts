import connectDB from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/User.model";

const handleUserCreation = async ({ email, password }: { email: string; password: string }) => {
  try {
    // Ensure the database is connected
    await connectDB();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("User already exists");
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    } else {
      // Create a new user
      const newUser = new User({ email, password });
      await newUser.save();

      console.log("New user created:", newUser);
      return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ message: "Error creating user" }, { status: 500 });
  }
};

export default handleUserCreation;
