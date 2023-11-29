import mongoose from "mongoose";
import dbCon from "@/lib/dbCon";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(request, response) {
  try {
    const body = await request.json();
    await dbCon();
    await Contact.create(body);
    return NextResponse.json(
      { message: "Message sent successfully!." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error, please try again!." },
      { status: 500 }
    );
  }
}
