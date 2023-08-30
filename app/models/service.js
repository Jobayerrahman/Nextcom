import mongoose, { Schema } from "mongoose";

const serviceSchema = new Schema(
    {
        title: {
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


const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema)


export default Service;