const express=require('express');
const routerAPI = express.Router();
const{getUserAPI,handleLogin,postCreateUserAPI,putUpdateUserAPI, deleteUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI} = require('../controllers/apiController')
const{postCreateCustomer,postCreateArrayCustomer,getAllCustomer,putUpdateCustomer,deleteACustomer,deleteArrayCustomer} = require('../controllers/customerController')
const{postCreateDoctor}=require("../controllers/doctorController")
const {postCreateProject,getAllProject,deleteProject,updateProject}=require("../controllers/projectController");
const {postCreateTask,getAllTask,deleteTask,updateTask} = require("../controllers/taskController");
const auth = require('../middleware/auth');
routerAPI.get("/",(req,res) =>{
    return res.status(200).json("helooo")
})

routerAPI.all('*',auth)
routerAPI.post('/register',postCreateUserAPI)
routerAPI.post('/login',handleLogin)
routerAPI.get('/users',getUserAPI)
routerAPI.put('/users',putUpdateUserAPI)
routerAPI.delete('/users',deleteUserAPI)
routerAPI.post('/file',postUploadSingleFileAPI)
routerAPI.post('/files',postUploadMultipleFilesAPI)
//customer
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