import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { hasCookie, getCookie } from "cookies-next";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (hasCookie("fromWedding", { cookies })) {
    const url = new URL(request.nextUrl.origin);
    url.searchParams.set("guest", getCookie("guestId", { cookies }) as string);
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: "/wedding",
};
