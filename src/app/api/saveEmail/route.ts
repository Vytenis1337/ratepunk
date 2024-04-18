import { NextRequest, NextResponse } from "next/server";

export const PUT = async (req: NextRequest) => {
  if (req.method !== "PUT") {
    return new NextResponse("Method not allowed", { status: 405 });
  }

  const data = await req.json();
  console.log(data);

  const email = data.email;

  console.log("EMAIL IS:", email);

  if (!data) {
    return new NextResponse("Data is required", { status: 400 });
  }

  try {
    const response = await fetch(
      `https://api.jsonbin.io/v3/b/${process.env.NEXT_PUBLIC_BIN_ID}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": process.env.NEXT_PUBLIC_API_KEY,
        } as HeadersInit,
        body: JSON.stringify({
          email: email,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to save email");
    }

    return new NextResponse("Email saved successfully", { status: 200 });
  } catch (error) {
    console.error("Error saving email:", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
};
