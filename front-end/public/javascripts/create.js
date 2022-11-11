var workplace = document.getElementById('workplace');
var form = document.getElementById('form');
var countSubject = 0;

document.getElementById('addsubject').addEventListener("click", function () {
    countSubject++;

    let subjectnameLabel = document.createElement('label');
    subjectnameLabel.innerText = "Subject Name";
    subjectnameLabel.setAttribute('for', "subjectname");
    subjectnameLabel.setAttribute('class', "");

    let subjectnameInput = document.createElement('input');
    subjectnameInput.setAttribute('type', "text");
    subjectnameInput.setAttribute('class', "");
    subjectnameInput.setAttribute('name', `subjectname${countSubject}`);


    let subjectcodeLabel = document.createElement('label');
    subjectcodeLabel.innerText = "Subject Code";
    subjectcodeLabel.setAttribute('for', "subjectname");
    subjectcodeLabel.setAttribute('class', "");

    let subjectcodeInput = document.createElement('input');
    subjectcodeInput.setAttribute('type', "text");
    subjectcodeInput.setAttribute('class', "");
    subjectcodeInput.setAttribute('name', `subjectcode${countSubject}`);


    let numberofcreditLabel = document.createElement('label');
    numberofcreditLabel.innerText = "Number of credits";
    numberofcreditLabel.setAttribute('for', "numberofcredit");
    numberofcreditLabel.setAttribute('class', "");

    let numberofcreditInput = document.createElement('input');
    numberofcreditInput.setAttribute('type', "text");
    numberofcreditInput.setAttribute('class', "");
    numberofcreditInput.setAttribute('name', `numberofcredit${countSubject}`);

    let markLabel = document.createElement('label');
    markLabel.innerText = "Mark";
    markLabel.setAttribute('for', "mark");
    markLabel.setAttribute('class', "");

    let markInput = document.createElement('input');
    markInput.setAttribute('type', "text");
    markInput.setAttribute('class', "");
    markInput.setAttribute('name', `mark${countSubject}`);

    workplace.appendChild(subjectnameLabel);
    workplace.appendChild(subjectnameInput);
    workplace.appendChild(subjectcodeLabel);
    workplace.appendChild(subjectcodeInput);
    workplace.appendChild(numberofcreditLabel)
    workplace.appendChild(numberofcreditInput)
    workplace.appendChild(markLabel)
    workplace.appendChild(markInput)
    workplace.appendChild(document.createElement('br'));

    form.setAttribute('action', `/addstudent/save/${countSubject}`);
});

document.getElementById('back').addEventListener("click", function () {
    if (window.confirm(`All your changes will not be recorded. \n Do you really want to leave? \n `)) {
        window.location.pathname = '/';
    } else {
        window.location.pathname = '/addstudent';
    };
});


