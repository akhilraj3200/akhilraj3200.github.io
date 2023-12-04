const mongoose = require('mongoose');
const path = require('path');


// crypto = require('crypto');

const User = new mongoose.Schema({
    email :{type: String, required: true, unique: true},
    password : {type: String, required: true},
    name : {type: String, required: true},avatar:{type: String}
    },  {timestamps : true
    });


const UserData = mongoose.model('user', User);

module.exports = UserData;