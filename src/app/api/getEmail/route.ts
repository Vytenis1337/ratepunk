import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const response = await fetch(
    `https://api.jsonbin.io/v3/b/${process.env.NEXT_PUBLIC_BIN_ID}/latest`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": process.env.NEXT_PUBLIC_API_KEY,
        "X-JSON-Path": "$..email",
      } as HeadersInit,
    }
  );

  const data = await response.json();
  console.log("DATA IS:", data);

  if (!data.record || !Array.isArray(data.record)) {
    console.error("data.record is undefined or not an array:", data.record);
    return new NextResponse("Record not found or invalid format", {
      status: 404,
    });
  }

  const email = data.record[0];
  console.log(email);
  return new NextResponse(JSON.stringify(email), { status: 200 });
};
