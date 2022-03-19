var express = require('express');
var app = express();
console.log("Hello World");
var absPath = __dirname + '/views/index.html';
app.get('/', (req,res)=> {
    res.sendFile(absPath);
});




































 module.exports = app;
