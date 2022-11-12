const express = require('express');
const APIRoute = require('../const/api.const');
const createController = require('../controllers/create.controller');

const createRouter = express.Router();

createRouter.get(APIRoute.addStudent, createController.createForm);
createRouter.post(APIRoute.saveStudent, createController.saveStudent);

module.exports = createRouter;