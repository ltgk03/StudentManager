const database = require('../utils/db');
const query = require('../const/query.const');

const getAllStudents = async function (req, res) {
    var result = [];
    result = await database.Query(query.getAllStudents);
    res.render('index.ejs', {data: result});
}

const order = async function (req, res) {
    var result = [];
    console.log(req.body);
    // if (req.body.title == "orderbyid") {
    //     result = await database.Query(query.orderById);
    // } else {
    //     result = await database.Query(query.orderByName);    
    // }
    // return result;
}

const search = () => {}
module.exports = {
    getAllStudents,
    order,
    search
}