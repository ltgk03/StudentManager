var workplace = document.getElementById('workplace');
var form = document.getElementById('form');
var countSubject = 0;

document.getElementById('addsubject').addEventListener("click", function () {
    countSubject++;

    let subject = document.createElement('div');
    subject.setAttribute('style', 'border: 1px solid #ccc; border-radius: 5px; padding: 10px; margin-bottom: 20px;background-color: #404258; color: #ffff');

    let subjectComponent1 = document.createElement('div');
    subjectComponent1.setAttribute('class', 'mb-4 form-group');
    subjectComponent1.innerHTML = 
    "<label>Subject Name</label>" +
    "<input type='text' class='form-control' name='subjectname" + countSubject + "' required>";

    let subjectComponent2 = document.createElement('div');
    subjectComponent2.setAttribute('class', 'mb-4 form-group');
    subjectComponent2.innerHTML = 
    "<label>Subject Code</label>" +
    "<input type='text' class='form-control' name='subjectcode" + countSubject + "' required>";

    let subjectComponent3 = document.createElement('div');
    subjectComponent3.setAttribute('class', 'mb-4 form-group');
    subjectComponent3.innerHTML = 
    "<label>Number of credits</label>" +
    "<input type='text' class='form-control' name='numberofcredit" + countSubject + "' required>";

    let subjectComponent4 = document.createElement('div');
    subjectComponent4.setAttribute('class', 'mb-4 form-group');
    subjectComponent4.innerHTML = 
    "<label>Mark</label>" +
    "<input type='text' class='form-control' name='mark" + countSubject + "' required>";

    subject.appendChild(subjectComponent1);
    subject.appendChild(subjectComponent2);
    subject.appendChild(subjectComponent3);
    subject.appendChild(subjectComponent4);

    workplace.appendChild(subject);

    form.setAttribute('action', `/addstudent/save/${countSubject}`);
});



