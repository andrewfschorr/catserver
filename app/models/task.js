var mongoose = require('mongoose');

var taskSchema = mongoose.Schema({
    name: String,
    user: String,
    date: Date,
});

module.exports = mongoose.model('Task', taskSchema);
