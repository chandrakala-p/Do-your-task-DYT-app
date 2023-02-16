import mongoose from 'mongoose'

const connectDB = async function () {
    try {
        await mongoose.connect(process.env.MONGODBURI);
        console.log('DB connection success')
    } catch (error) {
        throw new Error(error.message)
    }
}

export default connectDB