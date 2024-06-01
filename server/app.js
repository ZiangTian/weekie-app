var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const buildPath = path.join(__dirname, '../build');  // Adjust path if necessary
const bodyParser = require('body-parser');

app.use(express.static(buildPath));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const cors = require('cors');

app.use(cors({ origin: 'http://localhost:5000' })); 

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
  res.render('error');
});

app.post('/login', bodyParser.json(), (req, res) => {
  const { username, password } = req.body; // Extract username and password

  // Replace with your actual user authentication logic (e.g., database check)
  if (username === '00' && password === '00') {
    // Successful login
    res.json({ success: true });
  } else {
    // Failed login
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

module.exports = app;
