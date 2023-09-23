var express = require('express');
var router = express.Router();

const UserController = require('./../controllers/UserController');
const Authenticated = require('./../middlewares/Authenticated');

const CreateUserRequest = require('./../requests/CreateUserRequest');

/* GET users listing. */
router.get('/', Authenticated, UserController.index);
router.post('/', Authenticated, CreateUserRequest, UserController.create);

module.exports = router;
