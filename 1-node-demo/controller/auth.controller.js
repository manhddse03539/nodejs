const md5 = require('md5')
const db = require('../db')

module.exports = {
    login: (req, res) => {
        res.render('login');
    },
    postLogin: (req, res) => {
        var email = req.body.email;
        var user = db.get('users').find({ email: email }).value();
        if (!user) {
            res.render('login', {
                errors: [
                    'User is not exist!'
                ],
                values: req.body
            });
            return;
        }
        const hashPassword = md5(req.body.password);
        if (user.password !== hashPassword) {
            res.render('login', {
                errors: [
                    'Wrong password. Please try again!'
                ],
                values: req.body
            });
            return;
        }
        res.cookie('userId', user.id, {
            signed: true
        });
        res.redirect('/users')
    },
}