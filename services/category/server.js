import express from 'express';
import categoryRoutes from './routes/categoryRoutes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: `${__dirname}/.env` });

const app = express();
const port = process.env.PORT || 8002;  // You can change this to any available port you want
const url = process.env.MONGODB_URI;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Database Connected Successfully'))
.catch(err => console.log(err));

app.use(express.json());

// CORS-Middleware-Konfiguration
app.use(cors({
  origin: 'http://localhost:3000',  // replace with your actual origin
  credentials: true,
}));

app.use('/api/category', categoryRoutes);

const server = app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

export default server;
