require('dotenv').config();
// create connection
const mysql = require('mysql2/promise');

  const connection =  mysql.createPool({
    host: process.env.DB_HOST,
    port:process.env.DB_PORT,
    user: process.env.DB_USER,//default :empty
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit:10,
    queueLimit:0
  });
module.exports=connection; 