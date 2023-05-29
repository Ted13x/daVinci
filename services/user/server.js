import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: `${__dirname}/.env` });

const app = express();
const port = process.env.PORT || 8000;
const url = process.env.MONGODB_URI;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database Connected Successfully'))
.catch(err => console.log(err));

// app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000', // TODO: Change to real url in production
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/user', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
