require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const routes = require("./routes/route");
const { cors } = require("./middlewares/cors");
const { mainMiddleware } = require("./middlewares/main-middleware");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors);

app.use("/help", mainMiddleware, routes);

module.exports = app;
