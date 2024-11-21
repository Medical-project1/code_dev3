const { required } = require("joi");
const mongoose = require("mongoose");
const mongoose_delete = require('mongoose-delete');
const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: String,
    password: { type: String, required: true },
    phone: String,
    gender: String,
    roleid: String,
    specialty: { type: String, required: true },
    experience: String,
    rating: String,
  },
  { timestamps: true }
);
doctorSchema.plugin(mongoose_delete,{overrideMethods:'all'})
const Doctor = mongoose.model("doctor", doctorSchema);
module.exports = Doctor;
