import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
// jhkjsdbjdbsjbdgithdjsdhjhffdjsd

app.get('/api', (req, res) => {
    res.send('API is running...');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));