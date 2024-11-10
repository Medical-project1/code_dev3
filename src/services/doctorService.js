const Doctor = require("../models/doctor")
const createDoctorService = async (doctorData) =>{
    try {
        let result = await Doctor.create({
            name:doctorData.name,
            specialty:doctorData.specialty,
            experience:doctorData.experience,
            rating:doctorData.rating,
            image:doctorData.image
        })
        return result;
    } catch (error) {
        console.log(error);
        return null;
    }
}
module.exports ={
    createDoctorService
}