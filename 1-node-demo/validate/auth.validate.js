module.exports.loginPost = (req, res, next) => {
    const errors = [];
    if (!req.body.email) {
        errors.push("Email is require");
    }
    if (!req.body.password) {
        errors.push("Password is require");
    }
    if (errors.length) {
        res.render('login', {
            errors: errors,
            values: req.body
        })
        return;
    }
    next();
};