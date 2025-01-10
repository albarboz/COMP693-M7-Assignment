import mongoose from "mongoose";
import {} from 'dotenv/config'

const uri = process.env.DB

const connectDB = async () => {
    try {
        await mongoose.connect(uri)
        console.log('connect.js: mongoose schema working')
    } catch (err) {
        console.error('Error connecting to MongoDB')
    }
}

export default connectDB

