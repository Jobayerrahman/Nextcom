import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Service from "../../../models/service";



export async function POST(request){
    const { title, description } = await request.json();
    await connectMongoDB();
    await Service.create({title,description});
    return NextResponse.json({message: "Topic Created"}, {status: 201});
}