const express=require('express');
const routerAPI = express.Router();
const{getUserAPI,handleLogin,postCreateUserAPI,putUpdateUserAPI, deleteUserAPI,refreshToken,logoutUserAPI, getAllPatients, getAllDoctors, getAllProfessors} = require('../controllers/apiController')
const {getTopDoctor, postCreateScheduleDoctor, getDoctorInfor, getSchedulebyid,getExtractDoctorInfor, getDoctorProfileId} = require ("../controllers/doctorController")
const{postCreateAllCode,getAllCode} = require('../controllers/allcodeController');
const { postCreateAdmin, handleLoginAdmin } = require('../controllers/adminController');
const { postCreateBooking, getBooking } = require('../controllers/bookingController');
const { postmarkdown,updateMarkdown } = require('../controllers/markdownController');
const { postBookAppointment } = require('../controllers/patientController');
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
// routerAPI.get('/userss',getusers)
//get các bác sĩ ,bệnh nhân,giáo sư
routerAPI.get('/patients',getAllPatients)
routerAPI.get('/doctors',getAllDoctors)
routerAPI.get('/professors',getAllProfessors)
routerAPI.get('/doctorinfo/:id',getDoctorInfor)
//doctor
routerAPI.get('/gettopdoctor',getTopDoctor)
routerAPI.post('/create-schedules',postCreateScheduleDoctor)
routerAPI.get('/schedules/:id',getSchedulebyid)
//admin
routerAPI.post('/Create-admin',postCreateAdmin)
routerAPI.post('/login-admin',handleLoginAdmin)
//markdown
routerAPI.post('/doctorinfor-markdown',postmarkdown)
routerAPI.post('/bookAppointment',postBookAppointment)
routerAPI.put('/markdown',updateMarkdown)
routerAPI.get('/doctorExtractInfor/:doctorId',getExtractDoctorInfor)
routerAPI.get('/doctorProfile/:id',getDoctorProfileId)
//Booking
routerAPI.post('/booking',postCreateBooking)
routerAPI.get('/booking',getBooking)
//allcode
routerAPI.post('/allcode',postCreateAllCode)
routerAPI.get('/allcode',getAllCode)
module.exports = routerAPI;