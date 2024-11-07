const express=require('express');
const routerAPI = express.Router();
const{getUserAPI,postCreateUserAPI,putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI} = require('../controllers/apiController')
const{postCreateCustomer,postCreateArrayCustomer} = require('../controllers/customerController')
routerAPI.post('/users',postCreateUserAPI)
routerAPI.get('/users',getUserAPI)
routerAPI.put('/users',putUpdateUserAPI)
routerAPI.delete('/users',deleteUserAPI)
routerAPI.post('/file',postUploadSingleFileAPI)
routerAPI.post('/files',postUploadMultipleFilesAPI)
routerAPI.post('/customers',postCreateCustomer)
routerAPI.post('/customers-many',postCreateArrayCustomer)
module.exports = routerAPI;