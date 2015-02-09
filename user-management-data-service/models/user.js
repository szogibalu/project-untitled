var mongoose = require('mongoose');

var genders = 'MALE FEMALE'.split(' ')
var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  gender: { type: String, enum: genders },
  birthday: Date
});

module.exports = mongoose.model('User', UserSchema, 'user');