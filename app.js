'use strict';
let mainForm = document.getElementById('mainFormId');
let studentTable = document.getElementById('tableId');

let gradesArry = [];

function Grades(studentName, course) {
  this.studentName = studentName;
  this.course = course;
  gradesArry.push(this);


}

let studentGrades=[];
studentGrades.push

function generateRandomNub(){
  return Math.floor(Math.random() * (100 - 0) + 0);
}

Grades.prototype.takedata = function () {
  let tableRow = document.createElement('tr');
  let tableDataS = document.createElement('td');
  let tableDataC = document.createElement('td');
  tableDataS.textContent = gradesArry.this.studentName;
  tableDataC.textContent = gradesArry.this.course;
  tableRow.appendChild(tableDataS);
  tableRow.appendChild(tableDataC);
};

Grades.prototype.render=function() {
  let tableRow = document.createElement('tr');
  for (let index = 0; index < gradesArry.length; index++) {
    let tableData = document.createElement('td');
    tableData.textContent = gradesArry[index];
    tableRow.appendChild(tableData);
  }
  studentTable.appendChild(tableRow);
};

function handlesubmistion(event) {
  event.preventDefault();
  let student = event.target.sname.value;
  let course = event.target.course.value;
  let newstudent = new Grades(student, course);
  newstudent.textContent =gradesArry;
  localStorage.setItem (JSON.stringify('studentGrade', gradesArry));
}

function getItemLs() {
  let data = JSON.parse(localStorage.getItem('studentGrade'));
  if (gradesArry !== null) {
    let studentGrade = data;

  }

}



let headerRowArry = ['Student Name','student Grade' ,'Course','status'];
function renderingHeaderRow() {
  let tableRow = document.createElement('tr');
  for (let index = 0; index < headerRowArry.length; index++) {
    let tableHeader = document.createElement('th');
    tableHeader.textContent = headerRowArry[index];
    tableRow.appendChild(tableHeader);
  }
  studentTable.appendChild(tableRow);

}
renderingHeaderRow();
mainForm.addEventListener('submit', handlesubmistion);
getItemLs();
//render();

