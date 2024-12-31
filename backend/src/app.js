import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

// Cross-Origin Resource Sharing
// cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));

app.use(express.urlencoded({ extended: true, limit: "16kb" }));

app.use(express.static("public"));

export { app };

// https://hnkcybersec.com ----> https://192.168.1.1/api/v1

// * ---> any one can access

// payloads--> json data
