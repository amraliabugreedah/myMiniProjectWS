let studentpageModel = require('../models/portfolioModel');
let workModel = require('../models/workModel');


let studentpageController = {

  getUserProfile:function(req, res){

          var username = req.session.username;
        //  res.render('studentProfile');
          var getProfile = studentpageModel.findOne({'username':username}, 'studentname profilepic', function(err, userprofile){

                if(err){

                  console.log(err);

                }else if(userprofile == null){
                  console.log("No profile!");
                }else {

                //  console.log(userprofile);
                var profile = {name:userprofile.studentname, pic:userprofile.profilepic};

                res.render('studentProfile', {profile});
                }
        });


  },


    createPortfolio:function(req, res){
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

  }


});




      ///////
      var data = {

        username: username,
        studentname:req.body.nameTextfield,
        profilepic:req.body.profilePicture


      };

      let portfolioObject = studentpageModel(data);

      portfolioObject.save(function(err, portfolioObject){

        if(err){

          if(err.errors.studentname.message == "Path `studentname` is required."){
            res.send("Please enter you name!");
          }else if(err.code == 11000){   // error code 11000 for duplicate username
            res.send("You have already created a portfolio!");
          }
            console.log(err);

        }
        else{

                res.redirect('/getUserProfile'); // redirect to whatever after creating a portfolio
        }

      });

      ////////////







    }
};

module.exports = studentpageController;
