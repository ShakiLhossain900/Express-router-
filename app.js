const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false}));

app.use('/admin',adminRoutes); //only /admin dile adim route file jabe
app.use(shopRoutes);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, './', 'views', '404.html'));
});


app.listen(3000);