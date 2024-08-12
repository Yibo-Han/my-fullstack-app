import { NextRequest, NextResponse } from "next/server";
import { users } from "../route";

interface Props {
    params: {id: string};
}

export async function GET(req: NextRequest, props: Props) {
    const userId = parseInt(props.params.id)
    if (userId > 10) return NextResponse.json({error: "Invalid ID"},{status: 400})
    const user = users.find((user:any) => user.id === userId)
    if (!user) return NextResponse.json({error: "No Such User"},{status: 404})
    return NextResponse.json({user: user},{status: 200})
}

export async function PUT(req: NextRequest, props: Props){
    const userId = parseInt(props.params.id)
    const {name, email} = await req.json();
    if (userId > 10 || !name || !email) return NextResponse.json({error: "Invalid Data"},{status: 400})
    const userIndex = users.findIndex((user:any) => user.id === userId)
    if (userIndex === -1) return NextResponse.json({error: "No Such User"},{status: 404})
    users[userIndex] = {id: userId, name: name, email:email}
    return NextResponse.json({user: users},{status: 200})
}
export async function DELETE(req: NextRequest, props: Props){
    const userId = parseInt(props.params.id);
    if (userId > 10) return NextResponse.json({error: "Invalid ID"},{status: 400})
    const userIndex = users.findIndex((user:any) => user.id === userId)
    if (userIndex === -1) return NextResponse.json({error: "No Such User"},{status: 404})
    users.splice(userIndex, 1)
    return NextResponse.json({user: users},{status: 200})
}