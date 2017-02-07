const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userSchema = new Schema({
    companyId: String,
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    gender: String,
    role: String
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;