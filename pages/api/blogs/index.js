import Blog from "../../../app/models/blog";
import connectMongoDB from "../../../app/libs/server";

export default async function handler(req,res){
    const {method} =req
    await connectMongoDB()


    switch (method){
        case 'GET':
            try {
                const blogs = await Blog.find({})
                res.status(200).json({ success: true, data: blogs })
            } catch(error){
                res.status(400).json({ success: false })
            }
            break
        
        case 'POST':
            try{
                const blog = await Blog.create(req.body)
                res.status(200).json({ success: true, data: blog })
            }catch(error){
                res.status(400).json({ success: false })
            }
            break
        
        default:
            res.status(400).json({ success: false })
            break
    }
}