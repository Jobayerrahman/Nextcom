import About from "../../../app/models/about";
import connectMongoDB from "../../../app/libs/server";

export default async function handler(req,res){
    const { method } = req
    await connectMongoDB()


    switch (method){
        case 'GET':
            try{
                const abouts = await About.find({});
                res.status(200).json({ success: true, data: abouts })
            }catch(error){
                res.status(400).json({ success: false})
            }
            break

        case 'POST':
            try{
                const about = await About.create(req.body)
                res.status(200).json({ success: true, data: about })
            }catch(error){
                res.status(400).json({ success: false })
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}