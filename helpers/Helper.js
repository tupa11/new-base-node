const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require('dotenv').config();

class Helper {
    constructor() {}

    static jsonData(code, data = null) {
        let result = {
            code: code,
        }
        data ? result.data = data : '';

        return result;
    }

    static comparePassword(pass1, pass2)
    {
        return bcrypt.compareSync(pass1, pass2);
    }

    static genToken(payload)
    {
        return jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '7d'})
    }

    static verifyToken(token)
    {
        return jwt.verify(token, process.env.JWT_SECRET)
    }
}

module.exports = Helper;