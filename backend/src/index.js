import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

const app = express();

// connecting with db
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Listning at port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
