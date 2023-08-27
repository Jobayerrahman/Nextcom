import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Service from "../../../models/service";



export default async function handler(req,res){
    const {method} =req
    await connectMongoDB()

    switch (method){
        case 'GET':
            try {
                const services = await Service.find({})
                res.status(200).json({ success: true, data: services })
            } catch (error) {
                res.status(400).json({ success: false })
            }

            break
            case 'POST':
              try {
                // const { title, description } = await req.json();
                //const service = await Service.create(req.body) /* create a new model in the database */
                const service = await Service.create(
                    req.body
                  )
                res.status(201).json({ success: true, data: service })
              } catch (error) {
                res.status(400).json({ success: "Nope" })
              }
            
            break
            
            default:
              res.status(400).json({ success: "Nothing"  })
              break
        }
    }
    // const { title, description } = await request.json();
    // await connectMongoDB();
    // await Service.create({title,description});
    // return NextResponse.json({message: "Service Created"}, {status: 201});

// export async function GET(){
//     await connectMongoDB();
//     const services = await Service.find();
//     return NextResponse.json({services})
// }