const {validator} = require('./index');

module.exports = async(req, res, next) => {
    let validation = {
        data: req.body,
        rules: {
            name: "required",
            email: "required|email",
            password: "required",
            phone: "required"
        },
        messages: {
            required: ":attribute không được để trống",
            email: ":attribute không đúng định dạng"
        },
        attributes: {
            email: "Email",
            password: "Mật khẩu",
            name: "Name",
            phone: "Phone",
        }
    }

    return validator(req, res, next, validation);
}