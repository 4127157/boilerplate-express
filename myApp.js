var express = require('express');
var app = express();
console.log("Hello World");
var absPath = __dirname + '/views/index.html';
var pathCss = __dirname + '/public';
app.get('/', (req,res)=> {
    res.sendFile(absPath);
});

app.use(express.static(pathCss));




































 module.exports = app;
