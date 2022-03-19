var express = require('express');
var app = express();
console.log("Hello World");
var absPath = __dirname + '/views/index.html';
var pathCss = __dirname + '/public';

app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({
        "time":req.time
    });
});

app.use((req, res, next)=>{
    console.log('logging');
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.use('/public', express.static(pathCss));

app.get('/', (req,res)=> {
    res.sendFile(absPath);
});

app.get('/json', (req, res) => {
    let dummyStr = "Hello json";
    if(process.env.MESSAGE_STYLE === "uppercase"){
        dummyStr = dummyStr.toUpperCase();
    } 
    res.json({
        "message": dummyStr
    });
});







































 module.exports = app;
