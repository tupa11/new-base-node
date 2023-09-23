var express = require('express');
var router = express.Router();
const AuthController = require('./../controllers/AuthController');
const LoginRequest = require('./../requests/LoginRequest');
const RegisterRequest = require('./../requests/RegisterRequest');

router.post('/login', LoginRequest, AuthController.login);
router.post('/register', RegisterRequest, AuthController.register);

module.exports = router;
