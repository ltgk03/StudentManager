const express = require('express');
const APIRoute = require('../const/api.const');
const indexController = require('../controllers/index.controller');

const indexRouter = express.Router();

indexRouter.get("/", indexController.getAllStudents);


module.exports = indexRouter;

