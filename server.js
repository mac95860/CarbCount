const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/carb-count', {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
    console.log('successfully connected to database');
});

app.listen(3000, () => {
    console.log('express server started')
});