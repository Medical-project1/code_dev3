const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');


const clinicSchema = new mongoose.Schema(
{
    address:String,
    description:Text,
    image:String
},
{
    timestamps:true,
    
}
);
clinicSchema.plugin(mongoose_delete,{overrideMethods:'all'})
const Clinic=mongoose.model('clinic',clinicSchema)
module.exports=Clinic