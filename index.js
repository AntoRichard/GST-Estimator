// Dependency 
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');

// Database connection
mongoose.connect('mongodb://amrita:amrita@amrita-shard-00-00-cfiak.mongodb.net:27017,amrita-shard-00-01-cfiak.mongodb.net:27017,amrita-shard-00-02-cfiak.mongodb.net:27017/test?ssl=true&replicaSet=amrita-shard-0&authSource=admin&retryWrites=true',{
  useMongoClient : true
})
// Online Database 
// mongoose.connect('mongodb://localhost/Amritha_SIH');

// User defines routes
const RegisterRoute = require(path.join(__dirname, 'routes', 'register'));
const LoginRoute = require(path.join(__dirname, 'routes', 'login'));
const IndexRoute = require(path.join(__dirname, 'routes', 'index'));
const EntryRoute = require(path.join(__dirname, 'routes', 'entry'));
const CustRoute = require(path.join(__dirname, 'routes', 'custlogin'));
const GstRoute = require(path.join(__dirname, 'routes', 'gstest'));
const CompDetailsRoute = require(path.join(__dirname, 'routes', 'companyDetails'));
const EwayRoute = require(path.join(__dirname, 'routes', 'ewayBill'));
const IndusLogRoute = require(path.join(__dirname, 'routes', 'industry-Login'));
const IndusRegRoute = require(path.join(__dirname, 'routes', 'industry-reg'));
const LogoutRoute = require(path.join(__dirname, 'routes', 'logout'));
const ClearRoute = require(path.join(__dirname, 'routes', 'clear'));
const compDisp = require(path.join(__dirname, 'routes', 'compDisp'));
const ShowRoute = require(path.join(__dirname, 'routes', 'show'));
const GenerateRoute = require(path.join(__dirname,'routes','generate'));

const FileUpload = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'public/images');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

// Config
let app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(multer({
  storage: FileUpload
}).single('image'));

// Routes
app.use(RegisterRoute);
app.use(LoginRoute);
app.use(IndexRoute);
app.use(EntryRoute);
app.use(CustRoute);
app.use(GstRoute);
app.use(CompDetailsRoute);
app.use(EwayRoute);
app.use(IndusLogRoute);
app.use(LogoutRoute);
app.use(ClearRoute);
app.use(IndusRegRoute);
app.use(compDisp);
app.use(ShowRoute);
app.use(GenerateRoute);

// Server running in PORT : 3000
app.listen(PORT, () => {
  console.log(`Server running in PORT : ${ PORT }`);
});