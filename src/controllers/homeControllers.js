const connection=require('../config/Database')
const {getAllUsers,getUserById,updateUserById,deleteUserById}=require('../services/CRUDservices');
const User = require("../models/user");

const getHomepage =async (req,res) => {
    let results= await User.find({});
    return res.render('home.ejs',{listUsers:results});
}//sql orm thì sẽ dùng các câu truy vấn
//Nosql => odm  gần với ngôn ngữ đời sống thì sẽ dùng code 

const postCreateUser =async (req,res) =>{//thêm người dùng lấy dữ liệu tham số truyền vào database
    let email=req.body.email;
    let name=req.body.myname;
    let city=req.body.city;
    console.log(' email = ',email,' name = ',name,' city = ',city);
    await User.create({
        email: email,
        name:name,
        city:city
    })
    res.send('created user succeed!')
}
const getCreatePage = (req,res) => {
    res.render('create.ejs')
}
const getUpdatePage = async(req,res) =>{
    const userId=req.params.id;
    let user = await User.findById(userId).exec();
    res.render('edit.ejs',{userEdit:user});
}
const postUpdateUser = async (req, res) => {
    try {
        let email = req.body.email;
        let name = req.body.myname;
        let city = req.body.city;
        let userId = req.body.userId;
        await User.updateOne({_id:userId},{email:email,name:name,city:city});
        res.redirect('/');//đường link muốn người dùng tới nơi đó nếu update thành công
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Error updating user');
    }
};
const postDeleteUser = async (req,res) => {
    const userId=req.params.id;
    let user =await User.findById(userId).exec();
    res.render('delete.ejs',{userEdit:user})
}
const postHandleRemoveUser= async (req,res) => {
    const id = req.body.userId;
  let results=  await User.deleteOne({
        _id:id
    })
    console.log("result",results);
    res.redirect('/');
}
module.exports = {
    getHomepage,postCreateUser,getCreatePage,getUpdatePage,postUpdateUser,
    updateUserById,postDeleteUser,postHandleRemoveUser,deleteUserById
}
