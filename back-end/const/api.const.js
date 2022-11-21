const ROOT = "/";
const addStudent = "/addstudent";
const orderById = "/orderbyid";
const orderByName = "/orderbyname";
const search = "/search/:id";
const saveStudent = "/addstudent/save/:subjectnumber";
const deleteStudent = "/delete/:id";
const updateStudent = "/update/:id";
const saveUpdate = "/update/save/:id/:subjectnumber";
const getDetail = "/detail/:id";

module.exports = {
    ROOT,
    addStudent,
    saveStudent,
    orderById,
    orderByName,
    search,
    deleteStudent,
    updateStudent,
    saveUpdate,
    getDetail
}