// load .env file content into process.env by default
require("dotenv").config();

const express = require("express");
const cors = require("cors");
require("./Database/connection")
const routes=require("./Routes/router")
// create express application
const nikeServer = express();

// package that helps us enable cross-origin requests
nikeServer.use(cors());

// convert json to js
nikeServer.use(express.json());
nikeServer.use(routes)

const PORT = 3000 || process.env.PORT;

nikeServer.listen(PORT, () => {
  console.log(
    `Nike server started at Port :${PORT} and waiting for client requests !`
  );
});

nikeServer.get("/", (req, res) => {
  res.send(
    `Nike server started at Port :${PORT} and waiting for client requests !`
  );
});
