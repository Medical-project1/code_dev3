const User= require("../models/user")
const getUserAPI = async(req,res) =>{
    let results = await User.find({});
    return res.status(200).json({
        errorCode:0,
        data:results
    })
}
module.exports={
    getUserAPI
}