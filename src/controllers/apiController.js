const User = require("../models/user");
const { createUserService, loginService, getUserService } = require("../services/userService");
const getUserAPI = async (req, res) => {
  const data =await getUserService();
  return res.status(200).json(data);
};
const postCreateUserAPI = async (req, res) => {
  //thêm người dùng lấy dữ liệu tham số truyền vào database
  const { name, email, password, gender, roleid, description } = req.body;
  const data = await createUserService(
    name,
    email,
    password,
    gender,
    roleid,
    description
  );
  return res.status(200).json(data);
};
const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const data = await loginService(email, password);
  return res.status(200).json(data);
};
const putUpdateUserAPI = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;
  let userId = req.body.userId;
  let user = await User.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );
  return res.status(200).json({
    errorCode: 0,
    data: user,
  });
};
const deleteUserAPI = async (req, res) => {
  const id = req.body.userId;
  let results = await User.deleteOne({
    _id: id,
  });
  return res.status(200).json({
    errorCode: 0,
    data: results,
  });
};
const postUploadSingleFileAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were upload");
  }
  let results = await uploadSingleFile(req.files.image);
  console.log(">>check results ", results);
  return res.send("ok single");
};
const postUploadMultipleFilesAPI = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were upload");
  }
  if (Array.isArray(req.files.image)) {
    let results = await uploadMultiplefile(req.files.image);
    return res.status(200).json({
      EC: 0,
      data: results,
    });
  } else {
    return await postUploadSingleFileAPI(req, res);
  }
};
module.exports = {
  getUserAPI,
  postCreateUserAPI,
  putUpdateUserAPI,
  deleteUserAPI,
  postUploadSingleFileAPI,
  postUploadMultipleFilesAPI,
  handleLogin,
};
