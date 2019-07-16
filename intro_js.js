// alert('Hello World!')
console.log('Hello World!')

// variables - [var], let, const
let age = 16
age = 17;
console.log(age);

// String, Numbers, Boolean, null, undefined, /symbol
const name = 'MengQi'
const isBold = true
const rating = 4.5
const x = null      //null is type of object
const y = undefined
let z
console.log(typeof z)

// Concatenation'''
console.log('My name is ' + name + ' and I am ' + age)
// Template string```
console.log(`My name is ${name} and I am ${age}`)

const s = 'Hello World!'
console.log(s.length)
console.log(s.toUpperCase())
console.log(s.toLocaleLowerCase())
console.log(s.substring(0,8))
console.log(s.substring(2,8).toUpperCase())
console.log(s.split(''))

const s1='apple, banana, it, code'
console.log(s1.split(' '))
console.log(s1.split(', '))



// Arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5)
console.log(numbers)

const fruits = ['apples', 'oranges', 'pears'] 
fruits[3] = 'grapes';   //reassign is not okay for const; but manipulate is ok
fruits.push('mangos')
fruits.unshift('watermelons')
console.log(fruits.length)
fruits.pop()
console.log(Array.isArray(fruits))
console.log(fruits)      //arrays are 0 based
console.log(fruits.length)

const person = {
    firstName: 'MQ',
    lastName: 'CHEN',
    age: 16,
    hobbies: ['running', 'drawing'],    //have arrays inside arrays
    address: {
        city: 'SH',
        country: 'CN'
    }
}

console.log(person.firstName, person.lastName)
console.log(person.hobbies[1])

// use const to take something out from the arrays
const { firstName, lastName, address: {city}} = person
console.log(city)

person.email = 'MQ@something.com'
console.log(person)

const todos = [
    {
        id: 1,
        text: 'learn JavaScript',
        isCompleted: false
    },
    {
        id: 2,
        text: 'Study Geometry',
        isCompleted: true
    },
    {
        id: 3,
        text: 'do math exercise',
        isCompleted: false
    }
]

console.log(todos)
console.log(todos[1].text)
console.log(typeof todos)       //objects

/*Json is how you send stuff to a server,
  Json have double quotes around most stuff except for boolea. */
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)



// loop - For
for(let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`);
}

//While
let i = 0
while(i < 10) {
    console.log(i)
    i++
}

for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text)
}

for(let todo of todos) {
    console.log(todo.id, todo.text, todo.isCompleted)
}

// high order array functions
// forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text)
})

const todoText = todos.map( function(todo) {
    return todo.text
})
console.log(todoText)

const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted == true
}).map(function(todo){
    return todo.text
})
console.log(todoCompleted)


const p = 10;

if(p === 10) {
    console.log('p is 10; double equal')
} else if(p < 10) {
    console.log('p is smaller than 10')
} else {
    console.log('triple equal needs to match data type')
}

/* double equal vs triple equal
|| or
&& and */

const color = p >= 10 ? 'red' : 'black'
console.log(color)

switch(color) {
    case 'black':
        console.log('color is black')
        break
    case 'red' :
        console.log('color is red')
        break
    default:
        console.log('color is not red or black')
        break
}


// functions
function addNums(num1=1, num2=1) {
    return num1 + num2
}

console.log(addNums(1, 10))
// pass in const =>

// Constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
    this.getBirthYear = function() {
        return this.dob.getFullYear()
    }
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}

// Class
class Schedule {
    constructor(time, subject, content) {
        this.subject = subject
        this.content = content
        this.time = new Date(time)
    }

    getDate() {
        return this.time;
    }
}

// Instantiate object
const person1 = new Person('mpmq', 'Chen', '1-10-2001')
const person2 = new Person('Mary', 'Smith', '10-1-1991')

const schedule1 = new Schedule('2019-7-15', 'Maths', 'Geometry')

console.log(person1.dob.getFullYear())
console.log(person1.getBirthYear())
console.log(person2.getFullName())

console.log(schedule1.getDate())


// Form
//alert('form!')