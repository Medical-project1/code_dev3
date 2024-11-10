const express=require('express');
const routerAPI = express.Router();
const{getUserAPI,postCreateUserAPI,putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI} = require('../controllers/apiController')
const{postCreateCustomer,postCreateArrayCustomer,getAllCustomer,putUpdateCustomer,deleteACustomer,deleteArrayCustomer} = require('../controllers/customerController')
const{postCreateDoctor}=require("../controllers/doctorController")
const {postCreateProject,getAllProject,deleteProject,updateProject}=require("../controllers/projectController");
const {postCreateTask,getAllTask,deleteTask,updateTask} = require("../controllers/taskController")
routerAPI.post('/users',postCreateUserAPI)
routerAPI.get('/users',getUserAPI)
routerAPI.put('/users',putUpdateUserAPI)
routerAPI.delete('/users',deleteUserAPI)
routerAPI.post('/file',postUploadSingleFileAPI)
routerAPI.post('/files',postUploadMultipleFilesAPI)
//customer
routerAPI.post('/customers',postCreateCustomer)
routerAPI.post('/customers-many',postCreateArrayCustomer)
routerAPI.get('/customers',getAllCustomer)
routerAPI.put('/customers',putUpdateCustomer)
routerAPI.delete('/customers',deleteACustomer)
routerAPI.delete('/customers-many',deleteArrayCustomer)
//doctor
routerAPI.post('/doctors',postCreateDoctor)
//project
routerAPI.post('/projects',postCreateProject)
routerAPI.get('/projects',getAllProject)
routerAPI.put('/projects',updateProject);
routerAPI.delete('/projects',deleteProject);
//task
routerAPI.post('/tasks',postCreateTask)
routerAPI.get('/tasks',getAllTask)
routerAPI.put('/tasks',updateTask);
routerAPI.delete('/tasks',deleteTask);
module.exports = routerAPI;