const express = require("express");
const app = express();

require('dotenv').config();

//Express middleware
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(bodyParser.json());
app.use(morgan('combined'));

// Routing
app.get('/', (req, res) => {
    res.send("Node server running!");
})

//Server connection
app.listen(process.env.PORT || 3000, () => {
    console.log(`app is running on port http://localhost:${process.env.PORT || 3000} `);
})