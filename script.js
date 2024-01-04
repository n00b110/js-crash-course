// alert('Hello World!');

console.log("This is logging!");  // This is an log
console.warn("This is a warning!"); // This is an warning
console.error('This is an error!') // This is an error


// Variables

const age = 30;
// age = 31; Throws an error

// let is mutable
// let x = 1;
// x = 2, is valid

// let n; is valid ✅
// const n; is a syntax error ❌


// Primative Data Types

// String, Numbers, Boolean, null, undefined, * symbols *


const my_name = 'John';
const number = 30;
const rating = 45;
const isCool = true;
const x = null;

console.log(typeof number) // -> number
console.log(typeof my_name) // -> string


// Strings


// Template literals

console.log(`My name is ${my_name} and I am ${number}`)


// String Methods

const s = 'Hello World';
console.log(s.length);
console.log(s.split);


// Arrays - variables that hold multiple values

const numbers = new Array(1, 2, 3, 4, 5);

const fruits = ['apples', 'bananas', 'strawberries']

console.log(fruits[1]); // -> 'apples'

fruits[1] = 'grapes';

fruits.pop()

fruits.unshift('strawberries');

console.log(fruits[1]);


console.log(Array.isArray('hello'))
console.log(Array.isArray(fruits[1]))
console.log(Array.isArray(fruits))


const my_object = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['boxing', 'swimming', 'fishing'],
    address: {
        street: '',
        city: 'Boston',
        state: 'MA'
    }


}


// Destructing

const {firstName, lastName, address: { city }} = person;

person.email = 'john@gmail.com'

console.log(person)


// More object stuff

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true,
    },

    {
        id: 2,
        text: 'Reply to emails',
        isCompleted: true,
    },

    {
        id: 3,
        text: 'Take out trash',
        isCompleted: true,
    }
]
 
console.log(todos)


