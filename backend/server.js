import dotenv from 'dotenv';
import express from 'express';
import cors from "cors";
import { connectDB } from './config/db.js';

// Import Routers
import userRoutes from "./routes/user.route.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes Middleware
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    connectDB();
    console.log("Sever started at http://localhost:5000");
});
