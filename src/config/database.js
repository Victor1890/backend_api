import mongoose from "mongoose";
import config from "./config";

mongoose
  .connect(config.DB_CONNECTION, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log(`DB is connect`))
  .catch((error) => console.log(`Error in connection`));
