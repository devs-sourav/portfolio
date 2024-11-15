import { connectToDatabase } from "@/config/dbConfig";
import { registerUser } from "@/controllers/authController";
import { NextResponse } from "next/server"; // Import NextResponse

export async function POST(req) {
  await connectToDatabase(); // Connect to MongoDB

  try {
    // Call the controller function and return the response
    const response = await registerUser(req);
    return response; // This will return the response created in registerUser (using NextResponse)
  } catch (error) {
    return NextResponse.json(
      { message: "Error processing the request", error: error.message },
      { status: 500 }
    );
  }
}
