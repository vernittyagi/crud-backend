import express from 'express'
import connectDB from './db.js';
import authRoutes from './routes/auth.js'
import protectedRoutes from './routes/protected.js'
import dotenv from 'dotenv';

dotenv.config();
const app = express();

connectDB();

app.use(express.json());
app.use("/auth", authRoutes)
app.use("/api", protectedRoutes)

app.listen(process.env.PORT, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000 !!!');

})