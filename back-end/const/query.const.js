const getAllStudents = `SELECT * FROM student_list`;
const deleteStudent = ``;
const updateStudent = ``;
const createStudent = ``;
const getStudentScore = ``;
const updateStudentScore = ``;
const orderById = `SELECT * FROM student_list ORDER BY id`;
const orderByName =`SELECT * FROM student_list ORDER BY name`;

module.exports = {
    getAllStudents,
    deleteStudent,
    updateStudent,
    createStudent,
    getStudentScore,
    updateStudentScore,
    orderById,
    orderByName
}