import connectMongoDB from "../../../app/libs/server";
import TopBanner from "../../../app/models/banner";


export default async function handler(req,res){
    const {method} = req
    await connectMongoDB()

    switch(method){
        case 'GET':
            try {
                const topbanners = await TopBanner.find({})
                res.status(200).json({ success: true, data: topbanners })
            }catch (error) {
                res.status(400).json({ success: "Geting TopBanner data failed" })
            }
            break
        
        case 'POST':
            try {
                const topbanners = await TopBanner.create(req.body)
                res.status(201).json({ success: true, data: topbanners })
            } catch (error) {
                res.status(400).json({ success: "Posting TopBanner data failed" })
            }
            break
        
        default:
            res.status(400).json({ success: false  })
            break
    }
}