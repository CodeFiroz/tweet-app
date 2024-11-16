import dbConnect from "@/app/lib/mongodb";
import Post from "@/app/models/Post";

// export async function POST(request) {
//   await dbConnect();

//   try {
//     const { content } = await request.json(); // Parse JSON body data

//     const newPost = new Post({ content });
//     const savedPost = await newPost.save();

//     return new Response(JSON.stringify({ success: true, data: savedPost }), {
//       status: 201,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   } catch (error) {
//     console.error(error);
//     return new Response(
//       JSON.stringify({ success: false, message: 'Error saving post' }),
//       { status: 400, headers: { 'Content-Type': 'application/json' } }
//     );
//   }
// }

// export async function GET() {
//   return new Response(JSON.stringify({ message: "Method Not Allowed" }), {
//     status: 405,
//     headers: { 'Content-Type': 'application/json' },
//   });
// }

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