import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
    content: {
        type: String,
        required: true
    }
},
    { timestamps: true })


export default mongoose.model('Blog', blogSchema)