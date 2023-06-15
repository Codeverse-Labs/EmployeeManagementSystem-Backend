const app = require('express');
const router = app.Router();

// Auth controller
const authController = require('../controllers/Auth_Controller');

// Signup route
router.post('/signup', authController.signUp);

// Login
router.post('/login', authController.login);

// forgot password mail
router.post('/forgetpassword/mail', authController.getForgetPasswordMail);

// Update forgot password
router.put('/forgetpassword/password/:id', authController.setForgetPassword);

// get User Details
router.post('/details', authController.getUserDetails);

// verify mail
router.put("/:id", async (req, res) => authControllerController.update(req, res));

module.exports = router;