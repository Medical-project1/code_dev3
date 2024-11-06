const express=require('express');
const routerAPI = express.Router();
const{getUserAPI,postCreateUserAPI,putUpdateUserAPI, deleteUserAPI} = require('../controllers/apiController')
routerAPI.post('/users',postCreateUserAPI)
routerAPI.get('/users',getUserAPI)
routerAPI.put('/users',putUpdateUserAPI)
routerAPI.delete('/users',deleteUserAPI)
module.exports = routerAPI;