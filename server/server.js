import app from './app.js'
import connectDB from "./config/db.js";
connectDB()
let port = process.env.PORT || 4000
app.listen(port, () => {
    console.log('server is up and running on port ')
})