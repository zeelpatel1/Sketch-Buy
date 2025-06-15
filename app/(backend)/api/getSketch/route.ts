import { NextResponse} from "next/server";
import { prisma } from "@/app/lib/prisma";

export async function GET(){
    const res=await prisma.sketch.findMany()
    return NextResponse.json(res,{status:200})
}