import dot from 'dotenv';
dot.config({path:'./.env'}).parsed;
import mongoose from 'mongoose'; 

const connectMongoDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to Database.");
    } catch(error){
        console.log(error);
    }
};

console.log(dot.config());

export default connectMongoDB;