import mongoose, { Schema } from "mongoose";


const memberSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide the member title.'],
            maxlength: [60, 'Title cannot be more than 60 characters'],
        },
        responsibility: {
            type: String,
            required: [true, 'Please provide the member title.'],
            maxlength: [60, 'Title cannot be more than 60 characters'],
        },
        description: {
            type: String,
            required: [true, 'Please provide the member Title.'],
            maxlength: [100, 'Description cannot be more than 100 characters'],
        },
        image_url: {
            required: [true, 'Please provide an image url for member.'],
            type: String,
          },
    },
    {
        timestamps: true,
    }
);

const Member = mongoose.models.Member || mongoose.model('Member', memberSchema)


export default Member;