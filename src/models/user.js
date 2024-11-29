const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const UserSchema = new mongoose.Schema(
  {
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
  address: { type: String },
  gender: { 
    type: mongoose.Schema.Types.ObjectId, // Tham chiếu đến Allcode
    ref: 'Allcode' // Tham chiếu đến mô hình Allcode
  },
  roleid: { type: String, enum: ['R1', 'R2', 'R3'] },
  phoneNumber: { type: String },
  position: { 
    type: mongoose.Schema.Types.ObjectId, // Tham chiếu đến Allcode
    ref: 'Allcode' // Tham chiếu đến mô hình Allcode
  },
  image: { type: String }
}, {
  timestamps: true,
});

// Thao tác với db thông qua model
UserSchema.plugin(mongoose_delete, { overrideMethods: "all" });

const User = mongoose.model("User", UserSchema); // Đảm bảo tên mô hình là 'User' với chữ cái hoa
module.exports = User;