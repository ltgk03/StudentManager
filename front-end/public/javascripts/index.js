$(document).ready(function () {
   $("#delete").on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
   });
   $("#update").on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
    });
});
document.getElementById("orderbyid").addEventListener("click", function () {
    window.location.pathname = "/orderbyid";
});

document.getElementById("orderbyname").addEventListener("click", function () {
    window.location.pathname = "/orderbyname"
});

function deleteStudent(id) {
    if (!window.confirm("Are you sure to delete this student from the list?\n" +
        "All information about this student will be completely deleted.")) {
    } else {
        window.location.pathname = `/delete/${id}`;
    }
}

function updateStudent(id) {
    window.location.pathname = `/update/${id}`;
}

function getDetail(detailBtn) {
    const id = detailBtn.querySelector("#id").innerText.trim();
    window.location.pathname = `/detail/${id}`;   
}