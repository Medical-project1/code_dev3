const express=require('express');
const routerAPI = express.Router();
const{getUserAPI,postCreateUserAPI,putUpdateUserAPI} = require('../controllers/apiController')
routerAPI.post('/users',postCreateUserAPI)
routerAPI.get('/users',getUserAPI)
routerAPI.put('/users',putUpdateUserAPI)
module.exports = routerAPI;