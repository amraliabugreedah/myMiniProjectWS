// let loginModel = require('../models/loginModel');
let registerModel = require('../models/registerModel');
let portfolioModel = require('../models/portfolioModel');



let loginController = {

  getLoginPage:function(req, res){

        res.render('login');

  },

    login:function(req, res){

      var username = req.body.usernameTextfield;
      var password = req.body.password;

      var checkUsernamePasswordQuery = registerModel.findOne({'username':username, 'password':password}, 'username', function(err, user){

          if(err){

            console.log(err);

          }else if(user == null) {
            res.send("Invalid username or password!");
          }
          else{

          //  res.send("Hi " + user.username + ", you are logged in successfully!");
           req.session.loggedIn == true;
           req.session.username = username;

           var getProfile =  portfolioModel.findOne({'username':username}, 'username', function(err, userprofile){

                 if(err){

                   console.log(err);

                 }else if(userprofile != null){
                  
                      res.redirect('/getUserProfile');
                 }else {
                    res.render('studentpage');
                 }
         });

          }

      });

    }


};

module.exports = loginController;
