import express from 'express'
import connectDB from './db.js';
import authRoutes from './routes/auth.js'
const app = express();

connectDB();

app.use(express.json());
app.use("/auth", authRoutes)

app.listen(3000, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000 !!!');

})