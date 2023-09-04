import Project from "../../../app/models/project";
import connectMongoDB from "../../../app/libs/server";

export default async function handler(req,res){
    const { method } = req
    await connectMongoDB()


    switch (method){
        case 'GET':
            try{
                const projects = await Project.find({});
                res.status(200).json({ success: true, data: projects })
            }catch(error){
                res.status(400).json({ success: false})
            }
            break

        case 'POST':
            try{
                const project = await Project.create(req.body)
                res.status(200).json({ success: true, data: project })
            }catch(error){
                res.status(400).json({ success: false })
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}