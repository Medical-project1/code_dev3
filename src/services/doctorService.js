require("dotenv").config;
const Doctor = require("../models/doctor");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const createDoctorService = async (
  name,
  email,
  password,
  phone,
  gender,
  roleid,
  specialty,
  experience,
  rating
) => {
  try {
    const hashPassword = await bcrypt.hash(password, saltRounds);
    let result = await Doctor.create({
      name: name,
      email: email,
      password: hashPassword,
      phone:phone,
      gender: gender,
      roleid: roleid,
      specialty: specialty,
      experience: experience,
      rating: rating,
    });
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
module.exports = {
  createDoctorService,
};
