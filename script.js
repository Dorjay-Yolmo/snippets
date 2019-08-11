const name = "John is a dudet";
// const age = '25';

const ahem = name.split(" ");
const number = new Array("125", "boo", "shit");

//object

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     hobbies: ['music','movies','sports'],
//     address: {
//         street: '50 main st',
//         city: 'Boston',
//         state: 'MA'
//     }
// }

//destruct

// const {firstName, lastName, age, address: {city}} = person;
// console.log(firstName,lastName, city);

const todos = [
  {
    id: 1,
    text: "Take out Trash",
    isCompleted: true
  },
  {
    id: 2,
    text: "Meeting with Boss",
    isCompleted: true
  },
  {
    id: 3,
    text: "Dentist Appointment",
    isCompleted: false
  }
];

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

todos.forEach(todo => console.log(todo));

const todoText = todos.map(todo => todo.text);

console.log(todoText);
const todoCompleted = todos
  .filter(todo => todo.isCompleted === true)
  .map(todo => todo.id);

console.log(todoCompleted);

//Constructor function

// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getBirthYear() {
    return this.dob.getFullYear();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
//Instantiate object

const person1 = new Person("John", "Doe", "4-3-1980");
const person2 = new Person("Mary", "Smith", "3-6-1970");

console.log(person2.getFullName());
console.log(person1.getFullName());
console.log(person1.getBirthYear());
console.log(person2.getBirthYear());
