const app = express();

const adminRoutes = require('./Routers/admin')

app.use(bodyParser.urlencoded({ extended:flase}));

app.use(adminRoutes);

app.use('/',(req, res, next) =>{
    res.send('<h1>Hello i am from express!</h1>')
});

app.listen(3000);