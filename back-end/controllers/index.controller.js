const database = require('../utils/db');
const query = require('../const/query.const');

const getAllStudents = async function (req, res) {
    var result = [];
    result = await database.Query(query.getAllStudents);
    res.render('index.ejs', {data: result});
}

const orderById = async function (req, res) {
    var result = [];
    result = await database.Query(query.orderById);
    res.render('index.ejs', {data: result});
}

const orderByName = async function (req, res) {
    var result = [];
    result = await database.Query(query.orderByName);
    res.render('index.ejs', {data: result});
}

const search = () => {}
module.exports = {
    getAllStudents,
    orderById,
    orderByName,
    search
}