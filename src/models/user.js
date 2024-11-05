const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    city:String
  })
  //thao tác với db thông qua model
  const User = mongoose.model('user',UserSchema);
  //const silence = new Kitten({name:'Silence'})
  module.exports=User;