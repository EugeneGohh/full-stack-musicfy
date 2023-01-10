/* eslint-disable @next/next/no-server-import-in-page */
import { NextResponse } from "next/server";

const signedinPages = ["/", "/playlist", "/library"];

export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.MUSICFY_ACCESS_TOKEN;

    if (!token) {
      const url = req.nextUrl.clone();
      url.pathname = "/signin";
      return NextResponse.rewrite(url);
    }
  }
}
