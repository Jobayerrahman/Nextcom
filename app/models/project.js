import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema(
    {
        name:{
            type: String,
            required: [true, 'Please provide the project name'],
            maxlength: [60, 'Project name cannot be more than 60 characters'],
        },
        cetagory:{
            type: String,
            required: [true, 'Please provide the project cetagory name'],
            maxlength: [60,'Project cetagory cannot be more than 60 characters'],
        },
        image_url:{
            type: String,
            required: [true, 'Please provide an image url for Projects.'],
        },
    },
    {
        timestamps: true,
    }
);


const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);

export default Project;