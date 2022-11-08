const mysql = require('mysql2');
const query = require('../const/query.const');


async function getAllStudents() {
    var res = [];
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'password',
        database: 'studentmanager'
    });
    await connection.promise().query(query.getAllStudents)
    .then(([rows, fields]) => res = rows)
    .catch(console.log)
    .then(() => connection.end());
    return res;
} 
module.exports = {
    getAllStudents
}
