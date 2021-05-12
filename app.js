const express = require( "express");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



app.listen(port, err => {
    if(err){
        console.log(err);
    }else{
        console.log("Start Server...");
    }
});