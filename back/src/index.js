import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.use("/api/v1/auth", authRouter);

app.listen(process.env.PORT, () =>
  console.log(`🚀 http://localhost:${process.env.PORT}`)
);
