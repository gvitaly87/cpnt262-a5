const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  width: Number,
  height: Number,
  pathURL: String,
  imgName: String,
  imgExt: String,
  linkURL: String,
  credit: String,
  creditURL: String,
});

module.exports = mongoose.model('Image', imageSchema);
