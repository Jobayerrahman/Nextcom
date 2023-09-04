import Testimonial from "../../../app/models/testimonial";
import connectMongoDB from "../../../app/libs/server";

export default async function handler(req,res){
    const { method } = req
    await connectMongoDB()


    switch (method){
        case 'GET':
            try{
                const testimonials = await Testimonial.find({});
                res.status(200).json({ success: true, data: testimonials })
            }catch(error){
                res.status(400).json({ success: false})
            }
            break

        case 'POST':
            try{
                const testimonial = await Testimonial.create(req.body)
                res.status(200).json({ success: true, data: testimonial })
            }catch(error){
                res.status(400).json({ success: false })
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}