import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/mongodb";
import Post from "@/app/models/Post";

export async function POST(req) {
  // Connect to MongoDB
  await dbConnect();

  try {
    // Parse incoming JSON request body
    const postData = await req.json();
    const postcontent = postData.post;

    if (!postcontent) {
      return NextResponse.json(
        {
          result: "Post content not found",
          success: false,
        },
        { status: 400 }
      );
    }

    // Save the new post to MongoDB
    const newPost = new Post({ content: postcontent }); // Adjust field name as per schema
    const savedPost = await newPost.save();

    return NextResponse.json(
      {
        success: true,
        data: savedPost,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving post:", error);
    return NextResponse.json(
      {
        success: false,
        result: "Error saving post",
      },
      { status: 500 }
    );
  }
}
