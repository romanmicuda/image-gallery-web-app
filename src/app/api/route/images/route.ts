import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const searchTerm = searchParams.get("q") || "apple";
  const location = searchParams.get("location") || "United Kingdom";
  const gl = searchParams.get("gl") || "gb";
  const num = searchParams.get("num") || "100";
  const autocorrect =
    searchParams.get("autocorrect") === "false" ? false : true;
  const tbs = searchParams.get("tbs") || "qdr:d";

  const headers = {
    "X-API-KEY": process.env.NEXT_APP_API_KEY,
    "Content-Type": "application/json",
  };

  const body = {
    q: searchTerm,
    location: location,
    gl: gl,
    num: Number(num),
    autocorrect: autocorrect,
    tbs: tbs,
  };

  try {
    const response = await axios.post(
      "https://google.serper.dev/images",
      body,
      {
        headers: headers,
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching images:", error);
    const errorMessage =
      axios.isAxiosError(error) && error.response
        ? error.response.data.message || "Failed to fetch images"
        : "An unexpected error occurred";

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
