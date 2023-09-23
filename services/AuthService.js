const model = require('./../models/index');
const User = model.User;

const {jsonData, comparePassword, genToken} = require('./../helpers/Helper');
const StatusCode = require('./../constants/StatusCode')

class AuthService {
    static async login(req, res) {
        try {
            let {email, password} = req.body;
            let user = await User.findOne({ 
                where: {email},
                raw: true
            })
    
            if (user && comparePassword(password, user.password)) {
                const payload = { ...user };
                const token = genToken(payload);
                return res.json(jsonData(StatusCode.OK, token))
            }
            return res.json(jsonData(StatusCode.NOT_FOUND))
        } catch (e) {
            console.log(e);
            return res.json(jsonData(StatusCode.INTERNAL_SERVER_ERROR))
        }
    }

    static async register(req, res) {

    }
}

module.exports = AuthService;