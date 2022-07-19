const express= require('express');
const cors = require('cors');
var app = new express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, function(){
    console.log('listening to port 3000');
});