import { dbConnect } from "@/db/config/dbConnect";
import { User } from "@/db/schemas/userSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    dbConnect();
    await User.create({ name, email, password });
    return NextResponse.json(
      {
        ok: true,
        message: "User created successfully",
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
