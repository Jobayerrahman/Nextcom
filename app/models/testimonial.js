import mongoose, { Schema } from "mongoose";


const testimonialSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide the service title.'],
            maxlength: [60, 'Title cannot be more than 60 characters'],
        },
        degisnation: {
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
        rating: {
            required: [true, 'Please provide an image url for serveice.'],
            type: String,
          },
    },
    {
        timestamps: true,
    }
);

const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', blogSchema)


export default Testimonial;