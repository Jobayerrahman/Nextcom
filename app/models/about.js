import mongoose, { Schema } from "mongoose";

const aboutSchema = new Schema(
    {
        name:{
            type: String,
            require: [true, 'Please provide the about title.'],
            maxlength: [60, 'Title cannot be more than 60 characters']
        },
        description:{
            type: String,
            require: [true, 'Please provide the about description.'],
            maxlength: [160, 'Title cannot be more than 60 characters']
        },
        icon_url:{
            required: [true, 'Please provide an image url for about.'],
            type: String,
        }
    },
    {
        timestamps: true,
    }
);

const About = mongoose.models.About || mongoose.model('About',aboutSchema);

export default About;