const mongoose = require('mongoose')
mongoose.Promise = global.Promise //para tirar warning

module.exports = mongoose.connect('mongodb://localhost/todo')