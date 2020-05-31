const { Schema } = require("mongoose");

module.exports = new Schema({
  author: String,
  type: Number, // constants.MESSAGE_TYPE
  body: String,
  recipient: String,
  time: { type: Date, default: Date.now },
});
