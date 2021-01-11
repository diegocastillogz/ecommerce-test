import express from "express";
import cors from "cors";
import "module-alias/register";
import makeExpressCallback from "@expressCallback";
import { getAllItems, getOneItemById } from "@controllers";
import dotenv from "dotenv";
dotenv.config();

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT;

const options = {
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "X-Access-Token",
  ],
  methods: "GET,OPTIONS,PUT,POST,DELETE",
};

app.use(cors(options));

app.use(express.json());

app.listen(port, () => {
  console.log(`Middleware running at http://localhost:${port} 🚀`);
});

app.get("/api/items", makeExpressCallback(getAllItems));
app.get("/api/items/:itemId", makeExpressCallback(getOneItemById));
