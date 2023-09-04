import mongoose, { Schema } from "mongoose";

const processSchema = new Schema(
    {
        name:{
            type: String,
            required: [true, 'Please provide the process name'],
            maxlength: [60, 'Process name cannot be more than 60 characters'],
        },
        cetagory:{
            type: String,
            required: [true, 'Please provide the process cetagory name'],
            maxlength: [60,'Process cetagory cannot be more than 60 characters'],
        },
        image_url:{
            type: String,
            required: [true, 'Please provide an image url for process.'],
        },
    },
    {
        timestamps: true,
    }
);


const Process = mongoose.models.Process || mongoose.model('Process', processSchema);

export default Process;