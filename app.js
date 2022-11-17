const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const indexRouter = require('./back-end/routes/indexRouter');
const createRouter = require('./back-end/routes/createRouter');
const updateRouter = require('./back-end/routes/updateRouter');
const APIRoute = require('./back-end/const/api.const');

var app = express();

const PORT = 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'front-end/public')));
app.use('/update', express.static(path.join(__dirname, 'front-end/public')));
// view engine setup
app.set('views', path.join(__dirname, 'front-end/views'));
app.set('view engine', 'ejs');


app.use(APIRoute.ROOT, indexRouter);
app.use(APIRoute.ROOT, createRouter);
app.use(APIRoute.ROOT, updateRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});

console.log(__dirname);