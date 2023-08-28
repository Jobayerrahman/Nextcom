import connectMongoDB from "../../../app/libs/server";
import Service from "../../../app/models/service";

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