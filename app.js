const app = express();

const 

app.use(bodyParser.urlencoded({ extended:flase}));

app.use();

app.use((req, res, next) =>{
    res.send('<h1>Hello i am from express!</h1>')
});

app.listen(3000);