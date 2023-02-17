const express = require("express");
const app = express();
const port = 8000;
const db = require('./mongoose');


app.listen(port, function(err){
    if(err){
        console.log("error", err);
        return;
    }
    console.log('server is listening on port', port);
});