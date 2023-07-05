interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    location: 'San Francisco'
};

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 24,
    location: 'San Francisco'
};

//Create two students, and create an array named studentsList containing the two variables
const studentsList: Array<Student> = [student1, student2];

//Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
//Each row should contain the first name of the student and the location
const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const tr = document.createElement('tr');
const th1 = document.createElement('th');
const th2 = document.createElement('th');
const th3 = document.createElement('th');
const th4 = document.createElement('th');

th1.innerHTML = 'First Name';
th2.innerHTML = 'Last Name';
th3.innerHTML = 'Age';
th4.innerHTML = 'Location';

tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
thead.appendChild(tr);
table.appendChild(thead);

studentsList.forEach((student) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');

    td1.innerHTML = student.firstName;
    td2.innerHTML = student.lastName;
    td3.innerHTML = student.age.toString();
    td4.innerHTML = student.location;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
});

table.appendChild(tbody);
document.body.appendChild(table);



