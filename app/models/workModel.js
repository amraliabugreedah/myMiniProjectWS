var mongoose = require('mongoose');

var workSchema = mongoose.Schema({
  username:{type:String, required:true},
  screenshot:String,
  link:String,
  codeRepo:String

},{
  versionKey: false

  });

var workModel = mongoose.model("work", workSchema);

module.exports = workModel;
