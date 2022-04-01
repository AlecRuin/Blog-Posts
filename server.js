const path= require("path")
const express = require("express")
const session = require("express-session")
const expresshandlebars= require("express-handlebars")
const SequelizeStore=require("connect-session-sequelize")(session.Store)

const routes = require("./controllers")
//const sequelize=require("./config/connection")
const helpers = require("./utils/helpers")

const app = express();
const PORT = process.env.PORT || 3001;
//create custom cookie to use for app
const sess = {
    secret: "ASDF123!@#",
    cookie:{},
    resave:false,
    saveUninitialized:true,
}
//use cookie
app.use(session(sess))
/*set the view engine to handlebars. this will make handlebars
automatically search for a folder called views/layouts/main.handlebars to use as the 
template for all pages. however, nothing will be shown unless app.render is used in 
conjunction with another handle bar. 
*/
const hbs = expresshandlebars.create({helpers})
app.engine("handlebars",hbs.engine)
app.set("view engine","handlebars")

/*
spin up server, encode everything recieved in json, and set the view folder to Public
*/
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))
//for all inquiries on the site, redirect to the index.js found with controllers folder
app.use(routes)
app.listen(PORT, () => console.log(`Now listening at http://localhost:${PORT}`));