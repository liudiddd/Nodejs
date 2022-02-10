let express = require('express');

let app = express();
app.get('/', function(req, res){
    console.log(req.body.title);
    res.send(req.body.title);
}).listen(3000);

