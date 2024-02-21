import { dbConnect } from "@/db/config/dbConnect";
import { User } from "@/db/schemas/userSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    dbConnect();
    let fetchedUser = await User.findOne({ email, password });
    return NextResponse.json(
      {
        ok: true,
        user: fetchedUser,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("POST ~ error:", error.message);
    return NextResponse.json(
      { error: error.message, ok: false },
      { status: 500 }
    );
  }
}
