import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoutes.js";
import cors from "cors";

config({ path: "./config/.env" });

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Express on Vercel"));

app.use("/api", paymentRoute);

app.get("/api/getKey", (req, res) =>
  res.status(200).json({ key: process.env.RAZORPAY_KEY_ID })
);
