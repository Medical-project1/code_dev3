const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


const bookingSchema = new mongoose.Schema(
{
    statusId:String,
    doctorId:Number,
    patientId:Number,
    date:Date,
    timeType:String
},
{
    timestamps:true,
    
}
);
bookingSchema.plugin(mongoose_delete,{overrideMethods:'all'})
const Booking=mongoose.model('booking',bookingSchema)
module.exports=Booking