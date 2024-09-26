const express = require('express');
const app = express();


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/sobre",function(req, res) {
    res.sendFile(__dirname + "/sobre.html");
});

app.get("/erro404", function(req, res) {
    res.sendFile(__dirname + "/error.html");
});

app.use(function(req, res, next) {
    res.render(__dirname + "/404.ejs", { url: req.url});
});


app.listen(8081, function() {
    console.log("Servidor Rodando na url http://localhost:8081");
});