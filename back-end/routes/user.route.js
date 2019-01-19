const express = require('express');
const router = express.Router();
// require the user.controllers.js 
const userController = require('../controllers/user.controllers');

// the register user route
router.post('/register', userController.registerUser);

// the login route
router.post('/login', userController.loginUser);


// export the router so it can be used by other modules
module.exports = router;
