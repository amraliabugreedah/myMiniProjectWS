let registerModel = require('../models/registerModel');

let registerController = {

        getRegistrationPage:function(req, res){

            res.render('registration');


        },

        registerUser:function(req, res){
                var verifyPass = {
                      pass: req.body.password,
                      passV: req.body.passwordVerification

                };
                if (verifyPass.pass != verifyPass.passV){

                    res.redirect('/');
                  return;
                }
                var data = {
                    username: req.body.usernameTextfield,
                    password: req.body.password,
                    image: req.body.image

                };
                let userObject = new registerModel(data);

              console.log(req.body);
                userObject.save(function(err, userObject){

                    if(err){

                        res.send(err.message);
                        console.log(err);

                    }else{

                        console.log(userObject);
                        res.send("added");
                      //  res.redirect('/login');
                    }

                });

        }


}

module.exports = registerController;
