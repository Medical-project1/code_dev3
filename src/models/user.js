const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");
const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
    gender: String,
    description: String,
    roleid: String,
  },
  {
    timestamps: true,
  }
);
//thao tác với db thông qua model
UserSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const User = mongoose.model("user", UserSchema);
//const silence = new Kitten({name:'Silence'})
module.exports = User;
