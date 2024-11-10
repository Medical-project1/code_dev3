const mongoose = require('mongoose');
const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialty: { type: String, required: true },
    experience: String,
    rating: String,
    image:String
},
{timestamps:true}
);
const Doctor=mongoose.model('doctor',doctorSchema)
module.exports=Doctor