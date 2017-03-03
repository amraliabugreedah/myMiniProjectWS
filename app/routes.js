// require dependencies

var express = require('express');
var router = express.Router();
var registerController = require('./controllers/registerController');
var loginController = require('./controllers/loginController');
var studentpageController = require('./controllers/studentpageController');

var studentProfileController = require('./controllers/studentProfileController');

let workModel = require('./models/workModel');


// add routes


router.get('/', function(req, res){


                workModel.find(function(err, works){

                    if(err){

                        res.send(err.message);

                    }else{

                        res.render('homepage', {works});

                    }

                });

});

router.get('/getRegistrationPage', registerController.getRegistrationPage);    // render registration frontend
router.post('/registerUser', registerController.registerUser); // when user register and press submit

router.get('/getLoginPage',  loginController.getLoginPage);    // render registration frontend
router.post('/logMeIn', loginController.login);

router.post('/createPortfolio', studentpageController.createPortfolio);

router.get('/getUserProfile', studentpageController.getUserProfile);

router.post('/addWork', studentProfileController.addWork);


// export router

module.exports = router;
