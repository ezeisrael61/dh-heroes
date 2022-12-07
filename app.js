const express = require('express');
const app = express();
const path = require("path");

app.use(express.static("public"));

app.listen(3030, () => console.log("servidor corriendo en puerto 3030"));

//app.get("/", function(req, res) { 
 //   res.send("hola");
//});

app.get("/home", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.get("/babbage.html", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/babbage.html"))
})

app.get("/berners-lee.html", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/berners-lee.html"))
})

app.get("/clarke.html", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/clarke.html"))
})

app.get("/hamilton.html", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/hamilton.html"))
})

app.get("/hooper.html", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/hooper.html"))
})

app.get("/lovelace.html", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/lovelace.html"))
})

app.get("/turing.html", (req, res) => {
    return res.sendFile(path.join(__dirname, "/views/turing.html"))
})