import connectDB from './config/db.js';
import app from './app.js'
import dotenv from 'dotenv';

dotenv.config();

connectDB();

app.listen(process.env.PORT, '127.0.0.1', () => {
    console.log('Listening on 127.0.0.1:3000 !!!');
})