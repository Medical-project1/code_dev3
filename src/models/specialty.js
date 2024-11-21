const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


const specialtySchema = new mongoose.Schema(
{
   description:Text,
   image:String
},
{
    timestamps:true,
    
}
);
specialtySchema.plugin(mongoose_delete,{overrideMethods:'all'})
const Specialty=mongoose.model('specialty',specialtySchema)
module.exports=Specialty