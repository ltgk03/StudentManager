const database = require('../utils/db');
const query = require('../const/query.const');
const { ROOT } = require('../const/api.const');

const getAllStudents = async function (req, res) {
    var result = [];
    result = await database.Query(query.getAllStudents);
    res.render('index.ejs', { data: result });
}

const orderById = async function (req, res) {
    var result = [];
    result = await database.Query(query.orderById);
    res.render('index.ejs', { data: result });
}

const orderByName = async function (req, res) {
    var result = [];
    result = await database.Query(query.orderByName);
    res.render('index.ejs', { data: result });
}

const deleteStudent = async function (req, res) {
    const id = req.params.id;
    console.log(id);
    await database.Query(query.deleteStudent(id));
    console.log("Query success");
    res.redirect(ROOT);
}

const getDetail = async function (req, res) {
    const id = req.params.id;
    var result = [];
    result = await database.Query(query.getDetail(id));
    console.log(result);
    res.render('detail.ejs', { data: result });
}

const search = () => { }
module.exports = {
    getAllStudents,
    deleteStudent,
    orderById,
    orderByName,
    search, 
    getDetail
}