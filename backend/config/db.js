import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connection established to mongoDB SUCCESS...');
    } catch (err) {
        console.error('Failed to establish connection to mongoDB FAILED...');
        process.exit(1);
    }
}