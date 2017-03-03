var mongoose = require('mongoose');

var portfolioSchema = mongoose.Schema({
  username:{type:String, required:true, unique:true},
  studentname:{type:String, required:true},
  profilepic:String,

},{
  versionKey: false

  });

var portfolioModel = mongoose.model("portfolio", portfolioSchema);

module.exports = portfolioModel;
