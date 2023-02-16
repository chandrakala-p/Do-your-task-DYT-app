import User from '../models/User.js'
import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(400).json({
            success: false,
            message: 'did not find auth token'
        })
    }
    const token = authorization.split(' ')[1]
    try {
        const { _id, name } = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {
            userid: await User.findOne({ _id }).select('_id'),
            name: name
        }
        next()
    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}
export default auth