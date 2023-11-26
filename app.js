const express = require("express");
const app = express();
const axios = require("axios");
const port = 3000;

// middleware
app.use(express.static("./public"));
app.use(express.json());

const router = require("./routes/router");
app.use("/", router);

const start = async () => {
  try {
    await app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
