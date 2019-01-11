var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./index');

var app = express();
app.enable('strict routing');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/dist', express.static(path.join(__dirname, 'frontend/dist')));
app.use('/assets', express.static(path.join(__dirname, 'frontend/assets')));


// I think this strict routing for the case "/" is broken, cause should match only "/",
// but it matches everything, so this if check is needed
app.use('/', (req, res, next) => {
  if (req.url === '/') {
    return res.redirect(301, '/index');
  }

  next();
});

app.use('/images/DigitalProductSchool.pdf', (req, res, next) => {
  return res.redirect(301, '/assets/program-info.pdf');
});

app.use('/index', indexRouter);
app.use('/our-program', indexRouter);
app.use('/apply', indexRouter);
app.use('/legal-disclosure', indexRouter);
app.use('/privacy-policy', indexRouter);
app.use('/tracks/:trackId(pm|se|ixd|ai)', indexRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err);
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
