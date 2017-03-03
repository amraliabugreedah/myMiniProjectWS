let registerModel = require('../models/registerModel');

let registerController = {

        getRegistrationPage:function(req, res){

            res.render('../views/registration');

        },

        registerUser:function(req, res){
                var verifyPass = {
                      pass: req.body.password,
                      passV: req.body.passwordVerification

                };
                if (verifyPass.pass != verifyPass.passV){

                    res.redirect('/getRegistrationPage');
                  return;
                }

                var data = {
                    username: req.body.usernameTextfield,
                    password: req.body.password,
                    type: req.body.typeOfUser

                };
                let userObject = new registerModel(data);

          //    console.log(req.session.loggedIn);
                userObject.save(function(err, userObject){

                    if(err){

                        res.send(err.message);
                        console.log(err);

                    }else{

                        res.redirect('/getLoginPage');


                    }

                });

        }


}

module.exports = registerController;
