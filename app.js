const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
    console.log("Server started on port 3000...");
});