const mongoose = require("mongoose");
const mongoose_delete = require("mongoose-delete");

const AllCodeSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
    },
    type: String,
    value: String,
  },
  {
    timestamps: true,
  }
);
AllCodeSchema.plugin(mongoose_delete, { overrideMethods: "all" });
const AllCode = mongoose.model("AllCode", AllCodeSchema);
module.exports = AllCode;
