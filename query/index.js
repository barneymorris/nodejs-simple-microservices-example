const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/post", (req, res) => {});

app.post("/events", (req, res) => {});

app.listen(9947, () => {
  console.log("Listening on 9947");
});
