const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const arConfigSchema = new mongoose.Schema({
  urlModel: {
    type: String,
    require: true,
  },
  bucketLocation: {
    type: String,
  },
  sizeModel: {
    type: String,
  },
  scaleModel: {
    type: String,
  },
  rotationModel: {
    type: Array,
    default: [0, 0, 0],
  },
  id_user: {
    type: ObjectId,
    require: true,
  },
});

const ArConfig = mongoose.model("arConfigs", arConfigSchema);

exports.ArConfig = ArConfig;
