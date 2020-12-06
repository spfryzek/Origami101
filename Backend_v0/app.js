const express = require("express");
const app = express();
const mongoose = require("mongoose");
//require("dotenv/config");
const bodyParser = require("body-parser");
//const cors = require("cors");

// Cors middleware

//app.use(cors());

// Body Parser

app.use(bodyParser.json());

// Import routes

const postsRoute = require("./routes/posts");
const usersRoute = require("./routes/users");
const coursesRoute = require("./routes/courses");
const coursesHistoryRoute = require("./routes/coursesHistory");
//const coursesHistory2Route = require("./routes/courseHistory2");
const submissionsRoute = require("./routes/submissions");
const notificationsRoute = require("./routes/notifications");
const commentsRoute = require("./routes/comments");
//const Route = require("./routes/");

// Middleware

app.use("/posts", postsRoute);
app.use("/users", usersRoute);
app.use("/courses", coursesRoute);
app.use("/coursesHistory", coursesHistoryRoute);
//app.use("/coursesHistory2", coursesHistory2Route);
app.use("/submissions", submissionsRoute);
app.use("/notifications", notificationsRoute);
app.use("/comments", commentsRoute);
//app.use("/", Route);

// Routes
app.get("/", (req, res) => {
    res.send("Hello Home Route");
});

/*
app.get("/posts", (req, res) => {
    res.send("This is Posts Route");
});*/

//mongoose.connect('mongodb://localhost/userdb', {useUnifiedTopology: true, useNewUrlParser: true});

mongoose.connect(
    "mongodb+srv://tutorial:tutorial_pw@cluster0.lczyn.mongodb.net/test", { //"mongodb+srv://Origami_admin:ENPM613b0$$@cluster0.aoq2j.mongodb.net/test"
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    () => {
        console.log("Connected to Database");
    }
);

/*
// Connect to Database
mongoose.connect(
    process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => {
        console.log("Connected to Database");
    }
);
*/
// To listen on the server
app.listen(3001);