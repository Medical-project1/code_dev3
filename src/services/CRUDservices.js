const connection = require("../config/Database");
const getAllUsers = async() => {
    let [results,fields] = await connection.query('select * from Users u');
    return results;

}
const getUserById = async (userId) => {
    let [results,fields] = await connection.query('select * from Users where id = ?',[userId])
    let user=results && results.length > 0 ? results[0]:{};
    return user;
}
const updateUserById = async (email, city, name, userId) => {
    let [results, fields] = await connection.query(
        `
        UPDATE Users
        SET email = ?, city = ?, name = ?
        WHERE id = ?`, 
        [email, city, name, userId] // Include userId here
    );
}
const deleteUserById = async (id) => {
    let[results,fields] = await connection.query(
        `DELETE FROM Users WHERE id = ? `,[id]
    );
}
module.exports = {
    getAllUsers,getUserById,updateUserById,deleteUserById
}
//service dùng để chịu trách nhiệm lấy data