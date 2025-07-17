import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/User";
import { hash } from "bcryptjs";

export async function POST(req) {
  const { username, password, role } = await req.json();
  if (!username || !password || !role) {
    return Response.json(
        { error: "Missing fields" }, { status: 400 });
  }

  await connectDB();

  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return Response.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await hash(password, 10);
  await User.create({ username, password: hashedPassword, role });

  return Response.json({ success: true }, { status: 201 });
}
