const mysql = require('mysql2');
async function Query(query) {
    var res = [];
    const connection = await mysql.createConnection({
        host:'localhost', 
        user: 'root', 
        password: 'password',
        database: 'studentmanager'
    });
    await connection.promise().query(query)
    .then(([rows, fields]) => res = rows)
    .catch(console.log)
    .then(() => connection.end());
    return res;
} 

module.exports = {
    Query
}
