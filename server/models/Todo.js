import mongoose from 'mongoose'
const { Schema } = mongoose;

const todoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    tasks: {
        type: [String]
    },
    user_id: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number
    }
})

export default mongoose.model('Todo', todoSchema)
