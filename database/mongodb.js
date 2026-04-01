import  mongoose from 'mongoose'
import {DB_URL, NODE_ENV} from "../config/env.js";

console.log('DB_URL:', DB_URL ? 'exists' : 'MISSING');
console.log('NODE_ENV:', NODE_ENV);

if (!DB_URL) {
    throw new Error('MongoDB URL is missing');
}

const connectToMongoDB = async () => {
    try {
       await mongoose.connect(DB_URL)
        console.log(`MongoDB Connected to ${NODE_ENV} mode`);
    } catch (error) {
        console.log('Error details:', error.message);
        console.log('Error connecting to MongoDB');
        if (NODE_ENV !== 'production') {
            process.exit(1);
        }
    }
}

export  default  connectToMongoDB;