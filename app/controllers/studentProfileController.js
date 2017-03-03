let workModel = require('../models/workModel');


let studentProfileController = {

    addWork:function(req, res){


      var username = req.session.username;
//////////////

var workData = {

  username: username,
  screenshot:req.body.screenshot,
  link:req.body.link,
  codeRepo:req.body.codeRepo

};
let workObject = new workModel(workData);

workObject.save(function(err, workObject){

  if(err){

    console.log(err);

  }else{

    console.log("WorkSaved")

    res.redirect('/getUserProfile');

  }


});


    }


};

module.exports = studentProfileController;
