import dotenv from "dotenv";
dotenv.config();

import express = require("express");
import cors from "cors";

import itemRouter from "./routers/item.router";
import userRouter from "./routers/user.router";
import orderRouter from "./routers/order.router";

import { dbConnect } from "./configs/database.configs";
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({ credentials: true, origin: ["http://localhost:4200"] }));

app.use("/api/items", itemRouter)
app.use("/api/users", userRouter)
app.use("/api/orders", orderRouter)

const port = 5000;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
