const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min : 6,
        max: 15,
    },
    password: {
        type: String, 
        required: true,
        min: 8,
        max: 14,
    },
    
    
});