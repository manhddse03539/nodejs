const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: String,
    description: String,
    password: String,
    avatar: String,
    class: String,

})

const User = mongoose.model('User', userSchema, 'users')

module.exports = User;