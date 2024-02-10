const express = require('express');

const router = express.Router();

app.use('/',(req, res, next) =>{
    res.send('<h1>Hello i am from express!</h1>');
});

module.exports = router;
