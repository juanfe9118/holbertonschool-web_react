interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const std1: Student = {
    firstName: 'Mark',
    lastName: 'Webber',
    age: 20,
    location: 'Tampa, FL'
};

const std2: Student = {
    firstName: 'John',
    lastName: 'Browser',
    age: 26,
    location: 'Orlando, FL'
};

const studentsList: Array<Student> = [std1, std2];

const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const tr: HTMLTableRowElement = document.createElement('tr');
const th1: HTMLTableCellElement = document.createElement('td');
const th2: HTMLTableCellElement = document.createElement('td');

body.append(table);
table.append(thead);
table.append(tbody)
thead.append(tr);
tr.append(th1);
tr.append(th2);

studentsList.forEach(element => {
  const trTb: HTMLTableRowElement = document.createElement('tr');
  tbody.append(trTb);

  let td: HTMLTableCellElement = document.createElement('td');
  td.innerHTML = element.firstName;
  trTb.append(td);

  td = document.createElement('td');
  td.innerHTML = element.location;
  trTb.append(td);
});