import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from "cors";
import { ThreadRoutes } from './routes/threads.routes';
import { middleWareCheckorigin } from './middleware/threads.middleware';

dotenv.config();

const app = express();
app.use(express.json());

app.use(middleWareCheckorigin);
app.use('/',ThreadRoutes);

mongoose.connect(process.env.MONGO_URI as string)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(8001, () => {
    console.log('Server is running on port 8001');
})