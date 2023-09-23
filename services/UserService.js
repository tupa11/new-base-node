const model = require('../models/index');
const User = model.User;

const {jsonData, comparePassword, genToken} = require('../helpers/Helper');
const StatusCode = require('../constants/StatusCode')

class UserService {
    static async index(req, res)
    {
        try {
            let data = await User.findAll();
            return res.json(jsonData(StatusCode.OK, data))
        } catch (e) {
            return res.json(jsonData(StatusCode.INTERNAL_SERVER_ERROR))
        }
    }

    static async create(req, res)
    {
        try {
            let data = req.body
            let user = await User.create({...data});
            return res.json(jsonData(StatusCode.OK, user))
        } catch (e) {
            return res.json(jsonData(StatusCode.INTERNAL_SERVER_ERROR))
        }
    }
}

module.exports = UserService;