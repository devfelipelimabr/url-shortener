import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        console.info('Connecting MongoDB...');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

export default connectDB;