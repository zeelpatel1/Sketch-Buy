import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req:NextRequest){
  const token=await getToken({req,secret:process.env.NEXTAUTH_SECRET})

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url))
  }

  // normal user if tries to access admin then redirect it to unauthorized 
  // and if normal user mannuly types /unauthorized then dont allow

  if (token.role !== "admin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next()
}

export const config={
  matcher:["/admin/:path*"]
}