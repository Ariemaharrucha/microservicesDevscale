import { model, Schema } from "mongoose";

const threadSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    post: {
        type: String,
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    }
})

export const Thread = model("Thread", threadSchema)