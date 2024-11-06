const express=require('express');
const routerAPI = express.Router();
const{getUserAPI} = require('../controllers/apiController')
routerAPI.get('/', (req,res) =>{
    res.send('helloo api')
});
routerAPI.get('/abc',(req,res) =>{
    res.status(200).json({
        data: 'helloo data'
    })
});
routerAPI.get('/users',getUserAPI)

module.exports = routerAPI;