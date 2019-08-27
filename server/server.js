const express = require("express");
const server = express();
const data = require("./data");
const cors = require("cors");

server.use(cors());
server.get("/data", (req, res) => {
  console.log(" ===> requesting ");
  res.json({ data: data });
});

server.listen(8000, () => {
  console.log("=== server is listening on port 8000 ====");
});
