const {jsonData, verifyToken} = require('../helpers/Helper');
const StatusCode = require('../constants/StatusCode')

module.exports = (req, res, next) => {
    const token = req.token;
    try {
        const decode = verifyToken(token);

        if (decode) {
            req.user = decode;
        }
        return next();
    } catch (e) {
        return res.json(jsonData(StatusCode.UNAUTHORIZED))
    }
}