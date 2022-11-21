const getAllStudents = `SELECT * FROM student_list`;
const orderById = `SELECT * FROM student_list ORDER BY id`;
const orderByName = `SELECT * FROM student_list ORDER BY fullname`;

const selectStudent = (id) => {
    return `SELECT * FROM student_list WHERE id = ${id}`;
}
const selectStudentSubjects = (id) => {
    return `SELECT codeid, subjectname, numberofcredit, mark FROM student_scores WHERE studentid = ${id}`;
}
const deleteStudent = (id) => `DELETE FROM student_list WHERE id = ${id}`;
const createStudent = (id, fullname, dob, faculty, major) => `INSERT INTO student_list VALUES (${id}, ${fullname}, ${dob}, ${faculty}, ${major})`;
const createStudentSubject = (studentid, codeid, subjectname, numberofcredit, mark) => {
    return `INSERT INTO student_scores (studentid, codeid, subjectname, numberofcredit, mark) 
            VALUES (${studentid}, ${codeid}, ${subjectname}, ${numberofcredit}, ${mark})`;
}
const updateStudentInfo = (id, fullname, dob, faculty, major) => {
    return `UPDATE student_list 
            SET fullname = ${fullname},
                dob = ${dob},
                faculty = ${faculty},
                major = ${major}
            WHERE id = ${id}`;
}
const deleteStudentSubject = (id) => `DELETE FROM student_scores WHERE studentid = ${id}`;
const getDetail = (id) => `SELECT * FROM student_list l LEFT JOIN student_scores s ON l.id = s.studentid WHERE l.id = ${id}`;

module.exports = {
    getAllStudents,
    orderById,
    orderByName,
    createStudent,
    createStudentSubject,
    deleteStudent,
    selectStudent,
    selectStudentSubjects,
    updateStudentInfo,
    deleteStudentSubject,
    getDetail
}