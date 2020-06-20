var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

//router and model
const indexRouter = require('./routes/index');
const staffRouter = require('./routes/staff.route');
const restaurantRouter = require('./routes/restaurant.route');
const roomRouter = require('./routes/room.route');
const serviceRouter = require('./routes/service.route');
const spendRouter = require('./routes/spend.route');
const staffjobRouter = require('./routes/staffjob.route');
const paymentRouter = require('./routes/payment.route');
const customer = require('./routes/customer.route');

const mongoose = require('mongoose');
const db = mongoose.connection;
const ulrDB = 'mongodb://localhost:27017/hotelDB'
// mongoose.set('useCreateIndex', true)
mongoose
  .connect(ulrDB, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(()=> console.log('DB Conect on port 27017!'));
db.on('error', err => {
  console.log('DB connection error: ', err.message);
})
// test:
// const indexSchema = new mongoose.Schema({
//   name: String,
// }, { collection: 'nhanvien'})
// //name colection, schema
// const user = mongoose.model('nhanvien', indexSchema);





// db.once('open', function() {
//   // we're connected!
//   console.log("conecct")
  
// });

// user.create([
//   { name: "tit" },
//   { name: "mit"}
// ])

// user.find().exec((err, users) =>{
//   console.log("list users: ", users)
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//router into database
app.use('/', indexRouter);

app.use('/spend',spendRouter);

app.use('/staff',staffRouter);

app.use('/restaurant',restaurantRouter);

app.use('/room',roomRouter);

app.use('/service',serviceRouter);

app.use('/staffjob',staffjobRouter);

app.use('/payment',paymentRouter);

app.use('/customer',customer);
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

module.exports = app;
