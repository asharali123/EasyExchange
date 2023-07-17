const express = require("express");
const app = express()
const PORT = process.env.PORT || 3000;
const router = require("./routes/routes.js")
const staticPath = require("path").join;
require("dotenv").config();
const connectDB = require("./config/connectdb.js")
const CORS = require('cors')

//get form data
app.use(express.urlencoded({ extended: false }));

//set view engine
app.set("view engine", "ejs");

//CORS policys
app.use(CORS());

//set static files
let path = staticPath(__dirname, "/public");
app.use(express.static(path))

// database
const DataBaseUrl = process.env.DataBaseUrl || console.log("Not Connected");
connectDB(DataBaseUrl);

//web routes
app.use("/", router);

app.listen(PORT);