import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import rootRouter from './routes/index.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const startServer = async () => {
  try {
    mongoose.connect(`${process.env.MONGO_URI}`).then(() => {
      console.log('db connected');
      app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

app.use('/api/v1', rootRouter);
