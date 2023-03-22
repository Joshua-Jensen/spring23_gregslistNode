import mongoose from "mongoose";
const Schema = mongoose.Schema

export const HouseSchema = new Schema(
    {
        year: { type: Number, required: true },
        price: { type: Number, required: true, min: 1, max: 1000000 },
        leakyPipes: { type: Boolean, default: true },
        bedrooms: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
        description: { type: String, maxLength: 500 },
    },
    { timestamps: true }

)