const express = require('express');
const APIRoute = require('../const/api.const');
const indexController = require('../controllers/index.controller');

const indexRouter = express.Router();

indexRouter.get(APIRoute.ROOT, indexController.getAllStudents);
indexRouter.get(APIRoute.orderById, indexController.orderById);
indexRouter.get(APIRoute.orderByName, indexController.orderByName);
indexRouter.get(APIRoute.deleteStudent, indexController.deleteStudent);
indexRouter.get(APIRoute.getDetail, indexController.getDetail);


module.exports = indexRouter;

