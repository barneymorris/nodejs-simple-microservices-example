const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:9944/events", event);
  axios.post("http://localhost:9945/events", event);
  axios.post("http://localhost:9947/events", event);

  res.send({ status: "OK" });
});

app.listen(9949, () => {
  console.log("Listening on 9949");
});
