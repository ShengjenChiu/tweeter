"use strict";

// Basic express setup:
const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();
const morgan        = require('morgan');


//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan('dev'));

//import dependencies for the project
const db = require("./lib/in-memory-db");
const DataHelpers = require("./lib/data-helpers.js")(db);
require("./lib/date-adjust")();
const tweetsRoutes = require("./routes/tweets")(DataHelpers);

app.use("/tweets", tweetsRoutes);

//server start up and listening to the in coming request from client/user
app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
