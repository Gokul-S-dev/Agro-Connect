import express from 'express';
import cors from 'cors';
import authRoutes from "./routes/auth.js";
import connectDB from './config/db.js'
import dotenv from 'dotenv';
dotenv.config();
connectDB();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors())

app.use('/api/auth',authRoutes)

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT} `);
    
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
});