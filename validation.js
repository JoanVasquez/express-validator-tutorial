const saveValidation = req => {
    let validationErrors = null;
    req.checkBody("name", "The name must be between 4 - 20").isLength({
        min: 4,
        max: 20
    });
    req
        .checkBody("name", "The name must be only letters")
        .matches("^[a-zA-z ]*$");
    req.checkBody("email", "Enter a valid email address").isEmail();
    req
        .checkBody("password", "The password must be min 5 characters!")
        .isLength({ min: 5, max: undefined });

    validationErrors = req.validationErrors();
    return validationErrors;
};

module.exports = saveValidation;