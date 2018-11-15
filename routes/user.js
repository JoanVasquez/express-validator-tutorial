const validation = require('../validation');

module.exports = (req, res, next) => {
    try {
        let validationErrors = validation(req);
        if (validationErrors) {
            res.status(400).send(validationErrors);
        } else {
            if (!res.headersSent) {
                res.status(201).send({ message: "User validated..." });
            }
        }
    } catch (ex) {
        const error = new Error(`Error in /api/user/save ${ex}`);
        error.status = 500;
        next(error);
    }
};
