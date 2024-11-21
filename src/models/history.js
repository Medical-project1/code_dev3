const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


const historySchema = new mongoose.Schema(
{
    patientId:Number,
    doctorId:Number,
    description:Text
},
{
    timestamps:true,
    
}
);
historySchema.plugin(mongoose_delete,{overrideMethods:'all'})
const History=mongoose.model('history',historySchema)
module.exports=History