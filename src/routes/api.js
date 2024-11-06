const express=require('express');
const routerAPI = express.Router();
const{getUserAPI,postCreateUserAPI} = require('../controllers/apiController')
routerAPI.post('/users',postCreateUserAPI)
routerAPI.get('/users',getUserAPI)

module.exports = routerAPI;