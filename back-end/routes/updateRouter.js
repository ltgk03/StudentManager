const express = require('express');
const APIRoute = require('../const/api.const');
const updateController = require('../controllers/update.controller');

const updateRouter = express.Router();

updateRouter.get(APIRoute.updateStudent, updateController.updateStudent);
updateRouter.post(APIRoute.saveUpdate, updateController.saveUpdate);


module.exports = updateRouter;