const User = require('../models/user')
const {getTopDoctorService} = require("../services/doctorService")
const getTopDoctor = async(req,res)=>{
    try {
        const doctors = await getTopDoctorService();
        return res.status(200).json(doctors)
    } catch (error) {
        return res.status(500).json({
            message:error.message
        })
    }
}
module.exports = {
    getTopDoctor
}