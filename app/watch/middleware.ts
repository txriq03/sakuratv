// import axios from "axios";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export async function middleware(req: NextRequest) {
//     const { url } = req;
//     const epNum = new URL(url).searchParams.get("ep");

//     if (!epNum) {
//         try {
//             const response = await axios.get(process.env.NEXT_PUBLIC_API_URL + "/api/v2/hianime/anime/" + url + "/episodes")
//         } catch (err) {
//             console.error("Error:", err);
//         }
//     }
// }