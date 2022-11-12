var workplace = document.getElementById('subjects');
var form = document.getElementById('form');
var component = form.getAttribute('action').split('/');
var id = parseInt(component[3]);
var countSubject = parseInt(component[4]);

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

    form.setAttribute('action', `/update/save/${id}/${countSubject}`);
});