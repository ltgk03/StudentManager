const express = require('express');
const path = require('path');
const indexRouter = require('./back-end/routes/indexRouter');
const APIRoute = require('./back-end/const/api.const');

var app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'front-end/public')));
// view engine setup
app.set('views', path.join(__dirname, 'front-end/views'));
app.set('view engine', 'ejs');


app.use(APIRoute.ROOT, indexRouter);


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});