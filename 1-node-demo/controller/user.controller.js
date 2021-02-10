const ObjectID = require('mongodb').ObjectID
const User = require('../models/user.model');

module.exports = {
    index: async (req, res) => {
        res.render('users', {
            users: await User.find()
        });
    },
    search: async (req, res) => {
        const q = req.query.q;
        const matchUsers = await User.find({ 'name': { '$regex': q, '$options': 'i' } });
        res.render('users', {
            users: matchUsers
        })
    },
    create: (req, res) => {
        res.render('create');
    },
    createPost: async (req, res) => {
        req.body.avatar = req.file.path.split('/').slice(1).join('/');
        await User.create(req.body);
        res.redirect('/users')
    },
    view: (req, res) => {
        const id = req.params.id;
        const user = User.find({ '_id': ObjectID(id) });
        res.render('view', {
            user: user
        })
    }
}