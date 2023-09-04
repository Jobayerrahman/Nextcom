import mongoose, { Schema } from "mongoose";


const testimonialSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide the testimonial title.'],
            maxlength: [60, 'Title cannot be more than 60 characters'],
        },
        degisnation: {
            type: String,
            required: [true, 'Please provide the testimonial degisnation.'],
            maxlength: [60, 'Degisnation cannot be more than 60 characters'],
        },
        description: {
            type: String,
            required: [true, 'Please provide the testimonial description.'],
            maxlength: [100, 'Description cannot be more than 100 characters'],
        },
        image_url: {
            required: [true, 'Please provide an image url for testimonial.'],
            type: String,
          },
        rating: {
            required: [true, 'Please provide rating our company.'],
            type: String,
          },
    },
    {
        timestamps: true,
    }
);

const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema)


export default Testimonial;