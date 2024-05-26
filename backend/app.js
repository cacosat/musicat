import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import spotifyRoutes from './routes/spotify.js'

// Load environment variables
dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000' // only allows request from frontend hosted at localhost:3000
}))

// Connect to MongoDB
// connectDB();

// Middleware
app.use(express.json());

app.get('/api', (req, res) => {
    res.send('API is running...');
});

app.use('/api/spotify', spotifyRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));