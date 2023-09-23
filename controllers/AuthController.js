const AuthService = require('./../services/AuthService');

class AuthController {
    constructor(){}

    static async login(req, res) {
        let data = await AuthService.login(req, res);
        return data;
    }

    static async register(req, res) {
        let data = await AuthService.register(req, res);
        return data;
    }
}

module.exports = AuthController;