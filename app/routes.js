// require dependencies

var express = require('express');
var router = express.Router();
var registerController = require('./controllers/registerController');


// add routes

router.get('/', registerController.getRegistrationPage);
router.post('/registerUser', registerController.registerUser);

// export router

module.exports = router;
