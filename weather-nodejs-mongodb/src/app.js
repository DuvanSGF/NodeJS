const path = require('path')
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// Conecting to BD
mongoose.connect('mongodb://localhost/sensor')
 .then(db => console.log('Succesfull conection to DB'))
 .catch(err => console.log(err));

// importing routes
const indexRoutes = require('./routes/index');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', indexRoutes);
// Starting server
app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});
