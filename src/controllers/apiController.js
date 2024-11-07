const User= require("../models/user");
const{uploadSinglefile } = require('../services/fileServices')
const getUserAPI = async(req,res) =>{
    let results = await User.find({});
    return res.status(200).json({
        errorCode:0,
        data:results
    })
}
const postCreateUserAPI =async (req,res) =>{//thêm người dùng lấy dữ liệu tham số truyền vào database
    let email=req.body.email;
    let name=req.body.myname;
    let city=req.body.city;
    console.log(' email = ',email,' name = ',name,' city = ',city);
   let user= await User.create({
        email: email,
        name:name,
        city:city
    })
    return res.status(200).json({
        errorCode:0,
        data:user
    })
}
const putUpdateUserAPI = async(req,res) =>{
        let email = req.body.email;
        let name = req.body.myname;
        let city = req.body.city;
        let userId = req.body.userId;
        let user= await User.updateOne({_id:userId},{email:email,name:name,city:city});
        return res.status(200).json({
            errorCode:0,
            data:user
        })
}
const deleteUserAPI= async (req,res) => {
    const id = req.body.userId;
    let results=  await User.deleteOne({
        _id:id
    })
    return res.status(200).json({
        errorCode:0,
        data:results
    })
}
const postUploadSingleFileAPI =async (req,res) =>{
    
    if(!req.files || Object.keys(req.files).length === 0){
        return res.status(400).send('No files were upload');
    }
    let results=await uploadSinglefile(req.files.image);
    console.log(">>check results ",results)
    return res.send('ok single')
}
module.exports={
    getUserAPI,postCreateUserAPI,putUpdateUserAPI,deleteUserAPI,postUploadSingleFileAPI
}