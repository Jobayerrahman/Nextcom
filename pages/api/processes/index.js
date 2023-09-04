import Process from "../../../app/models/process";
import connectMongoDB from "../../../app/libs/server";

export default async function handler(req,res){
    const { method } = req
    await connectMongoDB()


    switch (method){
        case 'GET':
            try{
                const processes = await Process.find({});
                res.status(200).json({ success: true, data: processes })
            }catch(error){
                res.status(400).json({ success: false})
            }
            break

        case 'POST':
            try{
                const process = await Process.create(req.body)
                res.status(200).json({ success: true, data: process })
            }catch(error){
                res.status(400).json({ success: false })
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}