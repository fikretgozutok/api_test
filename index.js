const express = require("express");
const app = express();

var userList = [
    "Merve",
    "Fikret"
]

app.get("/", (req, res) => res.send(userList));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;