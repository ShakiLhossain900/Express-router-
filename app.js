const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

app.engine('hbs', expressHbs())
app.set('view engine', 'hbs'); //Note: The view engine cache does not cache the contents of the template’s output, 
app.set('views', 'views');  //directory fo the folder (find)

const admindata = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',admindata.routes); //only /admin dile adim route file jabe
app.use(shopRoutes);

app.use((req, res, next) => {
    //res.sendFile(path.join(__dirname, './', 'views', '404.html'));
    res.status(404).render('404');
});


app.listen(3000);


//pug one or two option er jonnu use kore handlebar amara pug ke dynamic vabe use korte parbeu
