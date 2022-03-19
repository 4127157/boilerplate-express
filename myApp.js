var express = require('express');
var app = express();
console.log("Hello World");
var absPath = __dirname + '/views/index.html';
var pathCss = __dirname + '/public';
app.use('/public', express.static(pathCss));
app.get('/', (req,res)=> {
    res.sendFile(absPath);
});





































 module.exports = app;
