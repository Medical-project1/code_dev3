require("dotenv").config;
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const createUserService = async (
  name,
  email,
  password,
  gender,
  roleid,
  description
) => {
  try {
    //check user exist
    const user =  await User.findOne({email});
    if(user){
      console.log(`>>user exist,chọn 1 email khác ${email}`)
      return null;
    }
    const hashPassword = await bcrypt.hash(password, saltRounds);
    let result = await User.create({
      name: name,
      email: email,
      password: hashPassword,
      gender: gender,
      roleid: roleid,
      description: description,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const loginService = async (email1, password) => {
  try {
    const user = await User.findOne({ email: email1 });
    if (user) {
      //compare password
      const isMatchPassword = await bcrypt.compare(password, user.password);
      if (!isMatchPassword) {
        return {
          EC: 2,
          EM: "EMAIL/PASSWORD ko hợp lệ",
        };
      } else {
        const payload = {
          email: user.email,
          name: user.name,
        };
        const access_token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: process.env.JWT_EXPIRE,
        });
        return {
          EC: 0,
          access_token,
          user: {
            email: user.email,
            name: user.name,
          },
        };
      }
    } else {
      return {
        EC: 1,
        EM: "EMAIL/password ko hop le",
      };
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getUserService = async () =>{
  try {
    let result=await User.find({}).select("-password");
    return result;
  } catch (error) {
      console.log(error);
      return null;
  }
};
module.exports = {
  createUserService,
  loginService,
  getUserService
};
