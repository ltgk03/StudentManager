const express = require('express');
const APIRoute = require('../const/api.const');
const indexController = require('../controllers/index.controller');

const indexRouter = express.Router();

indexRouter.get(APIRoute.ROOT, indexController.getAllStudents);
indexRouter.post(APIRoute.ROOT, function (req, res) {
    res = indexController.order;
});


module.exports = indexRouter;

