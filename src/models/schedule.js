const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


const scheduleSchema = new mongoose.Schema(
{
    currentNumber:Number,
    maxNumber:Number,
    date:Date,
    timetype:String,
    doctorId:Number
},
{
    timestamps:true,
    
}
);
scheduleSchema.plugin(mongoose_delete,{overrideMethods:'all'})
const Schedule=mongoose.model('schedule',scheduleSchema)
module.exports=Schedule