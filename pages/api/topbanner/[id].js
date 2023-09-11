import connectMongoDB from "../../../app/libs/server";
import TopBanner from "../../../app/models/banner";

export default async function handler(req,res){
    const { query: {id} ,method } =req;
    await connectMongoDB()

    switch(method){
        case 'GET':
            try{
                const topbanner = await TopBanner.findById(id)
                if(!topbanner) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: topbanner })
            } catch(error){
                res.status(400).json({ success: false })
            }
            break
            
        case 'PUT':
            try {
                const topbanner = await TopBanner.findByIdAndUpdate(id, req.body,{
                    new: true,
                    runValidators: true,
                })
                if(!topbanner){
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: topbanner })
            } catch(error){
                res.status(400).json({ success: false })
            }
            break

        case 'DELETE':
            try{
                const deletedTopbanner = await TopBanner.deleteOne({ _id:id })
                if(!deletedTopbanner) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: {} })
            }catch(error){
                res.status(400).json({ success: false })
            }
            break
        
        default:
            res.status(400).json({ success: false })
            break
    }
}