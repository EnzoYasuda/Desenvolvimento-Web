const express = require('express');
const app = express();
var formidable = require('formidable');


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.get("/sobre",function(req, res) {
    res.sendFile(__dirname + "/sobre.html");
});

app.use(function(req, res, next) {
    res.render(__dirname + "/404.ejs", { url: req.url});
});

app.get("/upload",function(req, res) {
    if (req.url == '/upload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
        var oldpath = files.filetoupload.filepath;
        var newpath = 'C:/Users/Your Name/' + files.filetoupload.originalFilename;
        fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
        res.write('File uploaded and moved!');
        res.end();
    });
});
    } else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
    }
});


app.listen(8081, function() {
    console.log("Servidor Rodando na url http://localhost:8081");
});