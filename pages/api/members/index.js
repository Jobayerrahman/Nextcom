import Member from "../../../app/models/member";
import connectMongoDB from "../../../app/libs/server";

export default async function handler(req,res){
    const { method } = req
    await connectMongoDB()


    switch (method){
        case 'GET':
            try{
                const members = await Member.find({});
                res.status(200).json({ success: true, data: members })
            }catch(error){
                res.status(400).json({ success: false})
            }
            break

        case 'POST':
            try{
                const member = await Member.create(req.body)
                res.status(200).json({ success: true, data: member })
            }catch(error){
                res.status(400).json({ success: false })
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}