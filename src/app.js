import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

//import routers
import ProductsRouter from "./routers/products.routes";

const app = express();

//configurations server
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use(helmet());

//routers
app.use("/api/products", ProductsRouter);

export default app;
