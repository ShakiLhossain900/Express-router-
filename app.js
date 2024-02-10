const app = express();

const adminRoutes = require('./Routers/admin')

app.use(bodyParser.urlencoded({ extended:flase}));

app.use(adminRoutes);

app.listen(3000);