"use strict";

// Basic express setup:
const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const morgan        = require('morgan');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan('dev'));

const db = require("./lib/in-memory-db");
const DataHelpers = require("./lib/data-helpers.js")(db);
require("./lib/date-adjust")();
const tweetsRoutes = require("./routes/tweets")(DataHelpers);

app.use("/tweets", tweetsRoutes);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
