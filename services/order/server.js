import express from 'express';
import orderRoutes from './routes/orderRoutes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: `${__dirname}/.env` });

const app = express();
const port = process.env.PORT || 8004;
const url = process.env.MONGODB_URI;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: false,
})
.then(() => console.log('Database Connected Successfully'))
.catch(err => console.log(err));

app.use(express.json());

app.use('/api/order', orderRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
