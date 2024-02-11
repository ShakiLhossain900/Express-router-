const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false}));

app.use('/admin',adminRoutes); //only /admin dile adim route file jabe
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>page is not found</h1>');  //dummy path dile like /sdfdhsfjk
});


app.listen(3000);