import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
import JWT from 'jsonwebtoken'
const { Schema } = mongoose

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,

        unique: [true, 'user already present']
    },
    password: {
        type: String,

    },
})
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10)
    next()
})
userSchema.methods = {
    comparePassword: async function (enteredPassword) {
        return await bcrypt.compare(enteredPassword, this.password)
    },
    generateToken: function () {
        return JWT.sign(
            {
                _id: this._id,
                name: this.name
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRY
            }
        )
    },
}
export default mongoose.model('User', userSchema)