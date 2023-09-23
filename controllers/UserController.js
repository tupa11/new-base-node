const UserService = require('../services/UserService');

class UserController {
    constructor(){}

    static async index(req, res) {
        let data = await UserService.index(req, res);
        return data;
    }

    static async create(req, res) {
        let data = await UserService.create(req, res);
        return data;
    }
}

module.exports = UserController;