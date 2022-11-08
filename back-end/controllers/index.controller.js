const database = require('../utils/db');

const getAllStudents = async function (req, res) {
    var result = [];
    result = await database.getAllStudents();
    console.log(result);    
    res.render('index.ejs', {data: result});
}


module.exports = {
    getAllStudents
}