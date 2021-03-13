var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/api/index');
var usersRouter = require('./src/api/users');
var activitatsRouter = require('./src/api/activitats');

var app = express();

// view engine setup
/*
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
*/
 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/activitats', activitatsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

//CONNECT TO MONGODB
mongoose.connect('mongodb+srv://backend:backend2021@cluster0.1qpev.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', ()=>
{
 console.log('connected to DB')
});

module.exports = app;
