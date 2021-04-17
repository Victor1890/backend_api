// import "core-js/stable";
// import "regenerator-runtime/runtime";

import "core-js/stable";

import app from "./app";
import "./config/database";

const port = process.env.PORT || 4000;

const init = async () => {
  await app.listen(port);
  console.log(`Listen server on port ${port}`);
};
init();
