const express = require('express');
const path = require('path');
require('dotenv').config();
const configViewEngine = require('./config/viewEngine')
const webroutes=require('./routes/web.js')
const app = express();
const port = process.env.PORT || 8888 ;
const hostname = process.env.HOST_NAME ;
const connection = require('./config/Database.js')

// Route


// Config template engine
configViewEngine(app);
// config req.body
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//lấy tham số đối tượng mới nhập để truyền vào database
// Route for rendering EJS template
app.use('/',webroutes)

// test connection

  
     // fields contains extra meta data about results, if available

// Start server
app.listen(port,hostname, () => {
    console.log(`App listening at http://${hostname}:${port}`);
});