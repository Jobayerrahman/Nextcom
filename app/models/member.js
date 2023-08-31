import mongoose, { Schema } from "mongoose";


const memberSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide the service title.'],
            maxlength: [60, 'Title cannot be more than 60 characters'],
        },
        responsibility: {
            type: String,
            required: [true, 'Please provide the service title.'],
            maxlength: [60, 'Title cannot be more than 60 characters'],
        },
        description: {
            type: String,
            required: [true, 'Please provide the service Title.'],
            maxlength: [100, 'Description cannot be more than 100 characters'],
        },
        image_url: {
            required: [true, 'Please provide an image url for serveice.'],
            type: String,
          },
    },
    {
        timestamps: true,
    }
);

const Member = mongoose.models.Member || mongoose.model('Member', blogSchema)


export default Member;