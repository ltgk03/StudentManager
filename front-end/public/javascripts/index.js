document.getElementById("uet").addEventListener("click", function () {
    window.location.pathname = "/";
});

document.getElementById("home").addEventListener("click", function () {
    window.location.pathname = "/";
});

document.getElementById("addstudent").addEventListener("click", function () {
    window.location.pathname = "/addstudent";
});

document.getElementById("orderbyid").addEventListener("click", function () {   
    fetch("http://localhost:3000", {
        method: "POST",
        header: {
            "Content-type": "charset=UTF-8"
        },
        body: {
            title: "orderbyid"
        }
   })
   .then (response => response.json())
   .then (json => console.log(json)); 
});

document.getElementById("orderbyname").addEventListener("click", function () {
   fetch("http://localhost:3000", {
        method: "POST",
        header: {
            "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            title: "orderbyname"
        })
   })
   .then (response => response.json())
   .then (json => console.log(json));
});
