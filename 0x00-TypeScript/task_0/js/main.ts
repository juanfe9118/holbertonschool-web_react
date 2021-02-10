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

const studentsList = [std1, std2];