import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    let originalUrl = await params.path.join("/");
    if (
      originalUrl.startsWith("https:/") &&
      !originalUrl.startsWith("https://")
    ) {
      originalUrl = originalUrl.replace("https:/", "https://");
    }
    console.log("Original URL:", originalUrl);
    // const originalUrl = decodeURIComponent(encodedUrl);

    // Fetch the stream data from the source
    const response = await axios.get(originalUrl, { responseType: "stream" });

    // Handle HLS playlist files (.m3u8)
    if (
      response.headers["content-type"].includes("application/vnd.apple.mpegurl")
    ) {
      let data = "";
      for await (const chunk of response.data) {
        data += chunk;
      }

      // Replace segment URLs with proxy URLs
      const updatedData = data.replace(/(https?:\/\/[^#\s]+)/g, (match) => {
        return `${request.nextUrl.origin}/api/hls/${encodeURIComponent(match)}`;
      });

      return new NextResponse(updatedData, {
        headers: {
          "Content-Type": "application/vnd.apple.mpegurl",
        },
      });
    }

    // Stream media segments (.ts) directly
    return new NextResponse(response.data, {
      headers: {
        "Content-Type": response.headers["content-type"],
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching HLS stream:", error.message);
    } else {
      console.error("Unknwon error fetching HLS stream:", String(error));
    }
    return new NextResponse("Error fetching HLS stream", { status: 500 });
  }
}
