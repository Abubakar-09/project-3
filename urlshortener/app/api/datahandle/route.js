import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/connectdb";
import Url from "@/models/url";


export async function GET(){
  await ConnectDB();
  // Get All the data from database
  const DbData = await Url.find();
  return NextResponse.json(DbData)
}

export async function POST(req) {
  let body = await req.json();
  await ConnectDB();

  // Check if either the original URL or custom URL exists
  const CheckUrlExistInDb = await Url.findOne({ url: body.url });
  const CheckcustomUrlExistInDb = await Url.findOne({ customUrl: body.customUrl });

  if (CheckUrlExistInDb || CheckcustomUrlExistInDb) {
    return NextResponse.json({ success: false, message: "URL or custom URL already exists" });
  }

  // Create a new URL entry
  const newUrl = new Url(body);
  await newUrl.save();

  console.log("New URL saved:", newUrl);
  return NextResponse.json({ success: true, data: newUrl });
}
