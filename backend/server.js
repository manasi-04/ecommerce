import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes  from './routes/Product.js'

dotenv.config();
const app = express();

app.use(express.json());

app.use('/api/products', productRoutes);

connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));