const User = require("../models/user")
const getTopDoctorService = async()=>{
    try {
        const doctors=await User.find(
            {roleid:'R2'},
            {password:0}
        )
        .sort({createdAt:-1})
        .limit(10)
        return doctors
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}
module.exports={
    getTopDoctorService
}