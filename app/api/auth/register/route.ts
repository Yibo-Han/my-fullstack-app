import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    //connect to database
    await dbConnect();
    //receive users info
    const {username, password, email, phone, bankname, accountname, accountnumber, bsb} = await req.json()
    //use info to create new document
    try {
        const newUser = new User({
            username: username,
            password: password,
            email: email,
            phone: phone,
            accnum: accountnumber,
            bsb: bsb,
            accname: accountname,
            bankname: bankname,
        })
        //save the new document to database
        await newUser.save()
        //return register results
        return NextResponse.json({message: "User created successfully!!", userId: newUser._id},{status: 201})
    } catch (error) {
        return NextResponse.json({error: "Error in creating new user"},{status: 500})
    }
}