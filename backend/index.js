const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");

const Thought = require('./controllers/Thought')

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

app.use(cors());

app.use('/', Thought)

app.listen(4000, () => console.log("App is running on 4000!"));

