module.exports.createPost = (req, res, next) => {
    const errors = [];
    if (!req.body.name) {
        errors.push("Name is require");
    }
    if (!req.body.class) {
        errors.push("Class is require");
    }
    const users = db.get('users').value();
    let isExisted = false;
    users.forEach(user => {
        if (user.name === req.body.name) {
            isExisted = true;
        }
    });
    if (isExisted) {
        errors.push("User is existed!");
    }
    if (errors.length) {
        res.render('create', {
            errors: errors,
            values: req.body
        })
        return;
    }
    next();
};