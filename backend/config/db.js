import mongoose from "mongoose";

const connectDB = async () => {
    try{
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error('MONGO_URI is not set in the environment');
        }

        await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 10000,
            tls: true,
            tlsAllowInvalidCertificates: process.env.MONGO_TLS_INSECURE === 'true'
        });

        console.log(`MongoDB Atlas Connected`);
    }catch(err){
        console.log('MongoDB connection error:', err);
        process.exit(1);
    }
};

export default connectDB;