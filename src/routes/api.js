const express=require('express');
const routerAPI = express.Router();
const{getUserAPI,handleLogin,postCreateUserAPI,putUpdateUserAPI, deleteUserAPI,refreshToken,logoutUserAPI, getAllPatients, getAllDoctors, getAllProfessors,getusers} = require('../controllers/apiController')
const {getTopDoctor} = require ("../controllers/doctorController")
const{postCreateAllCode,getAllCode} = require('../controllers/allcodeController');
const { postCreateAdmin, handleLoginAdmin } = require('../controllers/adminController');
const { postCreateBooking, getBooking } = require('../controllers/bookingController');
const { postmarkdown } = require('../controllers/markdownController');
routerAPI.get("/",(req,res) =>{
    return res.status(200).json("helooo")
})

// routerAPI.all('*',auth)
routerAPI.post('/register',postCreateUserAPI)
routerAPI.post('/login',handleLogin)
routerAPI.post('/logout',logoutUserAPI)
routerAPI.get('/users',getUserAPI)
routerAPI.put('/update-user/:id',putUpdateUserAPI)
routerAPI.delete('/users',deleteUserAPI)
routerAPI.post('/refresh-token',refreshToken)
routerAPI.get('/userss',getusers)
//get các bác sĩ ,bệnh nhân,giáo sư
routerAPI.get('/patients',getAllPatients)
routerAPI.get('/doctors',getAllDoctors)
routerAPI.get('/professors',getAllProfessors)

//customer
// routerAPI.post('/customers-many',postCreateArrayCustomer)
// routerAPI.get('/customers',getAllCustomer)
// routerAPI.put('/customers',putUpdateCustomer)
// routerAPI.delete('/customers',deleteACustomer)
// routerAPI.delete('/customers-many',deleteArrayCustomer)

//doctor
routerAPI.get('/gettopdoctor',getTopDoctor)

//admin
routerAPI.post('/Create-admin',postCreateAdmin)
routerAPI.post('/login-admin',handleLoginAdmin)
//markdown
routerAPI.post('/markdown',postmarkdown)



//Booking
routerAPI.post('/booking',postCreateBooking)
routerAPI.get('/booking',getBooking)
//allcode
routerAPI.post('/allcode',postCreateAllCode)
routerAPI.get('/allcode',getAllCode)
module.exports = routerAPI;