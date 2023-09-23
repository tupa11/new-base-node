const Validator = require('validatorjs');
const {jsonData} = require('./../helpers/Helper');
const StatusCode = require('./../constants/StatusCode');

const validator = async (req, res, next, validation) => {
    const validator = new Validator(
        validation.data,
        validation.rules,
        validation.messages
    )
    validation.attributes ? validator.setAttributeNames(validation.attributes) : '';

    function passes() {
        next();
    };

    function fails() {
        res.json(jsonData(
            StatusCode.BAD_REQUEST,
            validator.errors.errors
        ))
    };

    return validator.checkAsync(passes, fails);
}

module.exports = {
    validator
}