document.getElementById("orderbyid").addEventListener("click", function () {
    window.location.pathname = "/orderbyid";
});

document.getElementById("orderbyname").addEventListener("click", function () {
    window.location.pathname = "/orderbyname"
});

function deleteStudent(deleteBtn) {
    if (!window.confirm("Are you sure to delete this student from the list?\n " +
        "All information about this student will be completely deleted.")) {
    } else {
        const id = deleteBtn.parentElement.parentElement.querySelector('#id').innerText.trim();
        window.location.pathname = `/delete/${id}`;
    }
}