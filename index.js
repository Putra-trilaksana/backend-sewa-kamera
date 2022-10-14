// imports
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/routes");

const app = express();
const port = process.env.PORT;

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("uploads"));

// connect to database

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true, useUnifiedTopology:true,
}, (err) => {
    if(err){
        console.log(err)
    }else {
        console.log("Database Connected!")
    }
});

// routes prefix
app.use('/api/post', require('./routes/routes'));

// running server
app.listen(port, () => console.log(`Server running at PORT ${port}`));