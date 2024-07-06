import Post from "@/models/Post";
import connect from "@/utils/db";
const { NextResponse } = require("next/server");

export const GET = async (request) => {
  try {
    await connect();

    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (err) {
    return new NextResponse("Database error!", {
      status: 500,
    });
  }
};
