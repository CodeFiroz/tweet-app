import dbConnect from "@/app/lib/mongodb";
import Post from "@/app/models/Post";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'POST') {
    try {
      const content = req.body;

      const newPost = new Post({ content });
      const savedPost = await newPost.save();

      res.status(201).json({ success: true, data: savedPost });
    } catch (error) {
      console.error(error);
      res.status(400).json({ success: false, message: 'Error saving post' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}