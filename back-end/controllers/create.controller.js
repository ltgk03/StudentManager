const database = require('../utils/db');
const query = require('../const/query.const');
const { addStudent } = require('../const/api.const');

const createForm = function (req, res) {
    res.render('create.ejs');
}

const saveStudent = async function (req, res) {
    const infor = req.body;
    console.log(infor);
    const subjectnumber = req.params.subjectnumber;
    try {
        await database.Query(query.createStudent(parseInt(infor.id, 10), `'${infor.fullname}'`, `'${infor.dob}'`, `'${infor.faculty}'`, `'${infor.major}'`));
        for (let i = 1; i <= subjectnumber; i++) {
            const subjectcode = `subjectcode${i}`;
            const subjecname = `subjectname${i}`;
            const numberofcredit = `numberofcredit${i}`;
            const mark = `mark${i}`;
            await database.Query(query.createStudentSubject(parseInt(infor.id, 10), `'${infor[subjectcode]}'`, `'${infor[subjecname]}'`, infor[numberofcredit], infor[mark]));
        }
    } catch (err) {
        console.error(err);
    } finally {
        res.redirect(addStudent);
    }
}

module.exports = {
    createForm,
    saveStudent
}