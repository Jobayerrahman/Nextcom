import { services } from "../../app/data/service";

export default function handler(req,res){
    res.status(200).json(services);
}