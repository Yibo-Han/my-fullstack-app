import dbConnect from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export let users = [
    {id: 1, name: "Tom", email: "tom@gmail.com"},
    {id: 2, name: "Jacob", email: "jacob@gmail.com"},
    {id: 3, name: "Richard", email: "richard@gmail.com"},
    {id: 4, name: "Ringo", email: "ringo@gmail.com"},
]
export async function GET(req: NextRequest) {
    return NextResponse.json({userList: users},{status: 200})
}

export async function POST(req: NextRequest) {
    const {name, email} = await req.json();
    // validate the request data
    if (!name) return NextResponse.json({error: "Users Name is required"},{status: 400})
    if (!email) return NextResponse.json({error: "Users Email is required"},{status: 400})
    const newUser = {
        id: users.length + 1,
        name: name,
        email:email,
    }
    users.push(newUser)
    return NextResponse.json({userList: users},{status: 200})
}
