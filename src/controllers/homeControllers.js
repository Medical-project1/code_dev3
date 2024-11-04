const connection=require('../config/Database')
const {getAllUsers,getUserById,updateUserById,deleteUserById}=require('../services/CRUDservices')
const getHomepage =async (req,res) => {
    let results= await getAllUsers();
    return res.render('home.ejs',{listUsers:results});
}
const postCreateUser =async (req,res) =>{//thêm người dùng lấy dữ liệu tham số truyền vào database
    let email=req.body.email;
    let name=req.body.myname;
    let city=req.body.city;
    console.log(' email = ',email,' name = ',name,' city = ',city)
     let [results,fields] = await connection.query(
        `INSERT INTO Users (email,name,city)  VALUES (?,?,?)`, [email,name,city]
     );
    console.log("check results= ",results);
    res.send('created user succeed!')
}
const getCreatePage = (req,res) => {
    res.render('create.ejs')
}
const getUpdatePage = async(req,res) =>{
    const userId=req.params.id;
    let user =await getUserById(userId);
    res.render('edit.ejs',{userEdit:user});
}
const postUpdateUser = async (req, res) => {
    try {
        let email = req.body.email;
        let name = req.body.myname;
        let city = req.body.city;
        let userId = req.body.userId;
        await updateUserById(email, city, name, userId)
        // Ensure you include userId in the query parameters
        // res.send('Updated user successfully!');
        res.redirect('/');//đường link muốn người dùng tới nơi đó nếu update thành công
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send('Error updating user');
    }
};
const postDeleteUser = async (req,res) => {
    const userId=req.params.id;
    let user =await getUserById(userId);
    res.render('delete.ejs',{userEdit:user})
}
const postHandleRemoveUser= async (req,res) => {
    const id = req.body.userId;
    await deleteUserById(id);
    res.redirect('/');
}
module.exports = {
    getHomepage,postCreateUser,getCreatePage,getUpdatePage,postUpdateUser,
    updateUserById,postDeleteUser,postHandleRemoveUser,deleteUserById
}
