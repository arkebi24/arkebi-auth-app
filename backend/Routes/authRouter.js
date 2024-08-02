const { register, login } = require('../Controllers/authController');
const { registerValidation, loginValidation } = require('../Middlewares/authValidation');

const router = require('express').Router();

router.post('/login', loginValidation, login);
router.post('/register', registerValidation, register);

module.exports = router;