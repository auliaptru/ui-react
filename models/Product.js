import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 60,
        },
        desc: {
            type: String,
            required: true,
            maxLength: 200,
        },
        img: {
            type: String,
            required: true,
        },
        prices: {
            type: [Number],
            required: true,
        },
        cat: {
            type: String,
            required: true,
        },
        extraOptions: {
            type: [
                {
                    text: { type: String },
                    price: { type: Number },
                },
            ],
            default: null,
        },
    },
    { timestamps: true }
);

export default mongoose.models.Product ||
    mongoose.model('Product', ProductSchema);
