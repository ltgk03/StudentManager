const database = require('../utils/db');
const query = require('../const/query.const');
const { ROOT } = require('../const/api.const');

const updateStudent = async function (req, res) {
    const id = req.params.id;
    var studentInfo = [];
    studentInfo = await database.Query(query.selectStudent(id));
    var studentSubjects = [];
    studentSubjects = await database.Query(query.selectStudentSubjects(id));
    res.render('update.ejs', { infor: studentInfo, subjects: studentSubjects });
}

const saveUpdate = async function (req, res) {
    const id = req.params.id;
    const subjectnumber = req.params.subjectnumber;
    const infor = req.body;

    try {
        await database.Query(query.updateStudentInfo(parseInt(id), `'${infor.fullname}'`, `'${infor.dob}'`, `'${infor.faculty}'`, `'${infor.major}'`));
        await database.Query(query.deleteStudentSubject(parseInt(id)));
        for (let i = 1; i <= subjectnumber; i++) {
            const subjectcode = `subjectcode${i}`;
            const subjecname = `subjectname${i}`;
            const numberofcredit = `numberofcredit${i}`;
            const mark = `mark${i}`;
            await database.Query(query.createStudentSubject(parseInt(infor.id), `'${infor[subjectcode]}'`, `'${infor[subjecname]}'`, infor[numberofcredit], infor[mark]));
        }
    } catch (err) {
        console.error(err);
    } finally {
        res.redirect(ROOT);
    }

}

module.exports = {
    updateStudent,
    saveUpdate
}