const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const errorController = require("./controllers/error");

const app = express();

//app.engine('hbs', expressHbs())
app.set("view engine", "ejs"); //Note: The view engine cache does not cache the contents of the template’s output,
app.set("views", "views"); //directory fo the folder (find)

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes); //only /admin dile adim route file jabe
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);

//code ta MVC er onk change hoice tai ata pore code ta aro dekbu logic golo bojte 

//working on the enhanching the app
//i will check the code and understand the code as well