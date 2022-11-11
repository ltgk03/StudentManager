const getAllStudents = `SELECT * FROM student_list`;
const deleteStudent = (id) => `DELETE FROM student_list WHERE id = ${id}`;
const createStudent = (id, fullname, dob, faculty, major) => `INSERT INTO student_list VALUES (${id}, ${fullname}, ${dob}, ${faculty}, ${major})`;
const createStudentSubject = (studentid, codeid, subjectname, numberofcredit, mark) => {
    return `INSERT INTO student_scores (studentid, codeid, subjectname, numberofcredit, mark) 
            VALUES (${studentid}, ${codeid}, ${subjectname}, ${numberofcredit}, ${mark})`;
}
const orderById = `SELECT * FROM student_list ORDER BY id`;
const orderByName = `SELECT * FROM student_list ORDER BY fullname`;

module.exports = {
    getAllStudents,
    createStudent,
    createStudentSubject,
    deleteStudent,
    orderById,
    orderByName
}