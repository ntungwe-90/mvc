// 
const express = require('express');
const PORT = process.env.PORT || 7001
const expressLayouts = require('express-ejs-layouts');



const app = express()



app.use(express.static ('public'));
app.use(expressLayouts);
app.use(express.urlencoded({extended:true}));


app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

const route = require('./server/routes/pagesRoute')
app.use('/',route)

const menuRoute = require('./server/routes/menuRoutes')
app.use('/menus', menuRoute)

const commentRoute = require('./server/routes/commentRoutes')
app.use('/comments', commentRoute)


app.listen(PORT, ()=>console.log(`running`))