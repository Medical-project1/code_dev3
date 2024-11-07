const express=require('express');
const routerAPI = express.Router();
const{getUserAPI,postCreateUserAPI,putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI} = require('../controllers/apiController')
routerAPI.post('/users',postCreateUserAPI)
routerAPI.get('/users',getUserAPI)
routerAPI.put('/users',putUpdateUserAPI)
routerAPI.delete('/users',deleteUserAPI)
routerAPI.post('/file',postUploadSingleFileAPI)
module.exports = routerAPI;