import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import finderRouter from "./routes/finderRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("home");
});

app.use("/finder", finderRouter);

const port = process.env.PORT;
app.listen(port, async () => {
  console.log(`server started at port : ${port}`);
  mongoose
    .set("strictQuery", true)
    .connect(process.env.MONGOOSE_CONNECTION_URI, (err) => {
      !err
        ? console.log(`database connected`)
        : console.log(`error on connecting DB ${err}`);
    });
});
