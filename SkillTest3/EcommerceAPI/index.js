const express = require('express');
const port = 8000;
const db = require('./config/mongoose');
const bodyparser = require('body-parser')
const app = express();

// app.set('views', './views');
// app.use(cookieParser());
// app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

app.listen(port, function(err){
    if(err){
        console.log('Error in running the Server');
    }
    console.log('Server run on port: ', port);
});



app.use('/',require('./router/apis/v1/index') )