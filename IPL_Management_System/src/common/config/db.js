import mongoose from 'mongoose';
import 'dotenv/config';

// console.log(process.env.MONGO_URI);

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);    //Establish a connection between Node.js app and mongoDB
    
    //what is inside this conn
    console.log(`MongoDB connected: ${conn.connection.host}`)
} 

export default connectDB;