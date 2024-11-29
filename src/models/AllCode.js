const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const AllCodeSchema = new mongoose.Schema(
  {
  type: { type: String, required: true },
  key: { type: String, required: true },
  valueEn: { type: String, required: true },
  valueVi: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
AllCodeSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const AllCode = mongoose.model("AllCode", AllCodeSchema);
module.exports = AllCode;
