const express = require("express");
const cors = require("cors");
const mongoose =require("mongoose");

const app = express();

app.get("/", (req, res) =>{
    res.send ("Express is here");
})

app.post("/create",(req, res) =>{
  console.log(req, body);
})

app.listen(3001, function() {
    console.log("Server is running");
})